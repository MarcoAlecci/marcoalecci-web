<script lang="ts">
  import type { PageData } from "./$types";
  import { formatPeriod } from "$lib/utils";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Teaching" />
    <div class="mt-8 space-y-10">
      {#each data.groups as group}
        <div>
          <h3 class="text-xl font-sans font-semibold">{group.year}</h3>
          <div class="mt-4 grid gap-4">
            {#each group.entries as item}
              <div class="card flex gap-5">
                {#if item.school.logo}
                  <img class="mt-1 h-14 w-20 shrink-0 object-contain" src={item.school.logo} alt={`${item.school.name} logo`} />
                {/if}
                <div>
                  <p class="text-xs uppercase tracking-[0.25em] text-muted">{formatPeriod(item.period)}</p>
                  <h3 class="mt-2 text-2xl font-sans font-semibold">{item.title}</h3>
                  <p class="mt-1 text-muted">
                    {#if item.course.url}
                      <a href={item.course.url} target="_blank" rel="noopener noreferrer">{item.course.name}</a>
                    {:else}
                      {item.course.name}
                    {/if}
                    <span> - {item.school.name}</span>
                  </p>
                  {#if item.teachingUnits}
                    <p class="mt-2 text-sm text-muted">Teaching units: {item.teachingUnits} TUs</p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
