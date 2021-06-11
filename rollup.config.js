import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import run from "@rollup/plugin-run";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";

import path from "path";

const dev = process.env.ROLLUP_WATCH === "true";

function excludeDevTools() {
  const re = /ink/;
  return {
    name: `ignoreDevTools`,

    load(id) {
      if (id.match(re)) {
        if (path.parse(id).name === `devtools`) {
          return { code: `` };
        }
      }
    },
  };
}

export default {
  input: "index.js",
  output: {
    file: "lib/index.js",
    format: "cjs",
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || `development`
        ),
      },
    }),
    excludeDevTools(),
    json(),
    babel({
      babelHelpers: `bundled`,
      exclude: `node_modules/**`,
      presets: [`@babel/preset-env`, `@babel/preset-react`],
    }),
    resolve(),
    commonjs(),
    dev && run(),
  ],
  external: [`yoga-layout-prebuilt`],
};
