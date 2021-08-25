import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		cleaner({
			targets: ['./lib'],
		}),
		peerDepsExternal(),
		resolve({
			extensions: ['.js', '.jsx'],
		}),
		commonjs(),
		babel({
			babelHelpers: 'runtime',
			exclude: ['**/*.stories.{js,jsx}', '**/*.test.{js,jsx}'],
		}),
	],
};
