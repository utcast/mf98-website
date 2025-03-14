import { ref } from 'vue'

export const useSponsors = () => {
  const sponsors = ref([
    {
      name: '鑑定様',
      image: '/kyosan/kantei.jpg',
      link: 'https://ut-cast.net/komafes2022/project/appraisal/',
      weight: 10
    },
    {
      name: '薬と毒様',
      image: '/kyosan/kusuri-to-doku.jpg',
      link: 'https://ut-cast.net/komafes2022/project/medi_poi/',
      weight: 2
    },
    {
      name: '立体視様',
      image: '/kyosan/rittaishi.jpg',
      link: 'https://ut-cast.net/komafes2022/project/stereo/',
      weight: 3
    }
  ])

  return { sponsors }
}