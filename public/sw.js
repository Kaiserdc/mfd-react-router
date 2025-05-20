import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, NetworkFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

// Кешируем все, что указано в манифесте
precacheAndRoute(self.__WB_MANIFEST)

// Runtime caching для API запросов (NetworkFirst — сначала сеть, потом кеш)
registerRoute(
    ({ url }) =>
        url.origin === 'https://rickandmortyapi.com' &&
        url.pathname.startsWith('/api/'),
    new NetworkFirst({
        cacheName: 'api-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60, // 1 день
            }),
        ],
    })
)

// Runtime caching для аватарок (CacheFirst — сначала кеш, потом сеть)
registerRoute(
    ({ url }) =>
        url.origin === 'https://rickandmortyapi.com' &&
        url.pathname.startsWith('/api/character/avatar/'),
    new CacheFirst({
        cacheName: 'avatar-images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 дней
            }),
        ],
    })
)
