let userConfig;
try {
  userConfig = await import('./v0-user-next.config').then(m => m.default);
} catch (e) {
  userConfig = {};
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    appDir: true, // ✅ Ensure App Router is enabled
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// ✅ Properly merging userConfig
export default { ...nextConfig, ...userConfig };
