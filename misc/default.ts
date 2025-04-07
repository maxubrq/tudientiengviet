import { Metadata } from "next";

export const DEFAULT_METADATA: Metadata = {
    title: 'Từ điển tiếng Việt',
    description: 'Từ điển tiếng Việt',
    icons: [
        {
            url: '/favicon/favicon.ico',
            sizes: '16x16 32x32',
            type: 'image/x-icon'
        },
        {
            url: '/favicon/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
        },
        {
            url: '/favicon/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
        },
        // Apple Touch Icons
        {
            url: '/favicon/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
        },
        // Android Chrome Icon 192 x 192
        {
            url: '/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        // Android Chrome Icon 512 x 512
        {
            url: '/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
        },
    ],
}