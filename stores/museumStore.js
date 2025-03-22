import { defineStore } from 'pinia';

export const useMuseumStore = defineStore('museum', {
  state: () => ({
    cards: [
      { title: '[天然繊維](てんねんせんい)と[化学繊維](かがくせんい)', alt: '天然繊維と化学繊維', content: '[ポリマー](ぽりまー)は[モノマー](ものまー)でできています。', page: 'clothes', img: '~/assets/img/museum/clothes/natural_synthetic_fibers.jpg' },
      { title: '[化学繊維](かがくせんい)の[合成](ごうせい)', alt: '化学繊維の合成', content: '[実際](じっさい)に[合成繊維](ごうせいせんい)を[作](つく)っていきます。', page: 'clothes', img: '~/assets/img/museum/clothes/synthetic_fiber_synthesis.jpg' },
      { title: '[ペルチェ効果](ぺるちぇこうか)', alt: 'ペルチェ効果', content: '[ペルチェ素子](ぺるちぇそし)を[用](もち)いて[片面](かためん)を[冷](ひ)やし、[片面](かためん)を[温](あたた)めます。', page: 'heat', img: '~/assets/img/museum/heat/peltier_effect.jpg' },
      { title: '[熱](ねつ)で[消](き)える[インク](いんく)', alt: '熱で消えるインク', content: '[擦](こす)ると[消](き)えるあれです。', page: 'pen', img: '~/assets/img/museum/pen/heat_sensitive_ink.jpg' },
    ],
  }),
});
