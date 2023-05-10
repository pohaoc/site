import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "marked";
import "../../../chunks/utils.js";
const Markdown_svelte_svelte_type_style_lang = "";
const Project_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const projects = /* @__PURE__ */ Object.assign({});
  Object.keys(projects).sort((a, b) => projects[b].date - projects[a].date);
  Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Po Hao (Howie) Chen – Projects",
      description: ""
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
