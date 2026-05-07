<script lang="ts">
  import type { PageData } from "./$types";
  import { formatDate } from "$lib/utils";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Awards" />
    <div class="mt-8 space-y-10">
      {#each data.groups as group}
        <div>
          <h3 class="text-xl font-sans font-semibold">{group.year}</h3>
          <div class="mt-4 grid gap-4">
            {#each group.entries as item}
              <div class="card">
                <p class="text-xs uppercase tracking-[0.25em] text-muted">
                  {item.date ? formatDate(item.date) : "Award"}
                </p>
                <h3 class="mt-2 text-2xl font-sans font-semibold">{item.title}</h3>
                {#if item.school?.name}
                  <p class="mt-1 text-muted">{item.school.name}</p>
                {/if}
                {#if item.details?.length}
                  <div class="mt-4 text-sm text-muted">
                    <ul class="space-y-2">
                      {#each item.details as detail}
                        <li>{detail}</li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
