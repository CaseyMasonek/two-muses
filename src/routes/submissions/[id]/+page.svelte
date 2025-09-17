<script lang="ts">
    const {data} = $props()
    const {submission} = data
</script>

<h1 class="mb-0">{submission.title}</h1>
<em>By {submission.author}</em>

<p>
    {submission.content}
</p>