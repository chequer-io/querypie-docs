import nextra from 'nextra';

// Set up Nextra with its configuration
const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
});

// Export the final Next.js config with Nextra included
export default withNextra({
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['en', 'ko', 'ja'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      // 각 언어의 홈페이지를 install-guide로 리다이렉트
      {
        source: '/en',
        destination: '/en/install-guide',
        permanent: false,
      },
      {
        source: '/ko',
        destination: '/ko/install-guide',
        permanent: false,
      },
      {
        source: '/ja',
        destination: '/ja/install-guide',
        permanent: false,
      },
      // 루트 경로도 기본 언어의 install-guide로 리다이렉트
      {
        source: '/',
        destination: '/en/install-guide',
        permanent: false,
      },
    ];
  },
});
