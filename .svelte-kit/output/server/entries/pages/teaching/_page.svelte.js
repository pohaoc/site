import { c as create_ssr_component, e as each, d as add_attribute, f as escape, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { A as Arrow_up_right } from "../../../chunks/arrow-up-right.js";
import "../../../chunks/utils.js";
const WritingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="grid gap-y-4">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors" target="_blank" rel="noreferrer"><div class="flex flex-col sm:flex-row sm:items-end mb-1.5"><div class="text-lg text-black">${escape(item.title)}
          ${validate_component(Arrow_up_right, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">${escape(item.period)}
        </div></div>
       <strong>${escape(item.conf)}</strong>
      <div class="leading-snug font-serif">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = { teaching: [
  {
    title: "CS200: Applied Algorithmic Problem Solving",
    conf: "Lecturer",
    summary: "In this course, we introduce tricks and algorithmic techniques that students are not typically exposed to in a conventional program. Students will learn to approach problems similar to those seen in programming competition or difficult interview questions and learn to implement their solutions in working code, putting the learned theories to practice in real applications.",
    link: null,
    period: "F2021-S2023"
  },
  {
    title: "CS551: Streaming and Event-driven Systems",
    conf: "Grader",
    summary: "",
    link: "https://www.bu.edu/academics/cas/courses/cas-cs-551/",
    period: "F2023"
  }
] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Po Hao Chen – Publications",
      description: ""
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Teaching</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.teaching }, {}, {})}</section>`;
});
export {
  Page as default
};
