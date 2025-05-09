import { defineStore } from 'pinia';

export const useAtelierStore = defineStore('atelier', {
  state: () => ({
    cards: [
      { title: '[光](ひかり)の[箱](はこ)', alt: '光の箱', content: '[光](ひかり)の[箱](はこ)に[関](かん)する[説明](せつめい)。', page: 'box', img: '/atelier/box/A.jpg' },
      { title: '[念力](ねんりき)[振](ふ)り[子](こ)', alt: '念力振り子', content: '[念力](ねんりき)[振](ふ)り[子](こ)に[関](かん)する[説明](せつめい)。', page: 'pendulum', img: '/atelier/pendulum/A.jpg' },
      { title: '[三原色](さんげんしょく)[コップ](こっぷ)', alt: '三原色コップ', content: '[電池](でんち)をおさえていろいろな[色](いろ)を[作](つく)ってみよう！', page: 'lightcop', img: '/atelier/lightcop/三原色コップ_完成.jpg' },
      { title: '[材料](ざいりょう)', alt: '三原色コップの材料', content: '[三原色](さんげんしょく)コップの[工作](こうさく)に[来](き)た[人](ひと)はここに[載](の)っている[材料](ざいりょう)があるか[確認](かくにん)してください。', page: 'lightcop', img: '/atelier/lightcop/三原色コップ_材料.jpg' },
      { title: '[電池](でんち)のくみたて', alt: '電池の組み立て1', content: 'まずは[写真](しゃしん)のように、ボタン[電池](でんち)と[LED](えるいーでぃー)をつけていきます。まずはビニールテープを4.5cm[程度](ていど)に[切](き)り、ボタン[電池](でんち)の+[極側](きょくがわ)に[半分](はんぶん)が[隠](かく)れるように[貼](は)ってください。', page: 'lightcop', img: '/atelier/lightcop/三原色コップ_電池を組み立てる①.jpg' },

    ],
  }),
});
