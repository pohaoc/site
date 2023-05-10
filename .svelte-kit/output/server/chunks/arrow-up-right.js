import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Icon } from "./Icon.js";
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "7",
        "y1": "17",
        "x2": "17",
        "y2": "7"
      }
    ],
    ["polyline", { "points": "7 7 17 7 17 17" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Arrow_up_right as A
};
