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
        </div>
       <strong>${escape(item.conf)}</strong>
      <div class="leading-snug font-serif">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = {
  papers: [
    {
      title: "FLASH: FPGA-Accelerated Smart Switches with GCN Case Study",
      conf: "ICS 2023",
      summary: "Pouya Haghi, William Krska, Cheng Tan, Tong Geng, Po Hao Chen, Connor Greenwood, Anqi Guo, Thomas Hines, Chunshu Wu, Ang Li, Anthony Skjellum, Martin Herbordt",
      link: "https://nschiele.github.io/ICS2023/program.html"
    },
    {
      title: "The Viability of Using Online Prediction to Perform Extra Work while Executing BSP Applications",
      conf: "HPEC 2022",
      summary: "Po Hao Chen, Pouya Haghi, Jae Yoon Chung, Tong Geng, Richard West, Anthony Skjellum, Martin C. Herbordt",
      link: "https://ieeexplore.ieee.org/document/9926405"
    }
  ],
  posters: [{
    title: "Big Memory Servers and Modern Approaches to Disk-Based Computation",
    conf: "HPEC 2021",
    summary: "Po Hao Chen, Kurt Keville",
    link: "https://math.mit.edu/crib/2021/jun4.html"
  }]
};
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

<section class="layout-md py-12"><h2 class="heading2">Conference Publications</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.papers }, {}, {})}</section>

<section class="layout-md py-12"><h2 class="heading2">Posters / Presentations</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.posters }, {}, {})}</section>`;
});
export {
  Page as default
};
