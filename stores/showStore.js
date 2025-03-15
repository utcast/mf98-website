import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', {
  state: () => ({
    cards: [
      { title: 'ジャイロ効果', content: 'ジャイロ効果でタイヤが縦になります。', page: 'rotation', img: '~/assets/img/show/rotation/gyro.jpg' },
      { title: '角運動量保存則', content: '中心に向かわせたら回る速度が速くなります。', page: 'rotation', img: '~/assets/img/show/rotation/angular_momentum.jpg' },
      { title: '発泡スチロールの変化球', content: 'マグヌス効果によるものです。', page: 'rotation', img: '~/assets/img/show/rotation/magnus_effect.jpg' },
    ],
  }),
});
