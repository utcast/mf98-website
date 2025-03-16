# Nuxt3について

[Nuxtの詳細はこちら](https://nuxt.com/docs/getting-started/introduction)

## セットアップ系

```bash
# これでなんやかんや必要なインストールをすべてやってくれます。警告出るけど気にするな(気になる人は畑中のドキュメント見て)
npm install
```

## 個人的チェック

 `http://localhost:3000`みたいなのが立ち上がるのでそれをおそう:

```bash
npm run dev
```

## ビルド

多分僕以外やりませんが。

```bash
npm run build
```

ローカルなビルドはこちら。

```bash
npm run preview
```

多分僕しか見ませんが [デプロイ用の資料](https://nuxt.com/docs/getting-started/deployment)

## ページ構成

### ホームページ

- **`pages/index.vue`**: サイトのホームページ。各ブースのカード表示したい。

### アトリエページ

- **`pages/atelier/index.vue`**: アトリエのメインページ。`atelier-box` ページにリダイレクトされます。
- **`pages/atelier/box.vue`**: 光の箱に関するページ。
- **`pages/atelier/pendulum.vue`**: 念力振り子に関するページ。
- **`pages/atelier/lightcop.vue`**: 三原色コップに関するページ。

### ミュージアムページ

- **`pages/museum/index.vue`**: ミュージアムのメインページ。`museum-heat` ページにリダイレクトされます。
- **`pages/museum/close.vue`**: 服ブースに関するページ。
- **`pages/museum/heat.vue`**: 熱ブースに関するページ。
- **`pages/museum/pen.vue`**: 文房具ブースに関するページ。

### ショーページ

- **`pages/show/index.vue`**: ショーのメインページ。`show-rotation` ページにリダイレクトされます。
- **`pages/show/rotation.vue`**: 回転ショーに関するページ。

### スケジュールページ

- **`pages/schedule.vue`**: アトリエ、ショーのタイムスケジュールを実装します。

### アクセスページ

- **`pages/access.vue`**: イベント会場へのアクセス情報を表示するページ。

## 主要コンポーネント

### ナビゲーション

- **`components/header.vue`**: サイトのヘッダー。ふりがなの表示切替やメニューのトグル機能があります。
- **`components/footer.vue`**: サイトのフッター。各種リンクが含まれています。

### アトリエナビゲーション

- **`components/atelierNav.vue`**: アトリエページの共通部分。

### ミュージアムナビゲーション

- **`components/museumNav.vue`**: ミュージアムページの共通部分。

### ショーナビゲーション

- **`components/showNav.vue`**: ショーページの共通部分。

### カードコンポーネント

- **`components/card.vue`**: museum,show,atelierで使用されるカードコンポーネント。タイトル、画像、コンテンツを表示します。デザインいじりたければこれ。

### 協賛企業

- **`components/kyosan_rand.vue`**: ランダムに選ばれた協賛企業を表示するコンポーネント。
- **`components/kyosan_all.vue`**: すべての協賛企業を表示するコンポーネント。

## データストア

### アトリエストア

- **`stores/atelierStore.js`**: アトリエに関するデータを管理するストア。実験内容の書き換え、追加はこちら。

### ミュージアムストア

- **`stores/museumStore.js`**: ミュージアムに関するデータを管理するストア。実験内容の書き換え、追加はこちら。

### ショーストア

- **`stores/showStore.js`**: ショーに関するデータを管理するストア。実験内容の書き換え、追加はこちら。

## その他

- **`composables/useSponsors.js`**: 協賛企業のデータを管理するコンポーザブル。
- **`data/schedule.js`**: イベントのスケジュールデータを管理するファイル。
