<script lang="ts">
  import { cartStore } from '../stores/cartStore';
  import { get } from 'svelte/store';

  const cartItems = get(cartStore); // Получаем состояние корзины
  const getTotal = () => {
    let total = 0;
    $cartStore.forEach(item => {
      total += item.price * item.quantity;
    }); 
    return total;
  };

  const confirmOrder = async () => {
      

          const orderData = {
          items: cartItems, // Массив товаров [{ name: 'Coffee', quantity: 2 }, ...]
          total: getTotal(), // Общая стоимость
          chatId: ''
      };
      try {
        const response = await fetch('/api/sendOrderToBot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            // Очищаем корзину и показываем сообщение об успехе
            cartStore.checkout();
            alert('Your order has been successfully completed');
        } else {
            alert('Failed to send order. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the order.');
    }
      
    };


</script>





<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    {#if $cartStore.length > 0}
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Placing an order</h1>
    </div>

    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Name</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Count</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Price</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Summ</th>
            <th class="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
          </tr>
        </thead>


        <tbody>

          {#each $cartStore as item (item.name)}
          <tr>
            <td class="px-4 py-3">{item.name}</td>
            <td class="px-4 py-3">{item.quantity}</td>
            <td class="px-4 py-3">{item.price}</td>
            <td class="px-4 py-3 text-lg text-white">{item.price * item.quantity}</td>
            <td class="w-10 text-center">
              <button on:click={() => cartStore.remove(item)} name="plan">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
            </td>
          </tr>
          {/each}

        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <label class="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">Total: ${getTotal()}</label>
      <button on:click={confirmOrder} class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Confirm order</button>
    </div>
    {:else}
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Your cart is empty</h1>
    </div>
    {/if}
  </div>
</section>


