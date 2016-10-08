import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import vue from 'rollup-plugin-vue';
import nodeGlobals from 'rollup-plugin-node-globals';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const config = {
    entry: 'src/main.js',
    dest: 'dist/build.js',
    format: 'iife',
    sourceMap: true,
    useStrict: false,
    plugins: [
        vue(),
        buble({
            objectAssign: 'Object.assign'
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        nodeGlobals(),
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.sourceMap = false
    config.plugins.push(uglify({}, minify))
}

if (process.env.NODE_ENV === 'development') {
    config.plugins.push(livereload())
    config.plugins.push(serve({
        contentBase: './',
        port: 8081,
        open: true
    }))
}

export default config