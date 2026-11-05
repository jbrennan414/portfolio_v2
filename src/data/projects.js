import skiBunksImg from '../assets/img/ski-bunks.jpg'
import skiScraperImg from '../assets/img/skiscraper.jpg'
import findMyFourteenerImg from '../assets/img/findmyfourteener.png'
import currenseeImg from '../assets/img/currensee.svg'

const projects = [
  {
    id: '0mg',
    title: '0mg',
    description:
      'iOS app for quitting nicotine — streak tracking, daily missions, and achievement badges. Built for people who refuse to quit on themselves.',
    link: 'https://apps.apple.com/us/app/0mg/id6754226820',
    kind: 'app-icon',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f2/fb/6f/f2fb6fab-37b7-8014-dbd5-dc80c19cd24f/Placeholder.mill/400x400Icon.ApSiOS01-75.jpg',
    tagline: 'Quit Nicotine',
    meta: 'iOS · 2025',
  },
  {
    id: 'skibunks',
    title: 'SkiBunks',
    description: 'Rental reservation system for my ski house crew during the 2023/24 winter.',
    link: 'https://www.youtube.com/watch?v=qRyWRSH-Dkk',
    kind: 'image',
    image: skiBunksImg,
  },
  {
    id: 'skiscraper',
    title: 'SkiScraper',
    description: 'Scrapes reservation sites and pings me on Telegram when a slot opens.',
    link: 'https://www.youtube.com/watch?v=4CnmTISvu3A',
    kind: 'image',
    image: skiScraperImg,
  },
  {
    id: 'currensee',
    title: 'CurrenSee',
    description: 'iOS currency exchange rate app built in 2018 — my first Swift project.',
    link: 'https://www.youtube.com/watch?v=y9hC8f9dm_U',
    kind: 'currensee',
    image: currenseeImg,
  },
  {
    id: 'findmyfourteener',
    title: 'FindMyFourteener',
    description: "For Denverites with an itch to summit — closest 14'ers, trail status, weather.",
    link: 'https://findmyfourteener.com',
    kind: 'image',
    image: findMyFourteenerImg,
  },
]

export default projects
