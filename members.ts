import { Member } from "@src/types";

export const members: Member[] = [
  {
    nickname: "たろう",
    realName: "長澤太郎",
    bio: "Kotlinの人だけど、いろいろやってるよ！",
    avatarSrc: "/avatars/taro.jpg",
    sources: ["https://taro.hatenablog.jp/feed"],
    includeUrlRegex: "taro.hatenablog.jp",
    twitterUsername: "ngsw_taro",
    githubUsername: "ngsw_taro",
    websiteUrl: "https://taro.hatenablog.jp/",
  },
  {
    nickname: 'jimbo',
    realName: '神保嘉秀',
    bio: '大阪からリモートワークしてます',
    avatarSrc: 'https://pbs.twimg.com/profile_images/951461895231348736/wnfNYZpX.png',
    sources: ['https://jmblog.jp/atom.xml', 'https://qiita.com/jimbo/feed'],
    twitterUsername: 'jmblog',
    githubUsername: 'jmblog',
    websiteUrl: 'https://jmblog.jp'
  }
];
