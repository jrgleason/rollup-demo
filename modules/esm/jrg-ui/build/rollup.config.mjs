import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import html from "rollup-plugin-html";
import commonjs from '@rollup/plugin-commonjs';
// import SassShadow from '@jrg/rollup-sass-shadow';
import rollupString from 'rollup-plugin-string';
// import path from 'path';
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const shadow = new SassShadow(__dirname);
const stringPlugin = rollupString.string({
    include: '**/*.(css|svg)',
});

export default {
    input: "./index.mjs",
    output: [
        {
            file: "./target/jtg-ui.esm.mjs",
            format: "esm",
            sourcemap: "inline"
        },
        {
            file: "./target/jrg-ui.min.esm.mjs",
            format: "esm",
            sourcemap: false,
            plugins:[
                terser()
            ]
        }
    ],
    plugins: [
        html({
            include:"**/*.html"
        }),
        commonjs(),
        nodeResolve(),
        // shadow.plugin,
        stringPlugin
    ]
}