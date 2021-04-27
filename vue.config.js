const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@libs": path.resolve(__dirname, "src/libs"),
        "@state": path.resolve(__dirname, "src/libs/state"),
        "@mixins": path.resolve(__dirname, "src/libs/mixins"),
        "@services": path.resolve(__dirname, "src/libs/services"),
        "@consts": path.resolve(__dirname, "src/libs/consts"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
