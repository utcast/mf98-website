import { ref } from 'vue'

export const useSponsors = () => {
  const sponsors = ref([
    {
      name: '東罐興業株式会社',
      image: '/kyosan/東罐興業株式会社_ロゴ.pdf',
      link: 'https://www.tokan.co.jp',
      weight: 3
    },
    {
      name: '日本出版販売株式会社',
      image: '/kyosan/日本出版販売株式会社_ロゴ_24駒場祭 (1).png',
      link: 'https://www.nippan.co.jp',
      weight: 1
    },
    {
      name: '株式会社 少年写真新聞社',
      image: '/kyosan/少年写真.png',
      link: 'https://www.schoolpress.co.jp',
      weight: 0.5
    },
    {
      name: '有限会社神山新聞店',
      image: '/kyosan/有限会社神山新聞店.pdf',
      link: 'https://www.anshin-denki-kaiketsu.com/',
      weight: 2
    },
    {
      name: '株式会社日本標準',
      image: '/kyosan/五月祭2025ロゴマーク（日本標準）.pdf',
      link: 'https://www.nipponhyojun.co.jp',
      weight: 3
    },
    {
      name: 'グンゼ株式会社',
      image: '/kyosan/基本形GUNZE_statement.jpg',
      link: 'https://www.gunze.co.jp',
      weight: 10
    },
    {
      name: 'オリエンタル技研工業株式会社',
      image: '/kyosan/ORIENTAL Logo.pdf',
      link: 'https://www.orientalgiken.co.jp',
      weight: 5
    },
    {
      name: '株式会社ワオ・コーポレーション',
      image: '/kyosan/MF25_WAO様_ロゴ.png',
      link: 'https://waomirai.com',
      weight: 1
    },
    {
      name: '株式会社ダ・ビンチ',
      image: '/kyosan/DVLogo20.jpg',
      link: 'https://davinci-mode.co.jp',
      weight: 3
    },
    {
      name: '社会福祉法人草萠学舎 西国立保育園',
      image: '/kyosan/CAST駒場祭_社会福祉法人草萠学舎 西国立保育園_ロゴ.png',
      link: 'https://sohogakusha.jp/2492/',
      weight: 3
    },
    {
      name: '一般社団法人理系女子未来創造プロジェクト',
      image: '/kyosan/理系女子未来創造プロジェクト様.png',
      link: 'https://rikejocafe.jp',
      weight: 1
    },
    {
      name: '株式会社アルファ企画',
      image: '/kyosan/株式会社アルファ企画_ロゴ.png',
      link: 'http://shibuya.pandastudio.tv',
      weight: 1
    }
  ])

  return { sponsors }
}