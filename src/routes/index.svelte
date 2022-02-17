<script context="module">
  import { base } from '$app/paths'
</script>

<script>
  export let humanDate
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="{base}/link">go to link</a>

<p>{humanDate}</p>
