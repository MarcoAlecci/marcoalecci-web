<script lang="ts">
  import type { PageData } from "./$types";
  import { formatPeriod } from "$lib/utils";
  import LocationFlag from "$lib/components/LocationFlag.svelte";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Experience" />
    <div class="mt-8 grid gap-4">
      {#each data.experiences as item}
        <div class="card relative flex gap-5 !pb-8">
          {#if item.companyLogo}
            <img class="university-logo mt-1 h-14 w-20 shrink-0 object-contain" src={item.companyLogo} alt={`${item.company || item.title} logo`} />
          {/if}
          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-muted">{formatPeriod(item.period)}</p>
            <h3 class="mt-2 text-2xl font-sans font-semibold">{item.title}</h3>
            <p class="mt-1 text-muted">{item.jobTitle}{item.company ? ` - ${item.company}` : ""}</p>
            {#if item.summary}
              <p class="mt-4 text-sm text-muted">{item.summary}</p>
            {/if}
          </div>
          <LocationFlag location={item.location} countryCode={item.countryCode} />
        </div>
      {/each}
    </div>
  </div>
</section>
