/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "astrasale.com" },
      { protocol: "https", hostname: "cosy-corner.shop" },
      { protocol: "https", hostname: "cosycorner-3497.myshopify.com" },
      { protocol: "https", hostname: "i.postimg.cc" },
    ],
  },
};

export default nextConfig;
