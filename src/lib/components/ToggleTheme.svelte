<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let checked = false;

  function setTheme(isDark: boolean) {
    checked = isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }

  onMount(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  });

  function onChange(event: Event) {
    setTheme((event.currentTarget as HTMLInputElement).checked);
  }
</script>

<div class="flex items-center gap-2 text-ink">
  <Icon icon="pixelarticons:sun-alt" />
  <label class="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" bind:checked on:change={onChange} class="sr-only peer" />
    <div
      class="w-9 h-5 rounded-full border border-line bg-highlight peer peer-checked:bg-accent peer-checked:after:translate-x-full peer-checked:after:border-surface after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-line after:bg-surface after:transition-all"
    />
  </label>
  <Icon icon="pixelarticons:moon" />
</div>
