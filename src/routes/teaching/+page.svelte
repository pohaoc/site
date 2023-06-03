<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Po Hao Chen – Publications"
  description=""
/>

<section class="layout-md py-12">
  <h2 class="heading2">Teaching</h2>
  <WritingList data={writing.teaching} />
</section>


