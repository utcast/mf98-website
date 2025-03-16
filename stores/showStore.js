import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', {
  state: () => ({
    cards: [
      { title: '[ジャイロ効果](じゃいろこうか)', content: '[ジャイロ効果](じゃいろこうか)で[タイヤ](たいや)が[縦](たて)になります。', page: 'rotation', img: '~/assets/img/show/rotation/gyro.jpg' },
      { title: '[角運動量保存則](かくうんどうりょうほぞんそく)', content: '[中心](ちゅうしん)に[向](む)かわせたら[回](まわ)る[速度](そくど)が[速](はや)くなります。', page: 'rotation', img: '~/assets/img/show/rotation/angular_momentum.jpg' },
      { title: '[発泡スチロール](はっぽうすちろーる)の[変化球](へんかきゅう)', content: '[マグヌス効果](まぐぬすこうか)によるものです。', page: 'rotation', img: '~/assets/img/show/rotation/magnus_effect.jpg' },
    ],
  }),
});
