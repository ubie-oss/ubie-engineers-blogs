export const config = {
  siteMeta: {
    title: "Ubie Engineering",
    teamName: "Ubie, inc.",
    description: "Ubieのエンジニアのブログとか",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://ubie.life/",
    },
    {
      title: "Recruit",
      href: "https://recruit.ubie.life/jd_dev",
    },
  ],
};
