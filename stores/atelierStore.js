import { defineStore } from 'pinia';

export const useAtelierStore = defineStore('atelier', {
  state: () => ({
    cards: [
      { title: '[念力](ねんりき)[振](ふ)り[子](こ)', alt: '念力振り子', content: '[念力](ねんりき)[振](ふ)り[子](こ)に[関](かん)する[説明](せつめい)。', page: 'pendulum', img: '/mayfes2025/atelier/pendulum/A.jpg' },
      { title: '[材料](ざいりょう)', alt: '三原色コップの材料', content: '[三原色](さんげんしょく)コップの[工作](こうさく)に[来](き)た[人](ひと)はここに[載](の)っている[材料](ざいりょう)があるか[確認](かくにん)してください。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/material.jpg' },
      { title: '[電池](でんち)のくみたて', alt: '電池の組み立て1', content: 'まずは[写真](しゃしん)のように、ボタン[電池](でんち)と[LED](えるいーでぃー)をつけていきます。まずはビニールテープを4.5cm[程度](ていど)に[切](き)り、ボタン[電池](でんち)の+[極側](きょくがわ)に[半分](はんぶん)が[隠](かく)れるように[貼](は)ってください。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/set_cell1.jpg' },
      { title: '[電池](でんち)のくみたて', alt: '電池の組み立て2', content: '',page: 'lightcop', img: '/mayfes2025/atelier/lightcop/set_cell2a.jpg' },
      { title: '', alt: '電池の組み立て3', content: '[電池](でんち)の+[極](きょく)に[LED](えるいーでぃー)の[長](なが)い[足](あし)が、-[極](きょく)に[短](みじか)い[足](あし)が[当](あ)たるように、ビニールテープ[側](がわ)から[被](かぶ)せ、[LED](えるいーでぃー)にキャップを[被](かぶ)せます。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/set_cell2b.jpg' },
      { title: '[電池](でんち)のくみたて', alt: '電池の組み立て4', content: '', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/set_cell3.jpg' },
      { title: '', alt: '電池の組み立て5', content: 'ビニールテープの[残](のこ)った[部分](ぶぶん)を[折](お)り[返](かえ)し、LEDを[固定](こてい)します。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/set_cell4.jpg' },
      { title: '[電池](でんち)のくみたて', alt: '電池の組み立て6', content: 'これを3[色](しょく)で[作](つく)ります。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/set_cell5.jpg' },
      { title: 'トレーシングペーパーを[貼](は)る', alt: '電池の組み立て7', content: '[紙](かみ)コップにトレーシングペーパーをセロハンテープで[貼](は)ります。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/paper.jpg' },
      { title: '[紙](かみ)コップに[LED](えるいーでぃー)をつける', alt: '電池の組み立て8', content: '[電池](でんち)の-[極側](きょくがわ)に[丸](まる)めたセロハンテープをつけ、[紙](かみ)コップに3つが[等間隔](とうかんかく)になるように[貼](は)ります。[緑](みどり)を[少](すこ)しだけコップの[底寄](そこよ)りに[貼](は)って[完成](かんせい)です。', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/cell_paper.jpg' },
      { title: '[三原色](さんげんしょく)[コップ](こっぷ)', alt: '三原色コップ', content: '[LED](えるいーでぃー)の[足](あし)の[部分](ぶぶん)を[押](お)すと、その[LED](えるいーでぃー)が[光](ひか)ります。[光](ひかり)を[混](ま)ぜるときは[何色](なんしょく)か[同時](どうじ)に[押](お)してみましょう。その[状態](じょうたい)でコップの[底](そこ)のほうから[見](み)てみましょう！', page: 'lightcop', img: '/mayfes2025/atelier/lightcop/finish.jpg' },
      { title: '[材料](ざいりょう)', alt: '光の箱', content: '[光](ひかり)の[箱](はこ)の[工作](こうさく)に[来](き)た[人](ひと)はここに[載](の)っている[材料](ざいりょう)があるか[確認](かくにん)してください。', page: 'box', img: '/mayfes2025/atelier/box/material.jpeg' },
      { title: '[工作用紙](こうさくようし)で[筒](つつ)を[作](つく)る', alt: '光の箱', content: '[折](お)り[線](せん)に[沿](そ)って[工作用紙](こうさくようし)のマス[目](め)が[見](み)えるように[山折](やまお)りをしてください。最後は両面テープを剥がしてくっつけてください。', page: 'box', img: '/mayfes2025/atelier/box/pipe.jpeg' },
      { title: 'トレーシングペーパーを[線](せん)に[沿](そ)って[折](お)り、[筒](つつ)に[蓋](ふた)をする', alt: '光の箱', content: '', page: 'box', img: '/mayfes2025/atelier/box/paper.jpeg' },
      { title: '', alt: '光の箱', content: 'トレーシングペーパーに[表](おもて)と[裏](うら)の[区別](くべつ)はありません。', page: 'box', img: '/mayfes2025/atelier/box/paper_set.jpeg' },
      { title: '[銀色](ぎんいろ)の[方](ほう)を[内側](うちがわ)にして、[銀紙](ぎんがみ)を[丸](まる)める', alt: '光の箱', content: '[円](えん)だけでなく、[三角](さんかく)や[星](ほし)など[様々](さまざま)な[形](かたち)を[作](つく)ってみよう！', page: 'box', img: '/mayfes2025/atelier/box/silver.jpeg' },
      { title: '[銀紙](ぎんがみ)を[箱](はこ)に[敷](し)き[詰](つ)める', alt: '光の箱', content: '', page: 'box', img: '/mayfes2025/atelier/box/box_in.jpeg' },
      { title: 'カラーセロハンで[蓋](ふた)をする', alt: '光の箱', content: '4[枚](まい)のカラーセロハンで[全面](ぜんめん)を[覆](おお)うことができるように[蓋](ふた)をする。カラーセロハンを[重](かさ)ねてみると[色](いろ)が[混](ま)ざって[面白](おもしろ)い[色](いろ)ができるよ！', page: 'box', img: '/mayfes2025/atelier/box/paper_set.jpeg' },
      { title: '[完成](かんせい)', alt: '光の箱', content: '', page: 'box', img: '/mayfes2025/atelier/box/finish.jpeg' },
    ],
  }),
});
