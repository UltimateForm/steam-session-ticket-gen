import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';

// rollup.config.mjs
export default {
	input: "src/index.ts",
	output: {
		dir: "./out",
		format: "es"
	},
	external:["steamworks.js"],
	plugins: [typescript(), nodeResolve(), commonjs()]
};
