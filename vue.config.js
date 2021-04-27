const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@consts": path.resolve(__dirname, "src/libs/consts"),
        "@filters": path.resolve(__dirname, "src/libs/filters"),
        "@libs": path.resolve(__dirname, "src/libs"),
        "@mixins": path.resolve(__dirname, "src/libs/mixins"),
        "@state": path.resolve(__dirname, "src/libs/state"),
        "@services": path.resolve(__dirname, "src/libs/services"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
