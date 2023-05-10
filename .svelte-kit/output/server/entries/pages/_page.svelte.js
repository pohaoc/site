import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, f as escape } from "../../chunks/index.js";
import { A as Arrow_up_right } from "../../chunks/arrow-up-right.js";
import { S as Seo } from "../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project-pair.svelte-ikj1jd{margin-left:-0.75rem;margin-right:-0.75rem;display:grid;row-gap:0.25rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.project-pair.svelte-ikj1jd:hover{--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))\n}@media(min-width: 640px){.project-pair.svelte-ikj1jd{grid-template-columns:1fr 2fr\n    }}aside.svelte-ikj1jd{margin-top:0.125rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))\n}@media(max-width: 420px){#eric-is.svelte-ikj1jd{margin-top:-2.5rem\n    }}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featuredProjects = [
    {
      name: "ICS 2023",
      href: "https://nschiele.github.io/ICS2023/program.html",
      desc: "FLASH: FPGA-accelerated Smart Switches with GCN Case Study"
    },
    {
      name: "HPEC 2023",
      href: "https://ieeexplore.ieee.org/document/9926405",
      desc: "The Viability of Using Online Prediction to Perform Extra Work while Executing BSP Applications"
    }
  ];
  const services = [
    { name: "HPEC 2023", desc: "Session Chair" },
    {
      name: "SIAM @ BU",
      desc: "Co-President",
      aside: "2022-2023"
    },
    {
      name: "HPC @ BU",
      desc: "Vice-President",
      aside: "2020-2023"
    },
    {
      name: "BU GRS",
      desc: "Naturual Science Graduate Curriculum Commitee",
      aside: "2022-2023"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Po Hao (Howie) Chen" }, {}, {})}

<p class="layout-md text-black text-xl leading-tight font-light mb-16 svelte-ikj1jd" id="eric-is"></p>


<div class="layout-md text-lg space-y-14"><div class="space-y-5"><p>I am interested in the co-design of application and systems - accelerating performance via specializations in algorithms, software, and hardware.
    </p>

    <p>Recent works involves building MLSys (graph analytics) enabled by smart switches / smart SSD, datacenter scheduling, and streaming systems.</p></div>

  <div class="leading-snug space-y-4"><p class="pb-2">Selected Publications:</p>

    ${each(featuredProjects, (project) => {
    return `<a class="project-pair svelte-ikj1jd"${add_attribute("href", project.href, 0)}><div class="text-black font-medium">${escape(project.name)}
          ${validate_component(Arrow_up_right, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div><p>${escape(project.desc)}</p>
          ${project.aside ? `<aside class="svelte-ikj1jd">${escape(project.aside)}</aside>` : ``}</div>
      </a>`;
  })}</div>

  <div class="leading-snug space-y-4"><p class="pb-2">Service:</p>

    ${each(services, (service) => {
    return `<a class="project-pair svelte-ikj1jd"><div class="text-black font-medium">${escape(service.name)}</div>
        <div><p>${escape(service.desc)}</p>
          ${service.aside ? `<aside class="svelte-ikj1jd">${escape(service.aside)}</aside>` : ``}</div>
      </a>`;
  })}</div>


  <div class="space-y-5"><p>I am also interested in theory and mathematics. I graduated with BA/MS in computer science at Boston University, where I created and taught a course on algorithmic problem solving during Fall 2021 - Spring 2023 (as an extension of the ACM ICPC team I founded).
    </p>

    <p>I had lots of fun building HPC systems for cluster competitions during my undergrad, and leading the Massachusetts Green Team (BU, NEU, MIT). media coverage:
    (<a class="link" href="https://www.performance-intensive-computing.com/objectives/amd-and-supermicro-sponsor-two-fastest-linpack-scores-at-sc22-s-student-cluster-competition">1</a>,
      <a class="link" href="https://www.bu.edu/eng/2023/02/06/intercollegiate-student-supercomputing-team-sets-benchmark-record/">2</a>,
      <a class="link" href="https://www.mghpcc.org/2022-sc-student-cluster-competition/">3</a>,
      <a class="link" href="https://sc22.mghpcc.org/project/sc22-student-cluster-competition/">4</a>,
      <a class="link" href="https://www.bu.edu/eng/2022/01/03/greater-than-the-sum/">5</a>)
    </p>

    <p></p></div>
</div>`;
});
export {
  Page as default
};
