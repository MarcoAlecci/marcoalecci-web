<script lang="ts">
  import Icon from "@iconify/svelte";

  export let suptitle: string | null = null;
  export let title: string;
  export let subtitle: string | null = null;
  export let image: string | null = null;

  let expanded = false;

  const handleMouseMove = (e: MouseEvent) => {
    if (!e.currentTarget) return;

    const target = e.currentTarget as HTMLElement;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  };
</script>

<div>
  {#if image}
    <img src="image" alt={title} class="w-full aspect-square object-cover object-center" />
  {/if}
  <div class="card {$$slots.hiddenBody ? 'expansible' : ''}" on:mousemove={handleMouseMove} role="listitem">
    {#if suptitle}
      <span class="opacity-80 text-sm">{suptitle}</span>
    {/if}
    <h4 class="{suptitle ? 'mt-3' : ''} font-bold text-xl">{title}</h4>
    {#if subtitle}
      <span class="italic">{subtitle}</span>
    {/if}

    {#if $$slots.body}
      <div class="mt-3 text-lg">
        <slot name="body" />
      </div>
    {/if}

    {#if $$slots.hiddenBody}
      {#if expanded}
        <div class="text-base mt-5 overflow-hidden transition-all duration-300">
          <slot name="hiddenBody" />
        </div>
      {/if}

      <div
        role="button"
        tabindex="0"
        on:keyup={() => {}}
        on:click={() => (expanded = !expanded)}
        class="flex justify-center border-t border-t-neutral-100 dark:border-t-neutral-900 mt-5 pt-2 cursor-pointer"
      >
        {#if expanded}
          <Icon icon="pixelarticons:chevron-up" />
        {:else}
          <Icon icon="pixelarticons:chevron-down" />
        {/if}
      </div>
    {/if}
  </div>
</div>
