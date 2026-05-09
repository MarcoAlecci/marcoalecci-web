<script lang="ts">
  import type { PageData } from "./$types";
  import LocationFlag from "$lib/components/LocationFlag.svelte";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let data: PageData;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const formatMonthPeriod = (period: { start: string | Date; end?: string | Date }) => {
    const start = new Date(period.start);
    const end = period.end ? new Date(period.end) : null;

    if (!end) {
      return `${months[start.getMonth()]} ${start.getFullYear()} - now`;
    }

    return `${months[start.getMonth()]} ${start.getFullYear()} - ${months[end.getMonth()]} ${end.getFullYear()}`;
  };
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
              <div class="card relative flex gap-5 !pb-8">
                {#if item.school.logo}
                  <img class="mt-1 h-14 w-20 shrink-0 object-contain" src={item.school.logo} alt={`${item.school.name} logo`} />
                {/if}
                <div>
                  <p class="text-xs uppercase tracking-[0.25em] text-muted">{formatMonthPeriod(item.period)}</p>
                  <h3 class="mt-2 text-2xl font-sans font-semibold">{item.title}</h3>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <TagPill label={item.school.name} variant="accent" />
                  </div>
                  <div class="mt-1 grid gap-1 text-muted">
                    {#each item.courses ?? [item.course] as course}
                      <p>
                        {#if course.url}
                          <a href={course.url} target="_blank" rel="noopener noreferrer">{course.name}</a>
                        {:else}
                          {course.name}
                        {/if}
                      </p>
                    {/each}
                  </div>
                  {#if item.teachingUnits}
                    <p class="mt-2 text-sm text-muted">Teaching units: {item.teachingUnits} TUs</p>
                  {/if}
                </div>
                <LocationFlag location={item.school.location} countryCode={item.school.countryCode} />
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
