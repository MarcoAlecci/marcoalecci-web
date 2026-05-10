<script lang="ts">
  import { site } from "$lib/config/site";
  import SocialLinks from "$lib/components/layout/SocialLinks.svelte";
</script>

<footer class="border-t border-line/70 bg-surface">
  <div class="container py-8">
    <div class="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
      <div class="min-w-0">
        <a class="section-title" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
      <SocialLinks showLabels={true} size={18} />
    </div>
  </div>
</footer>
