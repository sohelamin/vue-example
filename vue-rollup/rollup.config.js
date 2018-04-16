import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const config = {
  entry: 'src/main.js',
  dest: 'dist/build.js',
  format: 'iife',
  sourceMap: true,
  useStrict: true,
  plugins: [
    vue({ compileTemplate: true, css: 'dist/build.css' }),
    buble({ exclude: 'node_modules/**' }),
    nodeResolve({ browser: true, jsnext: true }),
    commonjs()
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.sourceMap = false;
  config.plugins.push(uglify());
}

if (process.env.NODE_ENV === 'development') {
  config.plugins.push(livereload());
  config.plugins.push(serve({
    contentBase: './',
    port: 8080,
    open: true
  }));
}

export default config;
