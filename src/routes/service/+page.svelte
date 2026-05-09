<script lang="ts">
  import type { PageData } from "./$types";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Service" />
    <div class="mt-8 grid gap-4">
      {#each data.services as item}
        <div class="card">
          <h3 class="text-2xl font-sans font-semibold">{item.title}</h3>
          <div class="mt-4 space-y-4">
            {#if item.groupByYear === false}
              <ul class="space-y-2 text-sm text-muted">
                {#each item.instances as instance}
                  <li>
                    <a class="underline" href={instance.conference.url} target="_blank" rel="noopener noreferrer">
                      {instance.conference.name}
                    </a>
                    {#if instance.years?.length}
                      <div class="mt-2 flex flex-wrap gap-2">
                        {#each instance.years as year}
                          <TagPill label={year.toString()} variant="accent" />
                        {/each}
                      </div>
                    {/if}
                  </li>
                {/each}
              </ul>
            {:else}
              {#each item.groups as group}
                <div>
                  <p class="text-xs uppercase tracking-[0.25em] text-muted">{group.year}</p>
                  <ul class="mt-2 space-y-2 text-sm text-muted">
                    {#each group.entries as instance}
                      <li>
                        <a class="underline" href={instance.conference.url} target="_blank" rel="noopener noreferrer">
                          {instance.conference.name}
                        </a>
                        <span> - {instance.name}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/each}
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
