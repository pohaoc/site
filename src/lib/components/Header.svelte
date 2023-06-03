<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "publications", href: "/writing" },
    { name: "teaching", href: "/teaching" },
  ];

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
    } else {
      pageTitle = null;
    }
  }
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<header
  class="layout-md flex justify-between items-start"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <h1 class="font-bold text-black text-2xl mb-6">
  <img src="assets/images/pfp.jpg" alt="pfp" width="200" height="200">
    <!-- {#if pageTitle}
      <span class="page-title">
        <span class="text-neutral-400">—</span>
        {pageTitle}
      </span>
    {/if} -->
  </h1>
  <div>

  <nav>
      <a href="/" class="text-black text-2x1 mb-6"> <strong> Po Hao (Howie) Chen </strong></a>
    {#each links as link (link)}
      <a
        href={link.href}
        class="hover:text-black transition-colors"
        class:text-black={$page.url.pathname === link.href}
      >
        {link.name}
      </a>
    {/each}
  </nav>
  <i class="fa fa-envelope"></i> : pch [at] brown [dot] edu
  </div>

</header>

<style lang="postcss">
  nav {
    @apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
  }

  .page-title {
    @apply font-light;
  }

  @media (max-width: 580px) {
    .page-title {
      @apply block text-xl;
    }

    .page-title :first-child {
      @apply hidden;
    }
  }

  @media (max-width: 420px) {
    nav {
      @apply flex-col items-end space-x-0;
    }
  }
</style>
