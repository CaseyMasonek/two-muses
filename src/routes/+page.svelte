<script lang="ts">
    import {Button} from '$lib/components/ui/button'
    import {goto} from '$app/navigation'
</script>

<div class="w-full absolute top-0 h-screen flex flex-col justify-center items-center">
    <h1 class="text-4xl">Two Muses Literary</h1>
    <div class="grid grid-cols-2 gap-x-3 mt-2">
        <Button onclick={() => goto('/collections')}>
            View collections
        </Button>
        <Button variant="outline">
            Submit work
        </Button>
    </div>
</div>