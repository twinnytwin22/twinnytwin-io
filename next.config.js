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
  },
  async headers() {
      return [
          {
              // Set CSP header to allow embedding content from Spotify
              source: '/(.*)',
              headers: [
                  {
                      key: 'Content-Security-Policy',
                      value: "frame-ancestors 'self' https://open.spotify.com;"
                  }
              ],
          },
      ];
  },
};

module.exports = nextConfig;
