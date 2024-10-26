<script lang="ts">
    import MenuItem from './MenuItem.svelte';
  
    export let category:string;

    const hotDrinks = [ 
      { name: 'Espresso', price: 100, categori: "hot", image: "/img/1000_F_950607807_IRYboiqsjZwJX15qyXkXO3f3ULqG1gnM.jpg" },
      { name: 'Americano', price: 120, categori: "hot", image:"/img/1000_F_950607807_IRYboiqsjZwJX15qyXkXO3f3ULqG1gnM.jpg" },
      { name: 'Капучино', price: 150, categori: "hot", image:"/img/1000_F_882677329_JFH9WJWvWM80KNDlxQR3MrMaSZJ6i6H2.jpg" },
      { name: 'Latte', price: 150, categori: "hot", image:"/img/1000_F_958522500_wdwH4AUyYLV5tAsb67NwBuo59tVHRokQ (1).jpg" },
      { name: 'Macaroon', price: 90, categori: "desserts", image:"/img/1000_F_105090482_FNDglxm8ch9qN40PYqFFaeopW5aULgMQ.jpg" },
      { name: 'Cheesecake', price: 180, categori: "desserts", image:"/img/1000_F_145708901_jO47pCUoyO4gO9dVHIXeQyc1oydysY2S.jpg" },
      { name: 'Chocolate cake', price: 200, categori: "desserts", image:"/img/1000_F_245456223_CrK1J9ePGfc1UW2QncGmFfycpI3vFnxI.jpg" },
      { name: 'Ice Latte', price: 150, categori: "cold", image:"" },
      { name: 'Lemonade', price: 130, categori: "cold", image:"" },
      // Добавьте остальные
    ];
  
    
  </script>
  
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">


      {#each hotDrinks as item}
        {#if item.categori == category}
          <MenuItem {item} />
        {/if}
      {/each}
    
      
      
    </div>
  </div>
</section>
  