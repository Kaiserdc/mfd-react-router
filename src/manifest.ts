import type {ManifestOptions} from 'vite-plugin-pwa';

export const manifest: ManifestOptions = {
    categories: [],
    description: "",
    dir: "ltr",
    display_override: [],
    file_handlers: [],
    iarc_rating_id: "",
    id: "",
    lang: "",
    prefer_related_applications: false,
    protocol_handlers: [],
    publicPath: "",
    related_applications: [],
    scope: "",
    scope_extensions: [],
    screenshots: [],
    share_target: {action: "", params: {}},
    shortcuts: [],
    name: "Профессия Мидл Frontend-разработчик",
    short_name: "Mfd",
    start_url: "/index.html",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#228be6",
    orientation: "portrait-primary",

    icons: [
        {
            src: "/icons/icon-512x512.png",
            type: "image/png",
            sizes: "512x512"
        },
        {
            src: "/icons/icon-192x192.png",
            type: "image/png",
            sizes: "192x192"
        },
        {
            src: "/icons/icon-144x144.png",
            type: "image/png",
            sizes: "144x144"
        },
        {
            src: "/icons/icon-96x96.png",
            type: "image/png",
            sizes: "96x96"
        },
        {
            src: "/icons/icon-72x72.png",
            type: "image/png",
            sizes: "72x72"
        },
        {
            src: "/icons/icon-48x48.png",
            type: "image/png",
            sizes: "48x48"
        }

    ]
}