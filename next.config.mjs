/** @type {import('next').NextConfig} */
const basePath =
  process.env.GITHUB_PAGES === "1" ? "/morganz-landing-page" : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
