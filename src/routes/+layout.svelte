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
    --color-link: ${theme.colors.link};
    --color-line: ${theme.colors.line};
    --color-highlight: ${theme.colors.highlight};
  }

  :root.dark {
    --color-bg: 18 28 36;
    --color-surface: 25 38 49;
    --color-ink: 245 247 248;
    --color-muted: 245 247 248;
    --color-accent: 90 190 154;
    --color-accent-soft: 32 72 60;
    --color-link: 90 190 154;
    --color-line: 44 59 70;
    --color-highlight: 23 34 44;
  }`;
</script>

<svelte:head>
  <style>{cssVars}</style>
</svelte:head>

<SiteHeader />
<main class="flex-1">
  <slot />
</main>
<SiteFooter />
