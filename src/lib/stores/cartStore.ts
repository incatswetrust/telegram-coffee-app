import { writable } from 'svelte/store';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function createCartStore() {
  const items = writable<CartItem[]>([]);

  return {
    subscribe: items.subscribe, // Подписка на изменения в хранилище
    add: (item: CartItem) => {
      items.update((currentItems) => {
        // Проверяем, есть ли уже такой элемент в корзине
        const existingItem = currentItems.find((i) => i.name === item.name);
        if (existingItem) {
          existingItem.quantity++; // Увеличиваем количество, если товар уже в корзине
        } else {
          currentItems.push({ ...item, quantity: 1 }); // Добавляем новый товар в корзину
        }
        return currentItems;
      });
    },
    remove: (item: CartItem) => {
      items.update((currentItems) => currentItems.filter((i) => i.name !== item.name));
    },
    checkout: () => {
      items.set([]); // Очищаем корзину при оформлении заказа
    }
  };
}

export const cartStore = createCartStore();
