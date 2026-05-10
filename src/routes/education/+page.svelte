<script lang="ts">
  import type { PageData } from "./$types";
  import { formatPeriod } from "$lib/utils";
  import LocationFlag from "$lib/components/LocationFlag.svelte";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Education" />
    <div class="mt-8 grid gap-4">
      {#each data.education as item}
        <div class="card relative flex gap-5 !pb-8">
          {#if item.school.logo}
            <img class="university-logo mt-1 h-14 w-20 shrink-0 object-contain" src={item.school.logo} alt={`${item.school.name} logo`} />
          {/if}
          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-muted">{formatPeriod(item.period)}</p>
            <h3 class="mt-2 text-2xl font-sans font-semibold">{item.title}</h3>
            <p class="mt-1 text-muted">{item.course.name} - {item.school.name}</p>
            <dl class="mt-3 grid grid-cols-[max-content_0.75rem_minmax(0,1fr)] gap-x-1 gap-y-1 text-sm text-muted">
              {#if item.thesis}
                <dt>Thesis</dt>
                <dd class="text-center">:</dd>
                <dd>{item.thesis}</dd>
              {/if}
              {#if item.supervisors?.length}
                <dt>Supervisor</dt>
                <dd class="text-center">:</dd>
                <dd>{item.supervisors.map((s) => `Prof. ${s.name} ${s.surname}`).join(", ")}</dd>
              {/if}
              {#if item.coSupervisors?.length}
                <dt>Co-supervisor</dt>
                <dd class="text-center">:</dd>
                <dd>{item.coSupervisors.map((s) => `Prof. ${s.name} ${s.surname}`).join(", ")}</dd>
              {/if}
              {#if item.grade}
                <dt>Grade</dt>
                <dd class="text-center">:</dd>
                <dd>{item.grade}/110{item.laude ? " with honors" : ""}</dd>
              {/if}
            </dl>
          </div>
          <LocationFlag location={item.school.location} countryCode={item.school.countryCode} />
        </div>
      {/each}
    </div>
  </div>
</section>
