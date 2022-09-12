import lwc from "@lwc/rollup-plugin";
import replace from "@rollup/plugin-replace";
import static_files from "rollup-plugin-static-files";

export default {
  input: "src/main.js",

  output: {
    file: "dist/main.js",
    format: "esm",
  },

  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    lwc(),
    static_files({
      include: ["./src"],
      exclude: ["./src/modules"],
    }),
  ],
};
