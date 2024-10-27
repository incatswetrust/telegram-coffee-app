<script lang="ts">
    import MenuItem from './MenuItem.svelte';
  
    export let category:string;

    const hotDrinks = [ 
      { name: 'Espresso', price: 100, categori: "hot", image: "/img/Espresso.webp" },
      { name: 'Americano', price: 120, categori: "hot", image:"/img/Espresso.webp" },
      { name: 'Cappuccino', price: 150, categori: "hot", image:"/img/Espresso.webp" },
      { name: 'Latte', price: 150, categori: "hot", image:"/img/Espresso.webp" },
      { name: 'Macaroon blueberry', price: 90, categori: "desserts", image:"/img/MacaroonRose.webp" },
      { name: 'Macaroon pistachio', price: 90, categori: "desserts", image:"/img/MacaroonGreen.webp" },
      { name: 'Cheesecake', price: 180, categori: "desserts", image:"/img/Cheesecake.webp" },
      { name: 'Chocolate cake', price: 200, categori: "desserts", image:"/img/ChockoPie.webp" },
      { name: 'Croissant empty', price: 200, categori: "desserts", image:"/img/Kuasso.webp" },
      { name: 'Ice Latte', price: 150, categori: "cold", image:"/img/Espresso.webp" },
      { name: 'Lemonade', price: 130, categori: "cold", image:"/img/Lemonade.webp" },
      { name: 'Mojito', price: 130, categori: "cold", image:"/img/Mojito.webp" },
      { name: 'Sandwich with turkey', price: 130, categori: "snacks", image:"/img/Sandwich.webp" },
      { name: 'Super cheese sandwich', price: 130, categori: "snacks", image:"/img/SandwichCheese.webp" },
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
  