import webpack = require('webpack');
import { Service, TransformOptions } from 'esbuild';
import { Except } from 'type-fest';
export declare type Compiler = webpack.Compiler & {
    $esbuildService?: Service;
};
export declare type LoaderOptions = Except<TransformOptions, 'sourcemap' | 'sourcefile'>;
export declare type MinifyPluginOptions = Except<TransformOptions, 'sourcefile'>;
