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
  class="layout-md header"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <div class="header-top">
    <h1 class="header-photo">
      <img
        src="assets/images/pfp.jpg"
        alt="Po Hao (Howie) Chen"
        width="200"
        height="200"
      />
    </h1>

    <nav class="header-nav">
      <a href="/" class="header-name">
        <strong>Po Hao (Howie) Chen</strong>
      </a>
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
  </div>

  <div class="header-contact">
    <p class="header-email">
      <i class="fa fa-envelope" aria-hidden="true"></i>
      pch [at] brown [dot] edu
    </p>
    <a
      class="header-github link"
      href="https://github.com/pohaoc"
      rel="me external"
    >
      <i class="fa fa-github" aria-hidden="true"></i>
      GitHub
    </a>
  </div>
</header>

<style lang="postcss">
  .header {
    @apply mb-8 flex flex-col gap-4;
  }

  .header-top {
    @apply grid grid-cols-[auto_1fr] items-start gap-x-4 sm:flex sm:justify-between sm:gap-4;
  }

  .header-photo {
    @apply m-0;
  }

  .header-photo img {
    @apply h-28 w-28 object-cover sm:h-[200px] sm:w-[200px];
  }

  .header-nav {
    @apply flex min-w-0 flex-col items-start gap-1 text-lg text-neutral-500 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-end sm:gap-x-6 sm:gap-y-1 sm:text-right;
  }

  .header-name {
    @apply text-black;
  }

  .header-contact {
    @apply flex flex-wrap items-center gap-x-6 gap-y-1 text-base text-neutral-500;
  }

  .header-email {
    @apply m-0 flex items-center gap-2 leading-snug;
  }

  .header-github {
    @apply inline-flex items-center gap-2;
  }
</style>
