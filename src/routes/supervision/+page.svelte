<script lang="ts">
  import type { PageData } from "./$types";
  import { formatPeriod } from "$lib/utils";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Supervision" />
    <div class="mt-8 grid gap-10">
      <div>
        <h2 class="text-2xl font-sans font-semibold">Master students</h2>
        <div class="mt-4 grid gap-4">
          {#if data.masters.length === 0}
            <div class="card-soft text-sm text-muted">No master students listed yet.</div>
          {:else}
            {#each data.masterGroups as group}
              <div>
                <h3 class="text-xl font-sans font-semibold">{group.year}</h3>
                <div class="mt-4 grid gap-4">
                  {#each group.entries as item}
                    <div class="card flex gap-5">
                      {#if item.school?.logo}
                        <img class="mt-1 h-14 w-20 shrink-0 object-contain" src={item.school.logo} alt={`${item.school.name} logo`} />
                      {/if}
                      <div>
                        <p class="text-xs uppercase tracking-[0.25em] text-muted">
                          {item.period ? formatPeriod(item.period) : item.level}
                        </p>
                        <h3 class="mt-2 text-2xl font-sans font-semibold">{item.name} {item.surname}</h3>
                        <div class="mt-3 flex flex-wrap gap-2">
                          <TagPill label={item.role || "Supervision"} variant="accent" />
                          {#if item.school?.name}
                            <TagPill label={item.school.name} variant="accent" />
                          {/if}
                        </div>
                        {#if item.program}
                          <p class="mt-2 text-sm text-muted">Course: {item.program}</p>
                        {/if}
                        {#if item.topic}
                          <p class="mt-3 text-sm text-muted">Topic: {item.topic}</p>
                        {/if}
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-sans font-semibold">Ph.D. students</h2>
        <div class="mt-4 grid gap-4">
          {#if data.phd.length === 0}
            <div class="card-soft text-sm text-muted">No Ph.D. students listed yet.</div>
          {:else}
            {#each data.phdGroups as group}
              <div>
                <h3 class="text-xl font-sans font-semibold">{group.year}</h3>
                <div class="mt-4 grid gap-4">
                  {#each group.entries as item}
                    <div class="card flex gap-5">
                      {#if item.school?.logo}
                        <img class="mt-1 h-14 w-20 shrink-0 object-contain" src={item.school.logo} alt={`${item.school.name} logo`} />
                      {/if}
                      <div>
                        <p class="text-xs uppercase tracking-[0.25em] text-muted">
                          {item.period ? formatPeriod(item.period) : item.level}
                        </p>
                        <h3 class="mt-2 text-2xl font-sans font-semibold">{item.name} {item.surname}</h3>
                        <div class="mt-3 flex flex-wrap gap-2">
                          <TagPill label={item.role || "Supervision"} variant="accent" />
                          {#if item.school?.name}
                            <TagPill label={item.school.name} variant="accent" />
                          {/if}
                        </div>
                        {#if item.program}
                          <p class="mt-2 text-sm text-muted">Course: {item.program}</p>
                        {/if}
                        {#if item.supervisors?.length}
                          <p class="mt-3 text-sm text-muted">
                            Supervisors: {item.supervisors.map((s) => `${s.name} ${s.surname}${s.role ? ` (${s.role})` : ""}`).join(", ")}
                          </p>
                        {/if}
                        {#if item.summary}
                          <p class="mt-3 text-sm text-muted">{item.summary}</p>
                        {/if}
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
