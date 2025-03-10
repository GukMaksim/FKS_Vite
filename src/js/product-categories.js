// Дані для каталогу виробів
export const productCategories = {
  countertops: {
    id: 'countertops',
    title: 'Стільниці',
    image: new URL('../img/products/categories/countertop.jpg', import.meta.url)
      .href,
    description: 'Стільниці з натурального каменю',
    items: [
      {
        id: 'countertops-granite',
        title: 'Стільниця з граніту',
        image: new URL(
          '../img/products/categories/countertop-1.jpg',
          import.meta.url
        ).href,
        description: 'Стільниця з граніту',
      },
      {
        id: 'countertops-marble',
        title: 'Стільниця з мармуру',
        image: new URL(
          '../img/products/categories/countertop-2.jpg',
          import.meta.url
        ).href,
        description: 'Стільниця з мармуру',
      },
      {
        id: 'countertops-quartzite',
        title: 'Стільниця з кварциту',
        image: new URL(
          '../img/products/categories/countertop-3.jpg',
          import.meta.url
        ).href,
        description: 'Стільниця з кварциту',
      },
      {
        id: 'countertops-onyx',
        title: 'Стільниця з оніксу',
        image: new URL(
          '../img/products/categories/countertop-4.jpg',
          import.meta.url
        ).href,
        description: 'Стільниця з оніксу',
      },
    ],
  },
  windowsills: {
    id: 'windowsills',
    title: 'Підвіконня',
    image: new URL('../img/products/categories/windowsill.jpg', import.meta.url)
      .href,
    description: 'Підвіконня з натурального каменю',
    items: [
      {
        id: 'windowsills-granite',
        title: 'Підвіконня з граніту',
        image: new URL(
          '../img/products/categories/windowsill-1.jpg',
          import.meta.url
        ).href,
        description: 'Підвіконня з граніту',
      },
      {
        id: 'windowsills-marble',
        title: 'Підвіконня з мармуру',
        image: new URL(
          '../img/products/categories/windowsill-2.jpg',
          import.meta.url
        ).href,
        description: 'Підвіконня з мармуру',
      },
      {
        id: 'windowsills-travertine',
        title: 'Підвіконня з травертину',
        image: new URL(
          '../img/products/categories/windowsill-3.jpg',
          import.meta.url
        ).href,
        description: 'Підвіконня з травертину',
      },
      {
        id: 'windowsills-onyx',
        title: 'Підвіконня з оніксу',
        image: new URL(
          '../img/products/categories/windowsill-4.jpg',
          import.meta.url
        ).href,
        description: 'Підвіконня з оніксу',
      },
    ],
  },
  stairs: {
    id: 'stairs',
    title: 'Сходи',
    image: new URL('../img/products/categories/stairs.jpg', import.meta.url)
      .href,
    description: 'Сходи з натурального каменю',
    items: [
      {
        id: 'stairs-granite',
        title: 'Сходи з граніту',
        image: new URL('../img/products/categories/stairs.jpg', import.meta.url)
          .href,
        description: 'Сходи з граніту',
      },
      {
        id: 'stairs-marble',
        title: 'Сходи з мармуру',
        image: new URL('../img/products/categories/stairs.jpg', import.meta.url)
          .href,
        description: 'Сходи з мармуру',
      },
    ],
  },
  fireplaces: {
    id: 'fireplaces',
    title: 'Каміни',
    image: new URL('../img/products/categories/fireplace.jpg', import.meta.url)
      .href,
    description: 'Каміни з натурального каменю',
    items: [
      {
        id: 'fireplaces-1',
        title: 'Каміни',
        image: new URL(
          '../img/products/categories/fireplace.jpg',
          import.meta.url
        ).href,
        description: 'Каміни',
      },
    ],
  },
  floors: {
    id: 'floors',
    title: 'Підлоги',
    image: new URL('/img/products/categories/floor.jpg', import.meta.url).href,
    description: 'Підлоги з натурального каменю',
    items: [
      {
        id: 'floors-marble',
        title: 'Підлоги з мармуру',
        image: new URL('/img/products/categories/floor.jpg', import.meta.url)
          .href,
        description: 'Підлоги з натурульного мармуру',
      },
      {
        id: 'floors-granite',
        title: 'Підлоги з граніту',
        image: new URL('/img/products/categories/floor.jpg', import.meta.url)
          .href,
        description: 'Підлоги з граніту',
      },
    ],
  },
  bathrooms: {
    id: 'bathrooms',
    title: 'Ванна кімната',
    image: new URL('../img/products/categories/bathroom.jpg', import.meta.url)
      .href,
    description: 'Ванна кімната з натурального каменю',
    items: [
      {
        id: 'bathrooms-1',
        title: 'Ванна кімната',
        image: new URL(
          '../img/products/categories/bathroom.jpg',
          import.meta.url
        ).href,
        description: 'Ванна кімната',
      },
    ],
  },
  tiles: {
    id: 'tiles',
    title: 'Плитка',
    image: new URL('../img/products/categories/tiles.jpg', import.meta.url)
      .href,
    description: 'Плитка з натурального каменю',
    items: [
      {
        id: 'tiles-marble',
        title: 'Плитка з мармуру',
        image: new URL('../img/products/categories/tiles.jpg', import.meta.url)
          .href,
        description: 'Плитка з мармуру',
      },
      {
        id: 'tiles-granite',
        title: 'Плитка з граніту',
        image: new URL('../img/products/categories/tiles.jpg', import.meta.url)
          .href,
        description: 'Плитка з граніту',
      },
    ],
  },
  monuments: {
    id: 'monuments',
    title: "Пам'ятники",
    image: new URL('../img/products/categories/monuments.jpg', import.meta.url)
      .href,
    description: "Пам'ятники з натурального каменю",
    items: [
      {
        id: 'monuments-1',
        title: "Одинарні пам'ятники",
        image: new URL(
          '../img/products/categories/monuments.jpg',
          import.meta.url
        ).href,
        description: "Одинарні пам'ятники з натурального каменю",
      },
      {
        id: 'monuments-2',
        title: "Подвійні пам'ятники",
        image: new URL(
          '../img/products/categories/monuments.jpg',
          import.meta.url
        ).href,
        description: "Подвійні пам'ятники з натурального каменю",
      },
      {
        id: 'monuments-3',
        title: 'Меморіальні комплекси',
        image: new URL(
          '../img/products/categories/monuments.jpg',
          import.meta.url
        ).href,
        description: 'Меморіальні комплекси з натурального каменю',
      },
      {
        id: 'monuments-4',
        title: "Фотопортрети на пам'ятники",
        image: new URL(
          '../img/products/categories/monuments.jpg',
          import.meta.url
        ).href,
        description: "Фотопортрети на пам'ятники з натурального каменю",
      },
    ],
  },
  paving: {
    id: 'paving',
    title: 'Бруківка',
    image: new URL('../img/products/categories/paving.jpg', import.meta.url)
      .href,
    description: 'Бруківка з натурального каменю',
    items: [
      {
        id: 'paving-1',
        title: 'Бруківка пиляна',
        image: new URL('../img/products/categories/paving.jpg', import.meta.url)
          .href,
        description: 'Бруківка пиляна',
      },
      {
        id: 'paving-2',
        title: 'Бруківка пиляно-колота',
        image: new URL('../img/products/categories/paving.jpg', import.meta.url)
          .href,
        description: 'Бруківка пиляно-колота',
      },
      {
        id: 'paving-3',
        title: 'Бруківка колота',
        image: new URL('../img/products/categories/paving.jpg', import.meta.url)
          .href,
        description: 'Бруківка колота',
      },
      {
        id: 'paving-3',
        title: 'Бруківка галтована',
        image: new URL('../img/products/categories/paving.jpg', import.meta.url)
          .href,
        description: 'Бруківка галтована',
      },
    ],
  },
  slabs: {
    id: 'slabs',
    title: 'Слеби',
    image: new URL('../img/products/categories/slabs.jpg', import.meta.url)
      .href,
    description: 'Слеби з натурального каменю',
    items: [
      {
        id: 'slabs-marble',
        title: 'Слеби з мармуру',
        image: new URL('../img/products/categories/slabs.jpg', import.meta.url)
          .href,
        description: 'Слеби з натурального мармуру',
      },
      {
        id: 'slabs-granite',
        title: 'Слеби з граніту',
        image: new URL('../img/products/categories/slabs.jpg', import.meta.url)
          .href,
        description: 'Слеби з граніту',
      },
      {
        id: 'slabs-onyx',
        title: 'Слеби з оніксу',
        image: new URL('../img/products/categories/slabs.jpg', import.meta.url)
          .href,
        description: 'Слеби з оніксу',
      },
      {
        id: 'slabs-travertine',
        title: 'Слеби з травертину',
        image: new URL('../img/products/categories/slabs.jpg', import.meta.url)
          .href,
        description: 'Слеби з травертину',
      },
    ],
  },
  rosettes: {
    id: 'rosettes',
    title: 'Розетки пано',
    image: new URL('../img/products/categories/rosettes.jpeg', import.meta.url)
      .href,
    description: 'Розетки пано з натурального каменю',
    items: [
      {
        id: 'rosettes-1',
        title: 'Розетки пано',
        image: new URL(
          '../img/products/categories/rosettes.jpeg',
          import.meta.url
        ).href,
        description: 'Розетки пано',
      },
    ],
  },
  entrances: {
    id: 'entrances',
    title: 'Вхідні групи',
    image: new URL('../img/products/categories/entrances.jpg', import.meta.url)
      .href,
    description: 'Вхідні групи з натурального каменю',
    items: [
      {
        id: 'entrances-1',
        title: 'Вхідні групи',
        image: new URL(
          '../img/products/categories/entrances.jpg',
          import.meta.url
        ).href,
        description: 'Вхідні групи',
      },
    ],
  },
  church: {
    id: 'church',
    title: 'Церковні роботи',
    image: new URL('../img/products/categories/church.jpg', import.meta.url)
      .href,
    description: 'Церковні роботи з натурального каменю',
    items: [
      {
        id: 'church-1',
        title: 'Церковні роботи',
        image: new URL('../img/products/categories/church.jpg', import.meta.url)
          .href,
        description: 'Церковні роботи',
      },
    ],
  },
};
