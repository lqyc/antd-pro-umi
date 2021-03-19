import { Compiler, MinifyPluginOptions } from './interfaces';
import webpack = require('webpack');
declare class ESBuildMinifyPlugin {
    private readonly options;
    constructor(options?: MinifyPluginOptions);
    apply(compiler: Compiler): void;
    transformAssets(compilation: webpack.compilation.Compilation, assetNames: string[]): Promise<void>;
}
export default ESBuildMinifyPlugin;
