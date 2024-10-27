import type { RequestHandler } from '@sveltejs/kit';
import TelegramBot from 'node-telegram-bot-api';

const token = '';
const bot = new TelegramBot(token, { polling: true });

export const POST: RequestHandler = async ({ request }) => {
    
   // Прочитайте тело запроса как текст
   const rawBody = await request.text();

   // Если тело не пустое, попробуйте преобразовать его в JSON
   const orderData = JSON.parse(rawBody);

    // ID чата бота или используйте user ID, который приходит от клиента
    const chatId =  '';
    const message = `New Order:\n${orderData.items.map((item: any) => `${item.name} x${item.quantity}`).join(', ')}\nTotal: ${orderData.total}`;

    // Отправка сообщения боту
    await bot.sendMessage(chatId, message);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
};
