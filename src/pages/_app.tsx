import "../app/globals.css";

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-100 h-screen">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
