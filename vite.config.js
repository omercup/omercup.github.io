import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import SVGLoader from "vite-svg-loader"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  base: "./",
  plugins: [Vue(), SVGLoader(), WindiCSS()]
})
