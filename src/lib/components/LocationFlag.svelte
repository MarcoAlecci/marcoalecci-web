<script lang="ts">
  export let location: string | undefined;
  export let countryCode: string | undefined;

  $: flagSrc = countryCode ? `/flags/${countryCode.toLowerCase()}.svg` : "";
</script>

{#if location}
  <div class="absolute bottom-4 right-5 text-sm font-medium text-muted">
    {location}
    {#if flagSrc}
      <img class="inline-block h-4 w-6 rounded-[2px] align-[-2px]" src={flagSrc} alt={`${location} flag`} />
    {/if}
  </div>
{/if}
