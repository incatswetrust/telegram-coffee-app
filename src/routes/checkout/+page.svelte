<script lang="ts">
    import Cart from '$lib/components/Cart.svelte';
import { cartStore } from '$lib/stores/cartStore';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
  
    let items = [];
    let total = 0;
    let bonusPoints = 0;
  
    onMount(() => {
      items = get(cartStore);
      total = get(cartStore).total;
      bonusPoints = Math.floor(total * 0.01); // 1% от итоговой суммы
    });
  
    const confirmOrder = () => {
      cartStore.checkout(); // функция checkout очищает корзину
      alert('Ваш заказ успешно оформлен!');
    };
  </script>
  

<Cart/>