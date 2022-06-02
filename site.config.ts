export const config = {
  siteMeta: {
    title: "GENDA Creators Blog",
    teamName: 'GENDA Inc.',
    description: '株式会社GENDAに所属するプロダクト開発に関わるメンバーのブログ記事をまとめています。',
  },
  siteRoot: process.env.NODE_ENV === 'production' ? 'https://blog.genda.jp/creators' : 'http://localhost:3000/creators',
  headerLinks: [
    {
      title: 'Company',
      href: 'https://genda.jp/',
    },
    {
      title: 'Recruit',
      href: 'https://hrmos.co/pages/genda',
    },
  ],
};
