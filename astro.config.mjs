import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({

    site: "https://pravaahlegal.com",

    base: "/Pravaah-Legal",

    integrations: [

        sitemap()

    ],

    compressHTML: true,

    output: "static",

    scopedStyleStrategy: "where"

});
