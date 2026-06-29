import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({

    site: "https://pravaahlegal.com",

    integrations: [

        sitemap()

    ],

    compressHTML: true,

    output: "static",

    scopedStyleStrategy: "where"

});
