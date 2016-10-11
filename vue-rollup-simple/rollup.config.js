import string from 'rollup-plugin-string'
import json from 'rollup-plugin-json'
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'

export default {
    entry: 'src/main.js',
    format: 'iife',
    plugins: [
        string({
            include: '**/*.html',
        }),
        json(),
        css({ output: 'dist/style.css' }),
        buble({
            objectAssign: 'Object.assign'
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        nodeGlobals(),
    ],
    dest: 'dist/build.js'
}