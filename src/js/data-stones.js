// Дані для каталогу каменю
export const stoneTypes = {
  marble: {
    id: 'marble',
    title: 'Мармур',
    image: new URL('../img/products/stone/marble.jpg', import.meta.url).href,
    description:
      'Мармур - це елегантний натуральний камінь, що формується протягом мільйонів років під впливом високих температур і тиску.',
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
        hit: false,
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
        hit: false,
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
        hit: false,
      },
    ],
  },
  granite: {
    id: 'granite',
    title: 'Граніт',
    image: new URL('../img/products/stone/granite.jpg', import.meta.url).href,
    description:
      'Граніт - це природний камінь, який має глибокий та насичений зовнішній вигляд. Він має різні види та кольори, які відповідають різним природним властивостям та етапам розвитку.',
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
        hit: false,
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
        hit: false,
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
        hit: false,
      },
    ],
  },
  'granite-ukraine': {
    id: 'granite-ukraine',
    title: 'Граніт України',
    image: new URL('../img/products/stone/granite-ukraine.jpg', import.meta.url)
      .href,
    description:
      'Граніт України - це природний камінь, який має різні види та кольори, які відповідають різним природним властивостям та етапам розвитку.',
    items: [
      {
        id: 'granite-ukraine-tanskyi',
        title: 'Граніт "Танський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-tanskyi.jpg',
          import.meta.url
        ).href,
        description:
          'Танський граніт видобувається в селищі Танське Черкаської області. Цей камінь має дрібнозернисту структуру та приємний сірий колір.',
        characteristics: {
          origin: 'Україна',
          color: 'сірий із зеленувато-блакитним відтінком',
          thickness: '20-50 мм',
          format: 'Квадратний',
          price: 'від 1200 грн/м²',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-pivnichni_osnyky',
        title: 'Граніт "Північні осники"',
        image: new URL(
          '../img/products/stone/granite-ukraine-pivnichni_osnyky.jpg',
          import.meta.url
        ).href,
        description:
          'інформація про цей граніт обмежена',
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'немає даних',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-kapustyanskiy',
        title: 'Граніт "Капустинський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-kapustyanskiy.jpg',
          import.meta.url
        ).href,
        description:
          "Видобувається на Капустянському гранітному кар'єрі, відомий відмінними фізико-механічними властивостями та привабливим зовнішнім виглядом.",
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'залежить від виробу та обробки',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-pokostovka',
        title: 'Граніт "Покостовка"',
        image: new URL(
          '../img/products/stone/granite-ukraine-pokostovka.jpg',
          import.meta.url
        ).href,
        description:
          'Видобувається в селі Покостівка Житомирської області, відомий високою міцністю та естетичними якостями.',
        characteristics: {
          origin: 'Україна',
          color: 'сірий',
          thickness: '20-30 мм',
          format: 'Квадратний',
          price: 'від 1500 грн/м²',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-didkovychy-kornynskyi',
        title: 'Граніт "Дідковичі"',
        image: new URL(
          '../img/products/stone/granite-ukraine-didkovychy.jpg',
          import.meta.url
        ).href,
        description:
          'інформація про цей граніт обмежена',
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'немає даних',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-kornynskyi',
        title: 'Граніт "Корнинський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-kornynskyi.jpg',
          import.meta.url
        ).href,
        description:
          'інформація про цей граніт обмежена.',
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'немає даних',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-vasylivskyi',
        title: 'Граніт "Василівський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-vasylivskyi.jpg',
          import.meta.url
        ).href,
        description:
          'інформація про цей граніт обмежена.',
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'немає даних',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-chelnovskyi',
        title: 'Граніт "Челновський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-chelnovskyi.jpg',
          import.meta.url
        ).href,
        description:
          'інформація про цей граніт обмежена.',
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'немає даних',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-omelyanovskyi',
        title: 'Граніт "Омеляновський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-omelyanovskyi.jpg',
          import.meta.url
        ).href,
        description:
          'інформація про цей граніт обмежена.',
        characteristics: {
          origin: 'Україна',
          color: 'немає даних',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'немає даних',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-tokivskyi',
        title: 'Граніт "Токівський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-tokivskyi.jpg',
          import.meta.url
        ).href,
        description:
          'Видобувається в селі Ток Дніпропетровської області, має червоно-коричневий колір з темними вкрапленнями та дрібнозернисту структуру.',
        characteristics: {
          origin: 'Україна',
          color: 'червоний з коричневим відтінком та темними вкрапленнями',
          thickness: 'немає даних',
          format: 'Квадратний',
          price: 'залежить від виробу та обробки',
        },
        hit: false,
      },
      {
        id: 'granite-ukraine-zhadivskyi',
        title: 'Граніт "Жадівський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-zhadivskyi.jpg',
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
      {
        id: 'granite-ukraine-leznyky',
        title: 'Граніт "Лезники"',
        image: new URL(
          '../img/products/stone/granite-ukraine-leznyky.jpg',
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
      {
        id: 'granite-ukraine-novoselivka',
        title: 'Граніт "Новоселівка"',
        image: new URL(
          '../img/products/stone/granite-ukraine-novoselivka.jpg',
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
      {
        id: 'granite-ukraine-starobabanskyi',
        title: 'Граніт "Старобабанський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-starobabanskyi.jpg',
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
      {
        id: 'granite-ukraine-bukynskyi',
        title: 'Граніт "Букинський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-bukynskyi.jpg',
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
      {
        id: 'granite-ukraine-krupskyi',
        title: 'Граніт "Крупський"',
        image: new URL(
          '../img/products/stone/granite-ukraine-krupskyi.jpg',
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
      'Онікс - це натуральний напівдорогоцінний камінь, який з давніх-давен відомий своєю надзвичайною красою й розмаїттям кольорів.',
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
    title: 'Травертин',
    image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
      .href,
    description:
      'Травертин, або вапняний туф, це гірська осадова порода, яка займає проміжне положення між вапняком і мармуром.',
    items: [
      {
        id: 'travertine-1',
        title: 'Травертин 1',
        image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
          .href,
        description:
          'Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.',
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
        title: 'Травертин 2',
        image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
          .href,
        description:
          'Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.',
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
        title: 'Травертин 3',
        image: new URL('../img/products/stone/travertine.jpg', import.meta.url)
          .href,
        description:
          'Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.',
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
      'Камінь кварцит є одним із найтвердіших природних каменів. Завдяки такій винятковій твердості кварцит дуже стійкий до подряпин і зношування.',
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
  slabs: {
    id: 'slabs',
    title: 'Слеби',
    image: new URL('../img/products/stone/slabs.jpg', import.meta.url).href,
    description:
      'Слеби.',
    items: [
      {
        id: 'slabs-1',
        title: 'Слеби 1',
        image: new URL('../img/products/stone/slabs-1.jpg', import.meta.url)
          .href,
        description:
          'Слеби.',
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
        id: 'slabs-2',
        title: 'Слеби 2',
        image: new URL('../img/products/stone/slabs-2.jpg', import.meta.url)
          .href,
        description:
          'Слеби.',
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
        id: 'slabs-3',
        title: 'Слеби 3',
        image: new URL('../img/products/stone/slabs-3.jpg', import.meta.url)
          .href,
        description:
          'Слеби.',
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
        id: 'slabs-4',
        title: 'Слеби 4',
        image: new URL('../img/products/stone/slabs-4.jpg', import.meta.url)
          .href,
        description:
          'Слеби.',
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
};
