import SvgIconVue from "./SvgIcon.vue";
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("@/svg", false, /\.svg$/);
requireAll(req);
console.log("test");
export default function (app) {
  app.component("svg-icon", SvgIconVue);
}
