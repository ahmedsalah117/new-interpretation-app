import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  ignoreBuildErrors: true,
  // SCSS configuration
  sassOptions: {
    includePaths: ["./styles", "./components"],
    prependData: `@import "@/styles/_variables.scss";`,
  },
  i18n,
};

export default nextConfig;
