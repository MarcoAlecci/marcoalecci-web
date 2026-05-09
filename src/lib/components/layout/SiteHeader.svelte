<script lang="ts">
  import Icon from "@iconify/svelte";
  import { site } from "$lib/config/site";
  import ToggleTheme from "$lib/components/ToggleTheme.svelte";

  let menuOpen = false;
</script>

<header class="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur">
  <div class="mx-auto w-full max-w-[94rem] px-4 py-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between gap-4">
      <a href="/" class="whitespace-nowrap font-sans text-xl font-semibold">{site.name}</a>

      <nav class="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex">
        {#each site.navigation as item}
          <a class="nav-link" href={item.href}>{item.label}</a>
        {/each}
      </nav>

      <div class="hidden shrink-0 lg:block">
        <ToggleTheme />
      </div>

      <button
        class="icon-pill shrink-0 lg:hidden"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        on:click={() => (menuOpen = !menuOpen)}
      >
        <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} />
        <span>Menu</span>
      </button>
    </div>

    {#if menuOpen}
      <nav class="mt-3 grid gap-2 rounded-lg border border-line bg-surface p-3 shadow-sm lg:hidden">
        {#each site.navigation as item}
          <a class="nav-link rounded-md px-2 py-2" href={item.href} on:click={() => (menuOpen = false)}>
            {item.label}
          </a>
        {/each}
        <div class="border-t border-line pt-3">
          <ToggleTheme />
        </div>
      </nav>
    {/if}
  </div>
</header>
