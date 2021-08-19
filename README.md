# Team Blog Hub for Ubie

Fork of https://github.com/catnose99/team-blog-hub

## Development

```bash
$ yarn install
$ yarn build
$ yarn dev
```

## How to add a member

- members.ts

```typescript
  {
    nickname: "えんぴつ",
    realName: "empitsu",
    bio: "フロントエンドが得意です。1児の母。",
      // 正方形の画像を指定する
    avatarSrc: "/avatars/empitsu.jpeg",
      // rss sourcesは複数指定可能。
    sources: ["https://note.com/empitsu88/rss", "https://zenn.dev/empitsu88/feed", "https://qiita.com/empitsu88/feed"],
    // githubやtwitterのアカウントはoptionalです。
    githubUsername: "empitsu",
    twitterUsername: "empitsu88",
    websiteUrl: "https://empitsu88.hatenablog.com/entry/myprofile",
  },
```

## Licence

MIT
