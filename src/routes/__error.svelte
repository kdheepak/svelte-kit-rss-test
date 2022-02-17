<script context="module">
  import { dev } from '$app/env';
  import { base } from '$app/paths'
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    }
  }
</script>

<script>
  export let status
  export let error
</script>

<p>{error.message}</p>

<pre>{error.stack}</pre>
