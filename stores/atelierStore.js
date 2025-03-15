import { defineStore } from 'pinia';

export const useAtelierStore = defineStore('atelier', {
  state: () => ({
    cards: [
      { title: '光の箱', content: '光の箱に関する説明。', page: 'box', img: '~/assets/img/atelier/box/A.jpg' },
      { title: '念力振り子', content: '念力振り子に関する説明。', page: 'pendulum', img: '~/assets/img/atelier/pendulum/A.jpg' },
      { title: '三原色コップ', content: '三原色コップに関する説明', page: 'lightcop', img: '~/assets/img/atelier/lightcop/A.jpg' },
    ],
  }),
});
