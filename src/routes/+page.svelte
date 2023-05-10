<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";



  const featuredProjects = [
    {
      name: "ICS 2023",
      href: "https://nschiele.github.io/ICS2023/program.html",
      desc: "FLASH: FPGA-accelerated Smart Switches with GCN Case Study",
    },
    {
      name: "HPEC 2023",
      href: "https://ieeexplore.ieee.org/document/9926405",
      desc: "The Viability of Using Online Prediction to Perform Extra Work while Executing BSP Applications",
    },
  ];

  const services = [
    {
      name: "HPEC 2023",
      desc: "Session Chair",
    },
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
    },
  ];
</script>

<Seo
  title="Po Hao (Howie) Chen"
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
</p>


<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
    I am interested in the co-design of application and systems - accelerating performance via specializations in algorithms, software, and hardware.
    </p>

    <p>
    Recent works involves building MLSys (graph analytics) enabled by smart switches / smart SSD, datacenter scheduling, and streaming systems.</p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Selected Publications:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Service:</p>

    {#each services as service}
      <a class="project-pair" >
        <div class="text-black font-medium">
          {service.name}
        </div>
        <div>
          <p>{service.desc}</p>
          {#if service.aside}
            <aside>{service.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>


  <div class="space-y-5">
    <p>
     I am also interested in theory and mathematics. I graduated with BA/MS in computer science at Boston University, where I created and taught a course on algorithmic problem solving during Fall 2021 - Spring 2023 (as an extension of the ACM ICPC team I founded).
    </p>

    <p>
      I had lots of fun building HPC systems for cluster competitions during my undergrad, and leading the Massachusetts Green Team (BU, NEU, MIT). media coverage:
    (<a
        class="link"
        href="https://www.performance-intensive-computing.com/objectives/amd-and-supermicro-sponsor-two-fastest-linpack-scores-at-sc22-s-student-cluster-competition">1</a
      >,
      <a
        class="link"
        href="https://www.bu.edu/eng/2023/02/06/intercollegiate-student-supercomputing-team-sets-benchmark-record/"
        >2</a
      >,
      <a class="link" href="https://www.mghpcc.org/2022-sc-student-cluster-competition/">3</a>,
      <a class="link" href="https://sc22.mghpcc.org/project/sc22-student-cluster-competition/">4</a>,
      <a
        class="link"
        href="https://www.bu.edu/eng/2022/01/03/greater-than-the-sum/"
        >5</a
      >)
    </p>

    <p>

    </p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
