<script lang="ts">
  import type { PageData } from "./$types";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import PublicationListItem from "$lib/components/sections/PublicationListItem.svelte";
  import { profile } from "../../content/profile";

  export let data: PageData;

  const me = profile;
  const filters = ["All", "Conference", "Journal", "Workshop", "Preprint"];
  let selectedType = "All";

  const authorLine = (item: (typeof data.publications)[number]) => {
    const authors = item.authors ?? [
      { name: me.name, surname: me.surname },
      ...(item.coAuthors ?? [])
    ];

    return authors.map((author) => `${author.name} ${author.surname}`).join(", ");
  };

  const groupPublicationsByYear = (items: typeof data.publications) => {
    const groups = new Map<string, typeof data.publications>();

    items.forEach((item) => {
      const year = new Date(item.venue.date).getFullYear().toString();
      const bucket = groups.get(year) ?? [];
      bucket.push(item);
      groups.set(year, bucket);
    });

    return Array.from(groups.entries())
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .map(([year, entries]) => ({ year, entries }));
  };

  $: filteredPublications =
    selectedType === "All"
      ? data.publications
      : data.publications.filter((publication) => publication.venue.type === selectedType);
  $: publicationGroups = groupPublicationsByYear(filteredPublications);
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
      {#each publicationGroups as group}
        <section>
          <h3 class="text-xl font-sans font-semibold">{group.year}</h3>
          <ul class="mt-4 space-y-5">
            {#each group.entries as item}
              <PublicationListItem
                publication={item}
                authors={authorLine(item)}
              />
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </div>
</section>
