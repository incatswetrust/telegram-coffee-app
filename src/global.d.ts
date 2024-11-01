export {};

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user: {
                        id: number;
                        username: string;
                        first_name?: string;
                        last_name?: string;
                    };
                    [key: string]: any;
                };
                close: () => void;
                sendData: (data: string) => void;
            };
        };
    }
}
