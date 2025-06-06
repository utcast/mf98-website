import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', {
  state: () => ({
    cards: [
      { title: 'ジャイロ[効果](こうか)',
        alt: 'タイヤが支えなくても倒れない様子',
        content: '[走](はし)っている[時](とき)には[自転車](じてんしゃ)のタイヤは[倒](たお)れませんね。このように、[回転](かいてん)しているものは[安定](あんてい)します。これを[ジャイロ効果](こうか)と言います。そんなジャイロ[効果](こうか)を、[実験](じっけん)で[見](み)てみましょう。[回](まわ)っているタイヤは、[支](ささ)えを[失](うしな)っても[倒](たお)れずに、まるで[宙](ちゅう)に[浮](う)いているかのように[回](まわ)り[続](つづ)けます。さらにタイヤがある[不思議](ふしぎ)な[動](うご)きをするので、ぜひご[注目](ちゅうもく)ください。',
        page: 'rotation',
        img: '/mayfes2025/show/rotation/fly_wheel.jpg',
        title_en: 'Gyroscopic effect',
        content_en: 'When riding a bicycle, the tires do not fall over. This is because rotating objects are stable. This is called the gyroscopic effect. Let\'s see this gyroscopic effect in action through an experiment. The rotating tire does not fall over even when it loses its support, and it continues to rotate as if it is floating in the air. The tire also exhibits some mysterious movements, so please pay attention to that.' },
      { title: '[回](まわ)る[速](はや)さと[中心](ちゅうしん)からの[距離](きょり)',
        alt: 'フィギュアスケートで高速回転しているイメージ画像',
        content: 'みなさんはフィギュアスケートを[見](み)たことがあるでしょうか。ジャンプに[目](め)が[行](い)きがちですが、その[場](ば)で[高速](こうそく)[回転](かいてん)する[演技](えんぎ)も[見](み)どころの[一](ひと)つです。なぜ、スケート[選手](せんしゅ)はあれほどの[高速](こうそく)[回転](かいてん)ができるのでしょうか。[特](とく)に、どんどん[回転](かいてん)が[速](はや)くなっていくのはどうしてなのでしょうか。この[実験](じっけん)を[通](とお)して、そのひみつを[解](と)き[明](あ)かしていきます。',
        page: 'rotation',
        img: '/mayfes2025/show/rotation/skate.png',
        title_en: 'Speed of rotation and distance from the center',
        content_en: 'Have you ever seen figure skating? While the jumps are often the focus, the high-speed spins performed on the ice are also a highlight. How can skaters achieve such high-speed spins? In particular, how do they manage to spin faster and faster? Through this experiment, we will uncover the secrets behind this phenomenon.' },
      { title: '[逆立](さかだ)ちゴマ',
        alt: '逆立ちゴマの画像',
        content: '[逆立](さかだ)ちゴマという、[不思議](ふしぎ)なコマのしくみを[再現](さいげん)する[実験](じっけん)です。このコマは[普通](ふつう)のコマと[違](ちが)い、[回](まわ)すとだんだんと[倒](たお)れていって[最終的](さいしゅうてき)には[逆立](さかだ)ちしてしまいます。この[不思議](ふしぎ)な[動](うご)きは、[一体](いったい)どのような[仕組](しく)みで[起](お)きているのでしょうか。サイエンスショー[向](む)けに[大](おお)きくした[実験装置](じっけんそうち)で[実験](じっけん)して[確](たし)かめてみましょう。',
        page: 'rotation',
        img: '/mayfes2025/show/rotation/handstand.jpg',
        title_en: 'Handstand top',
        content_en: 'This is an experiment to reproduce the mechanism of a mysterious top called a handstand top. Unlike ordinary tops, this top gradually tilts as it spins and eventually ends up standing on its tip. What kind of mechanism causes this mysterious movement? Let\'s confirm it with a large experimental device designed for science shows.' },
      { title: 'コリオリ[力](りょく)',
        alt: '台風の渦巻きの画像',
        content: '[私](わたし)たちの[身近](みぢか)な[回転](かいてん)している[物](もの)の[一](ひと)つに、[地球](ちきゅう)があります。[回転](かいてん)する[地球](ちきゅう)の[上](うえ)に[立](た)っていることで[起](お)きる[現象](げんしょう)もあります。その[一](ひと)つが、コリオリ[力](りょく)という[見](み)かけの[力](ちから)です。この[実験](じっけん)では、そんなコリオリ[力](りょく)を[再現](さいげん)してみましょう。[難](むずか)しいコリオリ[力](りょく)も、[実験](じっけん)を[通](とお)せば[簡単](かんたん)にわかっちゃうかも！？',
        page: 'rotation',
        img: '/mayfes2025/show/rotation/typhoon.jpg',
        title_en: 'Coriolis force',
        content_en: 'One of the rotating objects that is close to us is the Earth. There are phenomena that occur because we are standing on the rotating Earth. One of them is the Coriolis force, which is an apparent force. In this experiment, we will reproduce the Coriolis force. The difficult Coriolis force may become easy to understand through this experiment!?' },
    ],
  }),
});
