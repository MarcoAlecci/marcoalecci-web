<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { Publication } from "$lib/utils/utils";
  import { formatDate } from "$lib/utils";
  import TagPill from "$lib/components/TagPill.svelte";

  export let publication: Publication;
  export let authors: string;

  const primaryAuthor = "Marco Alecci";
  $: authorParts = authors.split(primaryAuthor);
</script>

<li class="card-soft">
  <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
    <div class="max-w-2xl">
      <p class="text-xs uppercase tracking-[0.25em] text-muted">
        {publication.venue.type ? `${publication.venue.type} - ` : ""}{formatDate(publication.venue.date)}
      </p>
      <h3 class="mt-2 text-2xl font-sans font-semibold">{publication.title}</h3>
      <div class="mt-3 flex flex-wrap gap-2">
        <TagPill
          label={`${publication.venue.name}${publication.venue.location ? ` - ${publication.venue.location}` : ""}`}
          variant="accent"
        />
      </div>
      <p class="mt-2 text-sm text-muted">
        {#each authorParts as part, index}
          {#if index > 0}<strong class="font-semibold text-ink">{primaryAuthor}</strong>{/if}{part}
        {/each}
      </p>
    </div>
    {#if publication.url}
      <a
        class="icon-pill"
        href={publication.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:open-in-new" />
        <span>Read</span>
      </a>
    {/if}
  </div>
</li>
