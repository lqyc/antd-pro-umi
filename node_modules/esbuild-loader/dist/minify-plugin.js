"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const webpack_sources_1 = require("webpack-sources");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package');
const isJsFile = /\.js$/i;
const pluginName = 'esbuild-minify';
// eslint-disable-next-line unicorn/no-fn-reference-in-iterator
const flatMap = (array, cb) => array.flatMap ? array.flatMap(cb) : [].concat(...array.map(cb));
class ESBuildMinifyPlugin {
    constructor(options) {
        this.options = { ...options };
        const hasMinify = Object.keys(this.options).some(k => k.startsWith('minify'));
        if (!hasMinify) {
            this.options.minify = true;
        }
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            assert_1.default(compiler.$esbuildService, '[esbuild-loader] You need to add ESBuildPlugin to your webpack config first');
            const meta = JSON.stringify({
                name: 'esbuild-loader',
                version,
                options: this.options,
            });
            compilation.hooks.chunkHash.tap(pluginName, (_, hash) => hash.update(meta));
            const hooks = compilation.hooks;
            if (hooks.processAssets) {
                hooks.processAssets.tapPromise({
                    name: pluginName,
                    stage: compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
                }, async (assets) => this.transformAssets(compilation, Object.keys(assets)));
                hooks.statsPrinter.tap(pluginName, (stats) => {
                    stats.hooks.print
                        .for('asset.info.minimized')
                        .tap(pluginName, (minimized, { green, formatFlag }) => minimized ? green(formatFlag('minimized')) : undefined);
                });
            }
            else {
                compilation.hooks.optimizeChunkAssets.tapPromise(pluginName, async (chunks) => this.transformAssets(compilation, flatMap(chunks, chunk => chunk.files)));
            }
        });
    }
    async transformAssets(compilation, assetNames) {
        const { options: { devtool, }, $esbuildService, } = compilation.compiler;
        assert_1.default($esbuildService, '[esbuild-loader] You need to add ESBuildPlugin to your webpack config first');
        const sourcemap = (
        // TODO: drop support for esbuild sourcemap in future so it all goes through WP API
        this.options.sourcemap === undefined ?
            devtool && devtool.includes('source-map') :
            this.options.sourcemap);
        const transforms = assetNames
            .filter(assetName => isJsFile.test(assetName))
            .map((assetName) => [
            assetName,
            compilation.getAsset(assetName),
        ])
            .map(async ([assetName, { info, source: assetSource },]) => {
            const { source, map } = assetSource.sourceAndMap();
            const result = await $esbuildService.transform(source.toString(), {
                ...this.options,
                sourcemap,
                sourcefile: assetName,
            });
            compilation.updateAsset(assetName, sourcemap ?
                new webpack_sources_1.SourceMapSource(result.code || '', assetName, result.map, source === null || source === void 0 ? void 0 : source.toString(), map, true) :
                new webpack_sources_1.RawSource(result.code || ''), {
                ...info,
                minimized: true,
            });
        });
        if (transforms.length > 0) {
            await Promise.all(transforms);
        }
    }
}
exports.default = ESBuildMinifyPlugin;
