<script lang="ts">
  import Icon from "@iconify/svelte";
  import { site } from "$lib/config/site";

  export let size = 18;
  export let showLabels = false;
  export let cardStyle = false;

  const linkClass = cardStyle ? "social-card" : "icon-link";
</script>

<div class={cardStyle ? "grid grid-cols-2 gap-3 sm:grid-cols-4" : "flex flex-wrap items-center gap-3"}>
  <a class={linkClass} href={site.social.scholar} target="_blank" rel="noopener noreferrer">
    <Icon icon="simple-icons:googlescholar" width={size} height={size} />
    {#if showLabels}
      <span>Scholar</span>
    {/if}
  </a>
  <a class={linkClass} href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
    <Icon icon="mdi:linkedin" width={size} height={size} />
    {#if showLabels}
      <span>LinkedIn</span>
    {/if}
  </a>
  <a class={linkClass} href={site.social.github} target="_blank" rel="noopener noreferrer">
    <Icon icon="mdi:github" width={size} height={size} />
    {#if showLabels}
      <span>GitHub</span>
    {/if}
  </a>
  <a class={linkClass} href={site.social.orcid} target="_blank" rel="noopener noreferrer">
    <Icon icon="simple-icons:orcid" width={size} height={size} />
    {#if showLabels}
      <span>ORCID</span>
    {/if}
  </a>
</div>
