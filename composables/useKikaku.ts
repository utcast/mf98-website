export const useKikaku = () => {
  const getKikaku = (slug: string): Kikaku | null => {
    return kikaku[slug] || null // fallbackで null を返す
  }
  return { getKikaku }
}

export interface Kikaku {
  title: string;
  description: string;
  color: string;
  channel: 'show' | 'atelier';
  url?: { name: string };
  image?: string;
  title_short?: string;
}

const kikaku: Record<string, Kikaku> = {
  kaiten: {
    title: '[回転](かいてん)ショー',
    description: '[身近](みぢか)な「[回転](かいてん)」に[隠](かく)された[不思議](ふしぎ)を[解](と)き[明](あ)かす！',
    color: 'youtube',
    channel: 'show',
    url: { name: 'kaiten' },
    image: '/img/thumbnail/kaiten.png',
    title_short: '[回転](かいてん)ショー',
  },
  hikari: {
    title: '[光](ひかり)の[箱](はこ)',
    description: '[光](ひかり)にかざすとキラキラ[光](ひか)る！？カラフルに[光](ひか)る[箱](はこ)を[作](つく)って[反射](はんしゃ)の[仕組](しく)みについて[知](し)ろう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'hikari' },
    image: '/img/thumbnail/hikari.png',
    title_short: '[光](ひかり)の[箱](はこ)',
  },
  san_gen: {
    title: '[三原色](さんげんしょく)コップ',
    description: '[手元](てもと)で[光](ひかり)を[混](ま)ぜられる！？コップを[作](つく)って[光](ひかり)の[三原色](さんげんしょく)について[知](し)ろう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'san_gen' },
    image: '/img/thumbnail/san_gen.png',
    title_short: '[三原色](さんげんしょく)コップ',
  },
  nenriki: {
    title: '[念力振](ねんりきふ)り[子](こ)',
    description: '[思](おも)いのままに[揺](ゆ)らせる……？ゆらゆら[揺](ゆ)れる[工作](こうさく)をして[振](ふ)り[子](こ)に[詳](くわ)しくなっちゃおう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'nenriki' },
    image: '/img/thumbnail/nenriki.png',
    title_short: '[念力振](ねんりきふ)り[子](こ)',
  },
  kimiS: {
    title: '君[きみ]もSC[えすしー]をやってみよう',
    description: 'SC[えすしー]の[楽](たの)しさを[体験](たいけん)しよう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'kimiS' },
    image: '/img/thumbnail/kimiS.png',
    title_short: '君[きみ]S[えす]',
  },
}


