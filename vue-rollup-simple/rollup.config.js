import string from 'rollup-plugin-string';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [
        string({
            include: '**/*.html',
        }),
        json(),
        babel({compact: false}),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({ include: 'node_modules/**' }),
    ],
    dest: 'dist/build.js'
};