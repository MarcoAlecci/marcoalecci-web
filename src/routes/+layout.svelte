<script lang="ts">
  import "../app.css";
  import Icon from "@iconify/svelte";
  import ToggleTheme from "../lib/components/ToggleTheme.svelte";
  import UniLuLogo from "$lib/components/UniLuLogo.svelte";
  import SntLogo from "$lib/components/SNTLogo.svelte";

  import * as mdMe from "../contents/me.md";

  const me = mdMe.metadata;
</script>

<svelte:head>
  <title>{me.name} {me.surname}</title>
</svelte:head>

<header class="z-50 border-b border-neutral-200 dark:border-neutral-900 py-3 px-5 fixed inset-x-0 top-0 bg-neutral-50 dark:bg-neutral-950">
  <nav class="flex flex-row justify-between mx-auto max-w-screen-xl">
    <a href="mailto:{me.email}">
      <span class="span-icon"><i class="text-xl"><Icon icon="pixelarticons:mail" /></i><span class="hidden sm:inline-block">{me.email}</span></span>
    </a>
    <div class="flex flex-row gap-3 items-center">
      <a href="/" title="Home">
        <i class="text-xl"><Icon icon="pixelarticons:home" /></i>
      </a>
      <a href="/about-me" title="About me">
        <i class="text-xl"><Icon icon="pixelarticons:info-box" /></i>
      </a>
      <a href="/academic-resume" title="Publications, services, and teachings">
        <i class="text-xl"><Icon icon="pixelarticons:script-text" /></i>
      </a>
    </div>
    <div class="flex flex-row gap-3">
      <a href={me.social.linkedin} target="_blank" rel="noopener noreferrer" title="Linkedin">
        <i class="text-xl"><Icon icon="mdi:linkedin" /></i>
      </a>
      <a class="hidden sm:inline-block" href={me.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
        <i class="text-xl"><Icon icon="mdi:github" /></i>
      </a>
      <a class="hidden sm:inline-block" href={me.social.orcid} target="_blank" rel="noopener noreferrer" title="ORCID">
        <i class="text-xl"><Icon icon="simple-icons:orcid" /></i>
      </a>
      <a class="hidden sm:inline-block" href={me.social.scholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">
        <i class="text-xl"><Icon icon="simple-icons:googlescholar" /></i>
      </a>
    </div>
  </nav>
</header>

<slot />

<footer>
  <div id="contacts" class="bg-neutral-200 dark:bg-neutral-900 py-6">
      <h2>Contact me</h2>
      
      <div class="flex flex-row gap-3 justify-center py-3">
        <a href="{me.social.linkedin}" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <i class="text-xl"><Icon icon="mdi:linkedin" /></i>
        </a>
        <a href="{me.social.github}" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i class="text-xl"><Icon icon="mdi:github" /></i>
        </a>
        <a href="{me.social.orcid}" target="_blank" rel="noopener noreferrer" title="ORCID">
          <i class="text-xl"><Icon icon="simple-icons:orcid" /></i>
        </a>
        <a href="{me.social.scholar}" target="_blank" rel="noopener noreferrer" title="Google Scholar">
          <i class="text-xl"><Icon icon="simple-icons:googlescholar" /></i>
        </a>
      </div>
      
      <a href="mailto:{me.email}" class="block mt-1">
        <span class="span-icon"><i class="text-xl"><Icon icon="pixelarticons:mail" /></i>{me.email}</span>
      </a>
  </div>
  
  <div class="py-5">
    <div class="flex justify-between container">
      <a href="https://w3id.org/people/lucamartinelli" target="_blank" rel="noopener noreferrer">
        <span class="span-icon">Made with <i class="text-xl"><Icon icon="fluent-emoji:red-heart" /></i> by <strong>Luca Martinelli</strong></span>
      </a>
      <ToggleTheme />
    </div>
  </div>
</footer>
