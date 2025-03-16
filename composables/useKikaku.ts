export interface Kikaku {
    title: string;
    description: string;
    icon: string;
    color: string;
    channel: 'show' | 'atelier';
    url?: { name: string };
    image?: string;
    title_short?: string;
  }
  
  const kikaku: Record<string, Kikaku> = {
    kaiten: {
      title: '回転ショー',
      description: '身近な「回転」に隠された不思議を大公開！',
      icon: 'sync-alt',
      color: 'youtube',
      channel: 'show',
      url: { name: 'kaiten' },
      image: '/img/thumbnail/kaiten.png',
      title_short: '回転ショー',
    },
    hikari: {
      title: '光の箱',
      description: '光と色の不思議を楽しめるワークショップ！',
      icon: 'lightbulb',
      color: 'zoom',
      channel: 'atelier',
      url: { name: 'hikari' },
      image: '/img/thumbnail/hikari.png',
      title_short: '光の箱',
    },
    san_gen: {
      title: '三原色コップ',
      description: '三原色で色が混ざる仕組みを体感しよう！',
      icon: 'palette',
      color: 'zoom',
      channel: 'atelier',
      url: { name: 'san_gen' },
      image: '/img/thumbnail/san_gen.png',
      title_short: '三原色コップ',
    },
    nenriki: {
      title: '念力振り子',
      description: '不思議な振り子の動きの秘密に迫る！',
      icon: 'wave-square',
      color: 'zoom',
      channel: 'atelier',
      url: { name: 'nenriki' },
      image: '/img/thumbnail/nenriki.png',
      title_short: '念力振り子',
    },
  }
  
  export const useKikaku = () => {
    const getKikaku = (slug: string): Kikaku | undefined => {
      return kikaku[slug]
    }
    return { getKikaku }
  }
  