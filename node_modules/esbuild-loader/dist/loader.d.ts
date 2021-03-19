import webpack = require('webpack');
declare function ESBuildLoader(this: webpack.loader.LoaderContext, source: string): Promise<void>;
export default ESBuildLoader;
