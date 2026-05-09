<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import PublicationListItem from "$lib/components/sections/PublicationListItem.svelte";
  import SocialLinks from "$lib/components/layout/SocialLinks.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let data: PageData;

  const me = data.profile;

  const linkBioParagraph = (paragraph: string) => {
    const links = Object.entries(me.bioLinks);
    const segments: Array<{ text: string; href?: string }> = [];
    let rest = paragraph;

    while (rest.length > 0) {
      const nextLink = links
        .map(([label, href]) => ({ label, href, index: rest.indexOf(label) }))
        .filter((link) => link.index >= 0)
        .sort((a, b) => a.index - b.index || b.label.length - a.label.length)[0];

      if (!nextLink) {
        segments.push({ text: rest });
        break;
      }

      if (nextLink.index > 0) {
        segments.push({ text: rest.slice(0, nextLink.index) });
      }

      segments.push({ text: nextLink.label, href: nextLink.href });
      rest = rest.slice(nextLink.index + nextLink.label.length);
    }

    return segments;
  };
</script>

<section class="section">
  <div class="container hero-grid">
    <aside class="hero-card">
      <div class="flex h-full flex-col items-center justify-center gap-5 text-center">
        <img class="aspect-square w-44 rounded-lg object-cover" src={me.avatar} alt="{me.name} {me.surname}" />
        <div>
          <h1>{me.name} {me.surname}</h1>
          <p class="mt-3 text-lg text-muted">
            {#each me.descriptionLines as line}
              <span class="block">{line}</span>
            {/each}
          </p>
        </div>
      </div>
    </aside>
    <div class="hero-card">
      <div class="flex h-full flex-col items-center justify-center gap-4">
        <div class="space-y-3 text-justify text-sm text-muted">
          {#each me.bio.split("\n\n") as paragraph}
            <p>
              {#each linkBioParagraph(paragraph) as segment}
                {#if segment.href}
                  <a class="text-link underline decoration-link/40 underline-offset-4 hover:text-link/80" href={segment.href} target="_blank" rel="noopener noreferrer">
                    {segment.text}
                  </a>
                {:else}
                  {segment.text}
                {/if}
              {/each}
            </p>
          {/each}
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          {#each me.tags as tag}
            <TagPill label={tag} variant="accent" />
          {/each}
        </div>
        <div class="mt-1 w-full">
          <SocialLinks showLabels={true} cardStyle={true} size={22} />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <SectionHeading title="Recent publications" />
    <ul class="mt-8 space-y-6">
      {#each data.recentPublications as item}
        <PublicationListItem publication={item.publication} authors={item.authors} />
      {/each}
    </ul>
    <div class="mt-6">
      <a class="icon-pill" href="/publications">
        <Icon icon="mdi:arrow-right" />
        <span>View all publications</span>
      </a>
    </div>
  </div>
</section>
