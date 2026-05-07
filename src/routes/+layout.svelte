<script lang="ts">
  import "../app.css";
  import { theme } from "$lib/config/theme";
  import SiteHeader from "$lib/components/layout/SiteHeader.svelte";
  import SiteFooter from "$lib/components/layout/SiteFooter.svelte";

  const cssVars = `:root {
    --font-serif: ${theme.fonts.serif};
    --font-sans: ${theme.fonts.sans};
    --color-bg: ${theme.colors.bg};
    --color-surface: ${theme.colors.surface};
    --color-ink: ${theme.colors.ink};
    --color-muted: ${theme.colors.muted};
    --color-accent: ${theme.colors.accent};
    --color-accent-soft: ${theme.colors.accentSoft};
    --color-line: ${theme.colors.line};
    --color-highlight: ${theme.colors.highlight};
  }`;
</script>

<svelte:head>
  <style>{cssVars}</style>
</svelte:head>

<SiteHeader />
<main class="min-h-[calc(100vh-13rem)]">
  <slot />
</main>
<SiteFooter />
