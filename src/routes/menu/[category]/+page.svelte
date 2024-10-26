<script lang="ts">
    import type { PageData } from './$types'
    import Menu from '$lib/components/Menu.svelte';
    export let data: PageData;
  </script>
  


<Menu category={data.category}/>

  