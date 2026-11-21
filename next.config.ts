import type { NextConfig } from "next";

// Site 100% estático (out/), pronto para GitHub Pages, Vercel ou qualquer CDN.
// Para publicar em https://<user>.github.io/<repo>/ defina NEXT_PUBLIC_BASE_PATH=/<repo> no build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
