<script lang="ts">
  import type { PageData } from "./$types";
  import { formatPeriod } from "$lib/utils";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Education" />
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
                  <p class="mt-1 text-muted">{item.course.name} - {item.school.name}</p>
                  {#if item.thesis}
                    <p class="mt-3 text-sm text-muted">Thesis: {item.thesis}</p>
                  {/if}
                  {#if item.supervisors?.length}
                    <p class="mt-2 text-sm text-muted">
                      Supervisor: {item.supervisors.map((s) => `Prof. ${s.name} ${s.surname}`).join(", ")}
                    </p>
                  {/if}
                  {#if item.coSupervisors?.length}
                    <p class="mt-1 text-sm text-muted">
                      Co-supervisor: {item.coSupervisors.map((s) => `Prof. ${s.name} ${s.surname}`).join(", ")}
                    </p>
                  {/if}
                  {#if item.grade}
                    <p class="mt-1 text-sm text-muted">Grade: {item.grade}/110{item.laude ? " with honors" : ""}</p>
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
