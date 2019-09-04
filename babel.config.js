/**
 * 项目范围的 babel config 会被 ./babelrc 中的 配置给 override
 */
module.exports = {
  // babelrc: false, // 屏蔽 ./.babelrc
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: 10
        },
        corejs: 3,
        useBuiltIns: "entry"
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-runtime"]
};
