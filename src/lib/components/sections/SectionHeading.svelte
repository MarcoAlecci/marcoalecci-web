<script lang="ts">
  export let title: string;
  export let subtitle: string | null = null;
  export let icon: string | null = null;
</script>

<div data-icon={icon ?? undefined}>
  <h1 class="section-heading">{title}</h1>
  {#if subtitle}
    <p class="mt-2 max-w-3xl text-sm text-muted">{subtitle}</p>
  {/if}
</div>
