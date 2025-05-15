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
  title_en?: string;
  description_en?: string;
  title_short_en?: string;
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
    title_en: 'Rotation Show',
    description_en: 'Let\'s discover the mysteries hidden in everyday "rotation"!',
    title_short_en: 'Rotation Show',
  },
  hikari: {
    title: '[光](ひかり)の[箱](はこ)',
    description: '[光](ひかり)にかざすとキラキラ[光](ひか)る！？カラフルに[光](ひか)る[箱](はこ)を[作](つく)って[反射](はんしゃ)の[仕組](しく)みについて[知](し)ろう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'hikari' },
    image: '/img/thumbnail/hikari.png',
    title_short: '[光](ひかり)の[箱](はこ)',
    title_en: 'Box of Light',
    description_en: 'Sparkling when lit? Make a colorful box to explore the science of reflection!',
    title_short_en: 'Light Box',
  },
  san_gen: {
    title: '[三原色](さんげんしょく)コップ',
    description: '[手元](てもと)で[光](ひかり)を[混](ま)ぜられる！？コップを[作](つく)って[光](ひか)りの[三原色](さんげんしょく)について[知](し)ろう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'san_gen' },
    image: '/img/thumbnail/san_gen.png',
    title_short: '[三原色](さんげんしょく)コップ',
    title_en: 'Primary Colors Cup',
    description_en: 'Mix light with your hands? Make a cup and learn about the primary colors of light!',
    title_short_en: 'Colors Cup',
  },
  nenriki: {
    title: '[念力振](ねんりきふ)り[子](こ)',
    description: '[思](おも)いのままに[揺](ゆ)らせる……？ゆらゆら[揺](ゆ)れる[工作](こうさく)をして[振](ふ)り[子](こ)に[詳](くわ)しくなっちゃおう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'nenriki' },
    image: '/img/thumbnail/nenriki.png',
    title_short: '[念力振](ねんりきふ)り[子](こ)',
    title_en: 'Telekinetic Pendulum',
    description_en: 'Control the swing with your mind? Build a swaying craft and explore pendulums!',
    title_short_en: 'Pendulum',
  },
  kimiS: {
    title: '[君](きみ)も[SC](えすしー)をやってみよう',
    description: '[一緒](いっしょ)に[実験](じっけん)やってみよう！',
    color: 'zoom',
    channel: 'atelier',
    url: { name: 'kimiS' },
    image: '/img/thumbnail/kimiS.png',
    title_short: '[君](きみ)[S](えす)',
    title_en: 'Try SC Experiments!',
    description_en: 'Let’s do science experiments together!',
    title_short_en: 'Try SC!',
  },
}
