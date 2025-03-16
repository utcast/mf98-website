import { defineStore } from 'pinia';

export const useMuseumStore = defineStore('museum', {
  state: () => ({
    cards: [
      { title: '[天然繊維](てんねんせんい)と[化学繊維](かがくせんい)', content: '[ポリマー](ぽりまー)は[モノマー](ものまー)でできています。', page: 'close', img: '~/assets/img/museum/close/natural_synthetic_fibers.jpg' },
      { title: '[化学繊維](かがくせんい)の[合成](ごうせい)', content: '[実際](じっさい)に[合成繊維](ごうせいせんい)を[作](つく)っていきます。', page: 'close', img: '~/assets/img/museum/close/synthetic_fiber_synthesis.jpg' },
      { title: '[ペルチェ効果](ぺるちぇこうか)', content: '[ペルチェ素子](ぺるちぇそし)を[用](もち)いて[片面](かためん)を[冷](ひ)やし、[片面](かためん)を[温](あたた)めます。', page: 'heat', img: '~/assets/img/museum/heat/peltier_effect.jpg' },
      { title: '[熱](ねつ)で[消](き)える[インク](いんく)', content: '[擦](こす)ると[消](き)えるあれです。', page: 'pen', img: '~/assets/img/museum/pen/heat_sensitive_ink.jpg' },
    ],
  }),
});
