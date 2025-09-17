<script lang="ts">
    let {data} = $props()
    const {collection, submissions} = data

    console.log(submissions)
</script>

<div class="prose">
    <h1 class="text-3xl">{collection.prompt}</h1>
    <p>{collection.description}</p>

    <h3 class="text-xl text-bold mt-3">Submissions:</h3>
    <ul>
        {#each submissions as submission}
            <li>
                <a href={`/submissions/${submission.id}`}>
                    {submission.title}
                </a>
            </li>
        {/each}
    </ul>
</div>