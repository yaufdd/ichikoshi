import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/ichikoshi" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
