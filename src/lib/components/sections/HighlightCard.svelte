<script lang="ts">
  import Icon from "@iconify/svelte";

  export let label: string;
  export let value: string | number;
  export let href: string | null = null;
  export let icon: string | null = null;
</script>

{#if href}
  <a class="card hover:translate-y-[-2px] transition-transform" href={href}>
    <div class="flex items-center justify-between">
      <div>
        <div class="stat-number">{value}</div>
        <div class="stat-label mt-2">{label}</div>
      </div>
      {#if icon}
        <Icon icon={icon} class="text-2xl text-accent" />
      {/if}
    </div>
  </a>
{:else}
  <div class="card">
    <div class="flex items-center justify-between">
      <div>
        <div class="stat-number">{value}</div>
        <div class="stat-label mt-2">{label}</div>
      </div>
      {#if icon}
        <Icon icon={icon} class="text-2xl text-accent" />
      {/if}
    </div>
  </div>
{/if}
