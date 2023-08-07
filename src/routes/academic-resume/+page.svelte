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
    <h1>Academic Resume</h1>
  </main>

  {#if data.publications.length > 0}
    <main class="container items-start mt-14">
      <h2>Publications</h2>

      <article class="mt-5 w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each data.publications as { publication, content }}
          <a href={publication.url} target="_blank" rel="noopener noreferrer">
            <Card
              suptitle="{publication.conference.name} - {formatDate(publication.conference.date)}"
              title={publication.title}
              subtitle="{me.name} {me.surname}{publication.coAuthors ? ', ' : ''}{publication.coAuthors?.map((a) => `${a.name} ${a.surname}`).join(', ')}"
            >
              <p slot="body">{publication.abstract.substring(0, 200)}{publication.abstract.length > 200 ? "..." : ""}</p>
            </Card>
          </a>
        {/each}
      </article>
    </main>
  {/if}

  {#if data.services.length > 0}
    <main class="container items-start mt-14">
      <h2>Service</h2>

      <article class="mt-5 w-full flex flex-col gap-2">
        {#each data.services as { service, content }}
          <Card title={service.title}>
            <svelte:fragment slot="body">
              <ul>
                {#each service.instances as instance}
                  <li><a class="underline" href={instance.conference.url} target="_blank" rel="noopener noreferrer">{instance.conference.name}</a> ({instance.name})</li>
                {/each}
              </ul>
            </svelte:fragment>
          </Card>
        {/each}
      </article>
    </main>
  {/if}

  {#if data.teachings.length > 0}
    <main class="container items-start mt-14">
      <h2>Teaching</h2>

      <article class="mt-5 w-full flex flex-col gap-2">
        {#each data.teachings as { teaching, content }}
          <Card suptitle={formatPeriod(teaching.period)} title={teaching.title}>
            <svelte:fragment slot="body">
              <a href={teaching.course.url}>{teaching.course.name}</a>, {teaching.school.name}
            </svelte:fragment>
            <div slot="hiddenBody" class="prose max-w-none dark:prose-invert">
              <svelte:component this={content} />
            </div>
          </Card>
        {/each}
      </article>
    </main>
  {/if}
</section>
