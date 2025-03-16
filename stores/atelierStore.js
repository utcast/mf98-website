import { defineStore } from 'pinia';

export const useAtelierStore = defineStore('atelier', {
  state: () => ({
    cards: [
      { title: '[光](ひかり)の[箱](はこ)', content: '[光](ひかり)の[箱](はこ)に[関](かん)する[説明](せつめい)。', page: 'box', img: '~/assets/img/atelier/box/A.jpg' },
      { title: '[念力](ねんりき)[振](ふ)り[子](こ)', content: '[念力](ねんりき)[振](ふ)り[子](こ)に[関](かん)する[説明](せつめい)。', page: 'pendulum', img: '~/assets/img/atelier/pendulum/A.jpg' },
      { title: '[三原色](さんげんしょく)[コップ](こっぷ)', content: '[三原色](さんげんしょく)[コップ](こっぷ)に[関](かん)する[説明](せつめい)', page: 'lightcop', img: '~/assets/img/atelier/lightcop/A.jpg' },
    ],
  }),
});
