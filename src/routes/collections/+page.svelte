<script lang="ts">
    const {data} = $props()

    const collections = data.collections
</script>

<h1 class="text-2xl">Collections</h1>

<ul>
    {#each collections as collection}
        <li>
            <a href={`/collections/${collection.id}`}>
                {collection.prompt}
            </a>
        </li>
    {/each}
</ul>