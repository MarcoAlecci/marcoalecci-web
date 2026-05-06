<script lang="ts">
  import type { PageData } from "./$types";
  import Icon from "@iconify/svelte";
  import SectionHeading from "$lib/components/sections/SectionHeading.svelte";

  export let data: PageData;
</script>

<section class="section">
  <div class="container">
    <SectionHeading title="Contact" />
    <div class="mt-8 space-y-6">
      <div class="card">
        <h2 class="text-2xl font-sans font-semibold">Contact</h2>
        <div class="mt-4 space-y-4 text-sm text-muted">
          <div>
            <span class="section-title">Email</span>
            <a class="mt-2 block" href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          </div>
        </div>
        <h3 class="mt-8 text-xl font-sans font-semibold">Profiles</h3>
        <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {#each data.contact.profiles as profile}
            <a class="social-card" href={profile.href} target="_blank" rel="noopener noreferrer">
              <Icon icon={profile.icon} width="22" height="22" />
              <span>{profile.label}</span>
            </a>
          {/each}
        </div>
      </div>
      <div class="card">
        <h2 class="text-2xl font-sans font-semibold">Office</h2>
        <p class="mt-3 text-muted">{data.contact.office.label}</p>
        <p class="mt-2 text-muted">{data.contact.office.address}</p>
        {#if data.contact.office.mapEmbedUrl}
          <iframe
            class="mt-5 h-80 w-full rounded-lg border border-line"
            src={data.contact.office.mapEmbedUrl}
            title="Office map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        {/if}
        {#if data.contact.office.mapUrl}
          <a class="icon-pill mt-4" href={data.contact.office.mapUrl} target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:map" />
            <span>Open in Maps</span>
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>
