import { App } from "vue";
import SvgIconVue from "./SvgIcon.vue";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext);
const req = require.context("@/svg", false, /\.svg$/);
requireAll(req);
console.log("test");
export default function (app: App): void {
  app.component("svg-icon", SvgIconVue);
}
