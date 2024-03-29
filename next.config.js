/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "cdn.sanity.io",
            },
          ],
        domains: ["cdn.sanity.io"],
        loader: "custom",
        loaderFile: "./lib/providers/sanity/lib/imageLoader.ts",
     
    }
}

module.exports = nextConfig
