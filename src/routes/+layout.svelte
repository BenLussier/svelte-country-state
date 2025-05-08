<script lang="ts">
	import '../app.css';
	import { settings, ThemeInit } from 'svelte-ux';

	settings({
    themes: {
      light: ['light'],
      dark: ['dark'],
    }
  });
	
	let { children } = $props();
</script>

<ThemeInit /> <!--  Set theme before anything renders (even when SSR is in use) -->

{@render children()}