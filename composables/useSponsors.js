import { ref } from 'vue'

export const useSponsors = () => {
  const sponsors = ref([
    {
      name: '東罐興業株式会社',
      image: '/mayfes2025/kyosan/東罐興業株式会社-edited.png',
      link: 'https://www.tokan.co.jp',
      weight: 3
    },
    {
      name: '日本出版販売株式会社',
      image: '/mayfes2025/kyosan/nippan.png',
      link: 'https://www.nippan.co.jp',
      weight: 1
    },
    {
      name: '株式会社 少年写真新聞社',
      image: '/mayfes2025/kyosan/shonen.png',
      link: 'https://www.schoolpress.co.jp',
      weight: 0.5
    },
    {
      name: '有限会社神山新聞店',
      image: '/mayfes2025/kyosan/神山新聞店-edited.png',
      link: 'https://www.anshin-denki-kaiketsu.com/',
      weight: 2
    },
    {
      name: '株式会社日本標準',
      image: '/mayfes2025/kyosan/日本標準-edited.png',
      link: 'https://www.nipponhyojun.co.jp',
      weight: 3
    },
    {
      name: 'グンゼ株式会社',
      image: '/mayfes2025/kyosan/GUNZE-edited.png',
      link: 'https://www.gunze.co.jp',
      weight: 10
    },
    {
      name: 'オリエンタル技研工業株式会社',
      image: '/mayfes2025/kyosan/ORIENTAL-edited.png',
      link: 'https://www.orientalgiken.co.jp',
      weight: 5
    },
    {
      name: '株式会社ワオ・コーポレーション',
      image: '/mayfes2025/kyosan/MF25_WAO様_ロゴ.png',
      link: 'https://waomirai.com',
      weight: 1
    },
    {
      name: '株式会社ダ・ビンチ',
      image: '/mayfes2025/kyosan/DV-edited.png',
      link: 'https://davinci-mode.co.jp',
      weight: 3
    },
    {
      name: '社会福祉法人草萠学舎 西国立保育園',
      image: '/mayfes2025/kyosan/nishikunitachi.png',
      link: 'https://sohogakusha.jp/2492/',
      weight: 3
    },
    {
      name: '一般社団法人理系女子未来創造プロジェクト',
      image: '/mayfes2025/kyosan/jo.png',
      link: 'https://rikejocafe.jp',
      weight: 1
    },
    {
      name: '株式会社アルファ企画',
      image: '/mayfes2025/kyosan/alpha.png',
      link: 'http://shibuya.pandastudio.tv',
      weight: 1
    }
  ])

  return { sponsors }
}