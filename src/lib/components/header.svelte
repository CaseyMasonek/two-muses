<script lang="ts">
    import {goto} from '$app/navigation'
</script>

<div class="h-15 w-full border-b-2 items-center flex p-3">
    <h1 class="text-2xl hover:scale-101" onclick={() => goto('/')}>Two Muses</h1>

    <div class="prose absolute right-5 prose-a:text-blue-600">
        <a href="/collections" class="float-right">
            Collections
        </a>
    </div>
</div>