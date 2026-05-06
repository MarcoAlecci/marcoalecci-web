<script lang="ts">
  import Icon from "@iconify/svelte";

  export let label: string;
  export let icon: string | null = null;
  export let variant: "outline" | "solid" | "accent" | "soft" = "outline";
</script>

<span class={`tag tag-${variant}`}>
  {#if icon}
    <Icon icon={icon} />
  {/if}
  <span>{label}</span>
</span>
