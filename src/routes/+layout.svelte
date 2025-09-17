<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<div class="prose min-w-full prose-h1:text-bold prose-a:text-blue-600 prose-a:no-underline prose-a:hover:underline p-5">
{@render children?.()}
</div>
