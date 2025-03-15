import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', {
  state: () => ({
    cards: [
      { title: 'ジャイロ効果', content: 'ジャイロ効果でタイヤが縦になります。', page: 'rotation' },
      { title: '角運動量保存則', content: '中心に向かわせたら回る速度が速くなります。', page: 'rotation' },
      { title: '発泡スチロールの変化球', content: 'マグヌス効果によるものです。', page: 'rotation' },
    ],
  }),
});
