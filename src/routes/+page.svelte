<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";
  import PublicationListItem from "$lib/components/sections/PublicationListItem.svelte";
  import SocialLinks from "$lib/components/layout/SocialLinks.svelte";
  import TagPill from "$lib/components/TagPill.svelte";

  export let data: PageData;

  const me = data.profile;
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
      <div class="flex h-full flex-col items-center justify-center gap-4 text-center">
        <div class="space-y-3 text-sm text-muted">
          {#each me.bio as paragraph}
            <p>{paragraph}</p>
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
