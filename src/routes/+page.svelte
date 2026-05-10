<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import PublicationListItem from "$lib/components/sections/PublicationListItem.svelte";
  import SocialLinks from "$lib/components/layout/SocialLinks.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let data: PageData;

  const me = data.profile;
  const contact = data.contact;

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

<section class="pt-10 pb-4 md:pt-12 md:pb-5">
  <div class="container grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-start">
    <div class="flex flex-col items-center text-center">
      <img class="aspect-square w-36 rounded-lg object-cover" src={me.avatar} alt="{me.name} {me.surname}" />
      <div class="mt-6 text-sm text-muted">
        <div>
          <p class="text-xs uppercase tracking-[0.25em] text-muted">Email:</p>
          <a class="mt-1 block break-all text-sm text-link underline decoration-link/40 underline-offset-4 hover:text-link/80" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center pt-1 text-center lg:items-start lg:text-left">
      <h1>{me.name} {me.surname}</h1>
      <p class="mt-4 text-xl text-muted">{me.headline}</p>
      <div class="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
        {#each me.tags as tag}
          <TagPill label={tag} variant="accent" />
        {/each}
      </div>
      <div class="mt-5 w-full max-w-[38rem] [&>div]:grid-cols-1 sm:[&>div]:grid-cols-2 lg:[&>div]:grid-cols-4 [&_.social-card]:min-h-[3.25rem] [&_.social-card]:w-full [&_.social-card]:flex-row [&_.social-card]:justify-center lg:[&_.social-card]:justify-start [&_.social-card]:gap-2 [&_.social-card]:px-3 [&_.social-card]:py-2 [&_.social-card]:text-sm">
        <SocialLinks showLabels={true} cardStyle={true} size={18} />
      </div>
    </div>
  </div>
</section>

<section class="py-0">
  <div class="container text-center lg:text-left">
    <SectionHeading title="About Me" />
    <div class="mt-5 hero-card">
      <div class="space-y-4 text-center text-sm text-muted md:text-justify">
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
    </div>
  </div>
</section>

<section class="pt-6 pb-10 md:pt-7 md:pb-12">
  <div class="container text-center lg:text-left">
    <SectionHeading title="Recent publications" />
    <ul class="mt-8 space-y-6 text-left">
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
