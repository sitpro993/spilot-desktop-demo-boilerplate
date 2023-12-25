const path = require("path");

const rootPath = path.join(__dirname, "../");

const dllPath = path.join(__dirname, "../dll");

const srcPath = path.join(rootPath, "src");
const srcMainPath = path.join(srcPath, "main");
const srcRendererPath = path.join(srcPath, "renderer");

const releasePath = path.join(rootPath, "release");
const appPath = path.join(releasePath, "app");
const appPackagePath = path.join(appPath, "package.json");
const appNodeModulesPath = path.join(appPath, "node_modules");
const srcNodeModulesPath = path.join(srcPath, "node_modules");

const distPath = path.join(appPath, "dist");
const distMainPath = path.join(distPath, "main");
const distRendererPath = path.join(distPath, "renderer");

const buildPath = path.join(releasePath, "build");

export default {
  // rootPath,
  /**
   * @description \dll
   */
  dllPath,
  /**
   * @description \src
   */
  srcPath,
  /**
   * @description \src\main
   */
  srcMainPath,
  /**
   * @description \src\renderer
   */
  srcRendererPath,
  // releasePath,
  // appPath,
  // appPackagePath,
  // appNodeModulesPath,
  // srcNodeModulesPath,
  /**
   * @description \release\app\dist
   */
  distPath,
  /**
   * @description \release\app\dist\main
   */
  distMainPath,
  /**
   * @description \release\app\dist\renderer
   */
  distRendererPath,
  /**
   * @description \release\build
   */
  buildPath,
};
