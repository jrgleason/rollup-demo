export default {
    input: "./index.mjs",
    output: [
        {
            file: "./target/ng-demo.esm.mjs",
            format: "esm"
        },
        {
            file: "./target/ng-demo.umd.mjs",
            format: "umd",
            name:"jg-simple"
        },
        {
            file: "./target/ng-demo.js",
            format: "cjs"
        }
    ]
}