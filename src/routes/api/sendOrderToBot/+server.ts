import type { RequestHandler } from '@sveltejs/kit';
import TelegramBot from 'node-telegram-bot-api';

const token = '';
const bot = new TelegramBot(token, { polling: true });

export const POST: RequestHandler = async ({ request }) => {
    
   
   const rawBody = await request.text();

  
   const orderData = JSON.parse(rawBody);

    
    const chatId =  '';
    const message = `New Order:\n${orderData.items.map((item: any) => `${item.name} x${item.quantity}`).join(', ')}\nTotal: ${orderData.total}`;

    
    await bot.sendMessage(chatId, message);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
};
