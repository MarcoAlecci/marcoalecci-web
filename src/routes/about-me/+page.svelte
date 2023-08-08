<script lang="ts">
  import { formatDate, formatPeriod } from "$lib/utils";
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";
  import * as mdMe from "../../contents/me.md";

  const me = mdMe.metadata;

  export let data: PageData;
</script>

<section>
  <main class="container items-start">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <img class="aspect-square object-cover w-36 rounded-full" src={me.avatar} alt="{me.name} {me.surname}" srcset={me.avatar} />

      <div>
        <h1 class="items-start">About me</h1>

        <article class="mt-5">
          <svelte:component this={mdMe.default} />
        </article>
      </div>
    </div>
  </main>

  {#if data.experiences.length > 0}
    <main class="container items-start mt-14">
      <h2>Experiences</h2>

      <article class="mt-5 w-full flex flex-col gap-2">
        {#each data.experiences as { experience, content }}
          <Card suptitle={formatPeriod(experience.period)} title={experience.title} subtitle="{experience.jobTitle}{experience.company ? ' @ ' : ''}{experience.company}">
            <div slot="hiddenBody" class="prose max-w-none dark:prose-invert">
              <svelte:component this={content} />
            </div>
          </Card>
        {/each}
      </article>
    </main>
  {/if}

  {#if data.educations.length > 0}
    <main class="container items-start mt-14">
      <h2>Education</h2>

      <article class="mt-5 w-full flex flex-col gap-2">
        {#each data.educations as { education, content }}
          <Card suptitle={formatPeriod(education.period)} title={`${education.title} - ${education.course.name}`} subtitle={education.school.name}>
            <div slot="hiddenBody" class="prose max-w-none dark:prose-invert">
              <svelte:component this={content} />
              {#if education.grade}
                <p>
                  Grade: <strong>{education.grade}</strong>
                  {#if education.laude}
                    <strong>with Honors</strong>
                  {/if}
                  out of 110
                </p>
              {/if}
              {#if education.thesis}
                <p>Thesis: {education.thesis}</p>
              {/if} 
            </div>
          </Card>
        {/each}
      </article>
    </main>
  {/if}

  {#if data.awards.length > 0}
    <main class="container items-start mt-14">
      <h2>Awards</h2>

      <article class="mt-5 w-full flex flex-col gap-2">
        {#each data.awards as { award, content }}
          <Card suptitle={award.date ? formatDate(award.date) : null} title={award.title} subtitle={award.school?.name}>
            <div slot="hiddenBody" class="prose max-w-none dark:prose-invert">
              <svelte:component this={content} />
            </div>
          </Card>
        {/each}
      </article>
    </main>
  {/if}
</section>
