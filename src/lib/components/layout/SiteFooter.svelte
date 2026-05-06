<script lang="ts">
  import { site } from "$lib/config/site";
  import SocialLinks from "$lib/components/layout/SocialLinks.svelte";
</script>

<footer class="border-t border-line/70 bg-highlight">
  <div class="container py-8">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <a class="section-title" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
      <SocialLinks showLabels={true} size={18} />
    </div>
  </div>
</footer>
