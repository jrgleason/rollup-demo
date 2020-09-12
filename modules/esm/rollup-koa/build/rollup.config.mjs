import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
export default {
    input: "./ui/index.mjs",
    output: [
        {
            file: "./target/ng-demo.esm.mjs",
            format: "esm",
            sourcemap: "inline"
        },
        {
            file: "./target/ng-demo.min.esm.mjs",
            format: "esm",
            sourcemap: false,
            plugins:[
                terser()
            ]
        }
    ],
    plugins: [
        nodeResolve()
    ]
}