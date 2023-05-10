import { c as create_ssr_component, v as validate_component, b as subscribe, f as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { I as Icon } from "../../chunks/Icon.js";
const Bug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "8",
        "height": "14",
        "x": "8",
        "y": "6",
        "rx": "4"
      }
    ],
    ["path", { "d": "m19 7-3 2" }],
    ["path", { "d": "m5 7 3 2" }],
    ["path", { "d": "m19 19-3-2" }],
    ["path", { "d": "m5 19 3-2" }],
    ["path", { "d": "M20 13h-4" }],
    ["path", { "d": "M4 13h4" }],
    ["path", { "d": "m10 4 1 2" }],
    ["path", { "d": "m14 4-1 2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bug" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="layout-md"><div class="pt-14 pb-40 sm:pt-20 sm:pb-80 text-xl flex justify-center items-center">${validate_component(Bug, "Bug").$$render($$result, { class: "mr-2" }, {}, {})}
    <span class="font-medium">${escape($page.status)}</span>
    <div class="mx-4 h-8 border-l border-black"></div>
    ${escape($page.error?.message)}</div></div>`;
});
export {
  Error as default
};
