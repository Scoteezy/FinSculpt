import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  reactStrictMode: false,

};

export default withNextIntl(nextConfig);
