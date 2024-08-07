import createNextIntlPlugin from "next-intl/plugin";

await import("./src/env.mjs");

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  reactStrictMode: false,

};

export default withNextIntl(nextConfig);
