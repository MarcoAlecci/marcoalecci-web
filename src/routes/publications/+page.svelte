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

  $: filteredPublications =
    selectedType === "All"
      ? data.publications
      : data.publications.filter((publication) => publication.venue.type === selectedType);
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
    <ul class="mt-10 space-y-5">
      {#each filteredPublications as item}
        <PublicationListItem
          publication={item}
          authors={authorLine(item)}
        />
      {/each}
    </ul>
  </div>
</section>
