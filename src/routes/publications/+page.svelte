<script lang="ts">
  import type { PageData } from "./$types";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import PublicationListItem from "$lib/components/sections/PublicationListItem.svelte";
  import { profile } from "../../content/profile";

  export let data: PageData;

  const me = profile;
  const filters = ["All", "Conference", "Journal", "Workshop", "Preprint"];
  let selectedType = "All";

  $: filteredPublications =
    selectedType === "All"
      ? data.publications
      : data.publications.filter((publication) => publication.venue.type === selectedType);

  $: filteredGroups = Object.entries(
    filteredPublications.reduce<Record<string, typeof filteredPublications>>((groups, publication) => {
      const year = new Date(publication.venue.date).getFullYear().toString();
      groups[year] = groups[year] ?? [];
      groups[year].push(publication);
      return groups;
    }, {})
  )
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, entries]) => ({ year, entries }));
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Publications" />
    <div class="mt-6 flex flex-wrap gap-2" aria-label="Publication type filter">
      {#each filters as filter}
        <button
          class={`rounded-md border px-3 py-2 text-sm transition-colors ${
            selectedType === filter
              ? "border-accent bg-accent text-surface"
              : "border-line bg-surface text-muted hover:text-ink"
          }`}
          type="button"
          on:click={() => (selectedType = filter)}
        >
          {filter}
        </button>
      {/each}
    </div>
    <div class="mt-10 space-y-10">
      {#each filteredGroups as group}
        <div>
          <h3 class="text-xl font-sans font-semibold">{group.year}</h3>
          <ul class="mt-4 space-y-5">
            {#each group.entries as item}
              <PublicationListItem
                publication={item}
                authors={`${me.name} ${me.surname}${item.coAuthors ? ", " : ""}${item.coAuthors?.map((a) => `${a.name} ${a.surname}`).join(", ")}`}
              />
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
