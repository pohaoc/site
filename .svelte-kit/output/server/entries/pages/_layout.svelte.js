import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _400Italic = "";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{display:flex;align-items:flex-start;justify-content:flex-end\n}nav.svelte-bgdsr9>.svelte-bgdsr9:not([hidden])~.svelte-bgdsr9:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))\n}nav.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{padding-top:0.125rem;padding-bottom:0.125rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))\n}@media(max-width: 580px){}@media(max-width: 420px){nav.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{flex-direction:column;align-items:flex-end\n    }nav.svelte-bgdsr9>.svelte-bgdsr9:not([hidden])~.svelte-bgdsr9:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0px * var(--tw-space-x-reverse));margin-left:calc(0px * calc(1 - var(--tw-space-x-reverse)))\n    }}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    { name: "publications", href: "/writing" },
    { name: "projects", href: "/projects" },
    { name: "teaching", href: "/teaching" }
  ];
  $$result.css.add(css);
  {
    {
      links.find(({ href }) => href === $page.url.pathname);
    }
  }
  $$unsubscribe_page();
  return `<header class="layout-md flex justify-between items-start" data-sveltekit-noscroll data-sveltekit-preload-code="eager"><h1 class="font-bold text-black text-2xl mb-6"><img src="assets/images/pfp.jpg" alt="pfp" width="200" height="200">
    </h1>
  <div><nav class="svelte-bgdsr9"><a href="/" class="text-black text-2x1 mb-6 svelte-bgdsr9"><strong>Po Hao (Howie) Chen </strong></a>
    ${each(links, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="${[
      "hover:text-black transition-colors svelte-bgdsr9",
      $page.url.pathname === link.href ? "text-black" : ""
    ].join(" ").trim()}">${escape(link.name)}
      </a>`;
  })}</nav>
  email: pch [at] brown [edu]
  </div>

</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1xw0bo2_START -->${`<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1"><\/script>
    <script>window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");
    <\/script>`}<!-- HEAD_svelte-1xw0bo2_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${`<main>${slots.default ? slots.default({}) : ``}</main>`}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
