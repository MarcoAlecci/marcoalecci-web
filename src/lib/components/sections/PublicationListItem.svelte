<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { Publication } from "$lib/utils/utils";
  import LocationFlag from "$lib/components/LocationFlag.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let publication: Publication;
  export let authors: string;

  const primaryAuthor = "Marco Alecci";
  $: authorParts = authors.split(primaryAuthor);
  $: venueYear = new Date(publication.venue.date).getFullYear();
  $: venueAcronym = publication.venue.acronym || publication.venue.name;
  $: venueTag = `${venueAcronym} ${venueYear}`;
  $: isProceedings = publication.venue.type === "Conference" || publication.venue.type === "Workshop";
  $: venueLine = isProceedings
    ? `${publication.venue.fullName || publication.venue.name} [${venueAcronym}] - ${publication.venue.track || "Main Track"}`
    : `${publication.venue.fullName || publication.venue.name} [${venueAcronym}]`;
</script>

<li class="publication-card relative !pb-8">
  <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
    <div class="min-w-0 flex-1">
      <div class="mt-3 flex flex-wrap gap-2">
        {#if publication.venue.type}
          <TagPill label={publication.venue.type} variant="accent" />
        {/if}
        <TagPill label={venueTag} variant="accent" />
      </div>
      <h3 class="mt-3 text-2xl font-sans font-semibold">{publication.title}</h3>
      <p class="mt-2 text-sm italic text-muted">
        {venueLine}
      </p>
      <p class="mt-2 text-sm text-muted">
        {#each authorParts as part, index}
          {#if index > 0}<strong class="font-semibold text-ink">{primaryAuthor}</strong>{/if}{part}
        {/each}
      </p>
    </div>
    {#if publication.url}
      <a
        class="social-action self-start shrink-0 md:mt-3"
        href={publication.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:open-in-new" />
        <span>Read</span>
      </a>
    {/if}
  </div>
  <LocationFlag location={publication.venue.location} countryCode={publication.venue.countryCode} />
</li>
