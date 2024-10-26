<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css'

</script>

<div class="app-container">
    <Navbar/>
    <slot/>
    <Footer/>
</div>

<style>
    .app-container {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    }
  </style>