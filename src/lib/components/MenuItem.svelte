<script lang="ts">
  import { cartStore } from '../stores/cartStore'; // Подключаем стор корзины
  export let item; // Получаем данные об элементе меню
  
  const addToCart = () => {
    cartStore.add(item); // Вызываем метод add для добавления товара в корзину
  };
</script>




<div class="lg:w-1/4 md:w-1/2 p-4 w-full">
  <a class="block relative h-48 rounded overflow-hidden">
    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.image}>
  </a>
  <div class="mt-4">
    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.categori}</h3>
    <h2 class="text-white title-font text-lg font-medium">{item.name}</h2>

    <div class="flex">
      <span class="mt-1">${item.price}</span>
      <button on:click={addToCart} class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Add</button>
      
    </div>
  </div>
</div>