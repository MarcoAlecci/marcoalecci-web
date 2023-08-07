<script lang="ts">
    import Icon from "@iconify/svelte";
  
    import * as mdMe from "../contents/me.md";
  
    const me = mdMe.metadata;
  </script>
  
  <section class="first">
    <img class="aspect-square object-cover w-36 rounded-full" src={me.avatar} alt="{me.name} {me.surname}" srcset={me.avatar} />
    <span class="text-2xl span-icon">Hi, I'm {me.name} {me.surname}<i class="text-4xl"><Icon icon="fluent-emoji:waving-hand" /></i></span>
  
    <h1 class="mt-5 text-center">
      {#each me.description as line}
        <span>{line}</span>
      {/each}
    </h1>
  
    <div class="mt-5 flex flex-col w-full md:w-auto md:flex-row gap-2">
      <a href="/about-me" class="btn">
        <span class="span-icon"><i class="text-lg"><Icon icon="pixelarticons:info-box" /></i>About me</span>
      </a>
      <a href="/academic-resume" class="btn">
        <span class="span-icon"><i class="text-lg"><Icon icon="pixelarticons:script-text" /></i>Academic resume</span>
      </a>
      <a href="#contacts" class="btn">
        <span class="span-icon"><i class="text-lg"><Icon icon="pixelarticons:mail" /></i>Contact me</span>
      </a>
    </div>
  </section>
  
  <section id="contacts">
    <main class="container items-center">
      <h1>Contact me</h1>
  
      <div class="flex flex-row gap-3">
        <a href={me.social.linkedin} target="_blank" rel="noopener noreferrer" title="Linkedin">
          <i class="text-3xl"><Icon icon="mdi:linkedin" /></i>
        </a>
        <a href={me.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
          <i class="text-3xl"><Icon icon="mdi:github" /></i>
        </a>
        <a href={me.social.orcid} target="_blank" rel="noopener noreferrer" title="ORCID">
          <i class="text-3xl"><Icon icon="simple-icons:orcid" /></i>
        </a>
        <a href={me.social.scholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">
          <i class="text-3xl"><Icon icon="simple-icons:googlescholar" /></i>
        </a>
      </div>
      <a href="mailto:{me.email}">
        <span class="span-icon"><i class="text-3xl"><Icon icon="pixelarticons:mail" /></i>{me.email}</span>
      </a>
    </main>
  </section>