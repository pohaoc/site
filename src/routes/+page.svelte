<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";



  const featuredProjects = [
    {
      name: "DaMoN '24",
      href: "https://www.damon-db.org",
      desc: "In Situ Neighborhood Sampling For Large-Scale GNN Training (to appear)",
    },
    {
      name: "EDBT '24",
      href: "https://openproceedings.org/2024/conf/edbt/paper-156.pdf",
      desc: "Crayfish: Navigating the Labyrinth of Machine Learning Inference in Stream Processing Systems",
    },
    {
      name: "ICS '23",
      href: "https://dl.acm.org/doi/10.1145/3577193.3593739",
      desc: "FLASH: FPGA-accelerated Smart Switches with GCN Case Study",
    },
  ];

  const services = [
    {
      name: "EuroSys '24",
      desc: "Artifact Evaluation Commitee",
    },
    {
      name: "HPEC '22 & '23",
      desc: "Session Chair",
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
    Recent work involves resource efficiency in cloud, such as software-defined memory.
    </p>


    <p>
    I am a Ph.D. student at Brown University, advised by <a class="link" href="https://cs.brown.edu/people/malte/">Malte Schwarzkopf</a>.
    </p>


  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Recent Publications:</p>

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



  <div class="space-y-5">
    <p>
    I also worked on software & hardware co-design for MLSys training/serving, from FPGA-accelerated storage, network-switches, to stream query processing. 
    </p>

    <p>
     I am a hobbyist of theory and mathematics. I created and taught a course on algorithmic problem solving during 2021-2023 at Boston University (as an extension of the ACM ICPC team and SIAM chapter I founded).
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
