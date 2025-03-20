// Дані для каталогу каменю
export const stoneTypes = {
  marble: {
    id: 'marble',
    title: 'Мармур',
    image: new URL('../img/products/stone/marble.jpg', import.meta.url).href,
    description:
      'Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.',
    items: [
      {
        id: 'marble-1',
        title: 'Мармур 1',
        image: new URL('../img/products/stone/marble-1.jpg', import.meta.url)
          .href,
        description:
          'Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: true,
      },
      {
        id: 'marble-2',
        title: 'Мармур 2',
        image: new URL('../img/products/stone/marble-2.jpg', import.meta.url)
          .href,
        description:
          'Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: true,
      },
      {
        id: 'marble-3',
        title: 'Мармур 3',
        image: new URL('../img/products/stone/marble-3.jpg', import.meta.url)
          .href,
        description:
          'Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: true,
      },
    ],
  },
  granite: {
    id: 'granite',
    title: 'Граніт',
    image: new URL('../img/products/stone/granite.jpeg', import.meta.url).href,
    description:
      'Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.',
    items: [
      {
        id: 'granite-baltic-brown',
        title: 'Baltic Brown',
        image: new URL(
          '../img/products/stone/granite-baltic-brown.jpg',
          import.meta.url
        ).href,
        description:
          'Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.',
        characteristics: {
          origin: 'Фінляндія',
          color: 'Коричневий з чорними та сірими вкрапленнями',
          thickness: '20-30 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: true,
      },
      {
        id: 'granite-verde-ubatuba',
        title: 'Verde Ubatuba',
        image: new URL(
          '../img/products/stone/granite-verde-ubatuba.jpeg',
          import.meta.url
        ).href,
        description:
          'Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.',
        characteristics: {
          origin: 'Бразилія',
          color: 'Темно-зелений з дрібними золотистими вкрапленнями',
          thickness: '20-30 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: true,
      },
      {
        id: 'granite-black-galaxy',
        title: 'Black Galaxy',
        image: new URL(
          '../img/products/stone/granite-black-galaxy.jpg',
          import.meta.url
        ).href,
        description:
          'Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.',
        characteristics: {
          origin: 'Індія',
          color: 'Чорний з золотистими та сріблястими вкрапленнями',
          thickness: '20-30 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: true,
      },
    ],
  },
  'granite-ukraine': {
    id: 'granite-ukraine',
    title: 'Граніт України',
    image: new URL('../img/products/stone/granite-ukraine.jpg', import.meta.url)
      .href,
    description:
      'Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.',
    items: [
      {
        id: 'granite-ukraine-labradoryt',
        title: 'Граніт "Лабрадорит"',
        image: new URL(
          '../img/products/stone/granite-ukraine-labradoryt.jpg',
          import.meta.url
        ).href,
        description:
          'Це глибокий чорний граніт із характерними синіми кристалами, що створюють ефект глибини. Використовується для фасадів, пам’ятників, інтер’єрних елементів.',
        characteristics: {
          origin: 'Україна',
          color: 'Чорний з переливами синього',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-kapustyanskiy',
        title: 'Граніт "Капустянський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-kapustyanskiy.jpg',
          import.meta.url
        ).href,
        description:
          'Один із найміцніших і довговічних українських гранітів, має насичений червоний відтінок. Використовується для облицювання будівель, пам’ятників, плитки, сходів.',
        characteristics: {
          origin: 'Україна',
          color: 'Червоний з чорними і сірими вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-sofiivksy',
        title: 'Граніт "Софіївський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-sofiivksy.jpg',
          import.meta.url
        ).href,
        description:
          'Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
    ],
  },
  onyx: {
    id: 'onyx',
    title: 'Онікс',
    image: new URL('../img/products/stone/onyx.jpg', import.meta.url).href,
    description:
      'Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.',
    items: [
      {
        id: 'onyx-1',
        title: 'Онікс 1',
        image: new URL('../img/products/stone/onyx.jpg', import.meta.url).href,
        description:
          'Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'onyx-2',
        title: 'Онікс 2',
        image: new URL('../img/products/stone/onyx.jpg', import.meta.url).href,
        description:
          'Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'onyx-3',
        title: 'Онікс 3',
        image: new URL('../img/products/stone/onyx.jpg', import.meta.url).href,
        description:
          'Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
    ],
  },
  travertine: {
    id: 'travertine',
    title: 'Травертін',
    image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
      .href,
    description:
      'Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.',
    items: [
      {
        id: 'travertine-1',
        title: 'Травертін 1',
        image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
          .href,
        description:
          'Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'travertine-2',
        title: 'Травертін 2',
        image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
          .href,
        description:
          'Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'travertine-3',
        title: 'Травертін 3',
        image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
          .href,
        description:
          'Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
    ],
  },
  quartzite: {
    id: 'quartzite',
    title: 'Кварцит',
    image: new URL('../img/products/stone/quartzite.jpg', import.meta.url).href,
    description:
      'Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.',
    items: [
      {
        id: 'quartzite-1',
        title: 'Кварцит 1',
        image: new URL('../img/products/stone/quartzite.jpg', import.meta.url)
          .href,
        description:
          'Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'quartzite-2',
        title: 'Кварцит 2',
        image: new URL('../img/products/stone/quartzite.jpg', import.meta.url)
          .href,
        description:
          'Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'quartzite-3',
        title: 'Кварцит 3',
        image: new URL('../img/products/stone/quartzite.jpg', import.meta.url)
          .href,
        description:
          'Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.',
        characteristics: {
          origin: 'Україна',
          color: 'Світло-сірий із чорними вкрапленнями',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
    ],
  },
};
