"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const esbuild_1 = require("esbuild");
class ESBuildPlugin {
    apply(compiler) {
        let watching = false;
        const safeStartService = async () => {
            if (!compiler.$esbuildService) {
                compiler.$esbuildService = await esbuild_1.startService();
            }
        };
        compiler.hooks.thisCompilation.tap('esbuild', compilation => {
            compilation.hooks.childCompiler.tap('esbuild', childCompiler => {
                childCompiler.$esbuildService = compiler.$esbuildService;
            });
        });
        compiler.hooks.run.tapPromise('esbuild', async () => {
            await safeStartService();
        });
        compiler.hooks.watchRun.tapPromise('esbuild', async () => {
            watching = true;
            await safeStartService();
        });
        compiler.hooks.done.tap('esbuild', () => {
            if (!watching && compiler.$esbuildService) {
                compiler.$esbuildService.stop();
                compiler.$esbuildService = undefined;
            }
        });
    }
}
exports.default = ESBuildPlugin;
