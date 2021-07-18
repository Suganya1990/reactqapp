import sportImg from './assets/sport.jpeg'
import tvImg from './assets/television.jpeg'
import animeImg from './assets/anime.jpeg'
import cartoonImg from './assets/cartoon.jpeg'
import celebertiesImg from './assets/celeberties.jpeg'
import musicImg from './assets/music.jpeg'
const mode = [
  {
    category: 'sports',
    image: sportImg,
    apiLink: 'https://opentdb.com/api.php?amount=10&category=21&type=multiple',
    // apiLink: {
    //   easy: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple',
    //   medium:
    //     'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
    //   hard: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple',
    // },
    questions: 10,
  },
  {
    category: 'televisions',
    image: tvImg,
    apiLink: 'https://opentdb.com/api.php?amount=10&category=14&type=multiple',
    // apiLink: {
    //   easy: 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple',
    //   medium:
    //     'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple',
    //   hard: 'https://opentdb.com/api.php?amount=10&category=14&difficulty=hard&type=multiple',
    // },
    questions: 10,
  },
  {
    category: 'anime',
    image: animeImg,
    apiLink: 'https://opentdb.com/api.php?amount=10&category=31&type=multiple',
    // apiLink: {
    //   easy: 'https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple',
    //   medium:
    //     'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple',
    //   hard: 'https://opentdb.com/api.php?amount=10&category=31&difficulty=hard&type=multiple',
    // },
    questions: 10,
  },
  {
    category: 'cartoons',
    image: cartoonImg,
    apiLink: 'https://opentdb.com/api.php?amount=10&category=32&type=multiple',
    // apiLink: {
    //   easy: 'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple',
    //   medium:
    //     'https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple',
    //   hard: 'https://opentdb.com/api.php?amount=10&category=32&difficulty=hard&type=multiple',
    // },
    questions: 10,
  },
  {
    category: 'celebrities',
    image: celebertiesImg,
    apiLink: 'https://opentdb.com/api.php?amount=10&category=26&type=multiple',
    // apiLink: {
    //   easy: 'https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple',
    //   medium:
    //     'https://opentdb.com/api.php?amount=10&category=26&difficulty=medium&type=multiple',
    //   hard: 'https://opentdb.com/api.php?amount=10&category=26&difficulty=hard&type=multiple',
    // },
    questions: 10,
  },
  {
    category: 'music',
    image: musicImg,
    apiLink: 'https://opentdb.com/api.php?amount=10&category=12&type=multiple',
    // apiLink: {
    //   easy: 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple',
    //   medium:
    //     'https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple',
    //   hard: 'https://opentdb.com/api.php?amount=10&category=12&difficulty=hard&type=multiple',
    // },
    questions: 10,
  },
]
export default mode
