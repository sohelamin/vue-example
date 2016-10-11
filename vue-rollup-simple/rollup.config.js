import string from 'rollup-plugin-string'
import json from 'rollup-plugin-json'
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: 'src/main.js',
    format: 'iife',
    plugins: [
        string({
            include: '**/*.html',
        }),
        json(),
        css({ output: 'dist/style.css' }),
        buble(),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ],
    dest: 'dist/build.js'
}