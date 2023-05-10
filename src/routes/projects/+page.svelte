<script lang="ts">
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { CalendarDays, Star } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
  }

  $: projectsByDate = Object.keys(projects).sort(
    (a, b) => projects[b].date - projects[a].date
  );
  $: projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  onMount(() => {
    // Hack: Fix the scroll position after the page loads, especially for mobile browsers.
    const selected = $page.url.hash.slice(1);
    if (selected) {
      setTimeout(() => {
        if ($page.url.hash.slice(1) === selected) {
          document.getElementById(selected)?.scrollIntoView();
        }
      }, 500);
    }
  });


</script>

<Seo
  title="Po Hao (Howie) Chen – Projects"
  description=""
/>


<style lang="postcss">
  button {
    @apply flex items-center text-neutral-400 transition-colors hover:text-black;
  }

  button.active {
    @apply text-black;
  }
</style>
