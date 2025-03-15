import { defineStore } from 'pinia';

export const useMuseumStore = defineStore('museum', {
  state: () => ({
    cards: [
      { title: '天然繊維と化学繊維', content: 'ポリマーはモノマーでできています。', page: 'close', img: '~/assets/img/museum/close/natural_synthetic_fibers.jpg' },
      { title: '化学繊維の合成', content: '実際に合成繊維を作っていきます。', page: 'close', img: '~/assets/img/museum/close/synthetic_fiber_synthesis.jpg' },
      { title: 'ペルチェ効果', content: 'ペルチェ素子を用いて片面を冷やし、片面を温めます。', page: 'heat', img: '~/assets/img/museum/heat/peltier_effect.jpg' },
      { title: '熱で消えるインク', content: '擦ると消えるあれです。', page: 'pen', img: '~/assets/img/museum/pen/heat_sensitive_ink.jpg' },
    ],
  }),
});
