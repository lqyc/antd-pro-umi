"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_utils_1 = require("loader-utils");
const tsxTryTsLoaderPtrn = /Unexpected|Expected/;
async function ESBuildLoader(source) {
    var _a, _b;
    const done = this.async();
    const options = loader_utils_1.getOptions(this);
    const service = this._compiler.$esbuildService;
    if (!service) {
        return done(new Error('[esbuild-loader] You need to add ESBuildPlugin to your webpack config first'));
    }
    const transformOptions = {
        ...options,
        target: (_a = options.target) !== null && _a !== void 0 ? _a : 'es2015',
        loader: (_b = options.loader) !== null && _b !== void 0 ? _b : 'js',
        sourcemap: this.sourceMap,
        sourcefile: this.resourcePath,
    };
    try {
        const result = await service.transform(source, transformOptions).catch(async (error) => {
            // Target might be a TS file accidentally parsed as TSX
            if (transformOptions.loader === 'tsx' && tsxTryTsLoaderPtrn.test(error.message)) {
                transformOptions.loader = 'ts';
                return service.transform(source, transformOptions).catch(_ => {
                    throw error;
                });
            }
            throw error;
        });
        done(null, result.code, result.map);
    }
    catch (error) {
        done(error);
    }
}
exports.default = ESBuildLoader;
