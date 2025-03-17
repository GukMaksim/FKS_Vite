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
};
