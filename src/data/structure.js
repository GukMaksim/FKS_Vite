export const stoneTypes = {
  marble: {
    uk: 'Мармур',
    ru: 'Мрамор',
    description: {
      uk: 'Елегантний натуральний камінь з унікальним візерунком',
      ru: 'Элегантный натуральный камень с уникальным узором'
    },
    varieties: ['Carrara', 'Calacatta', 'Emperador', 'Crema Marfil']
  },
  granite: {
    uk: 'Граніт',
    ru: 'Гранит',
    description: {
      uk: 'Міцний та довговічний натуральний камінь',
      ru: 'Прочный и долговечный натуральный камень'
    },
    varieties: ['Absolute Black', 'Steel Grey', 'Kashmir White']
  },
  onyx: {
    uk: 'Онікс',
    ru: 'Оникс',
    description: {
      uk: 'Напівпрозорий камінь з неповторним малюнком',
      ru: 'Полупрозрачный камень с неповторимым рисунком'
    },
    varieties: ['Honey', 'Green', 'White']
  },
  travertine: {
    uk: 'Травертин',
    ru: 'Травертин',
    description: {
      uk: 'Пористий камінь з природною текстурою',
      ru: 'Пористый камень с природной текстурой'
    },
    varieties: ['Classic', 'Noce', 'Silver']
  }
};

export const productTypes = {
  fireplaces: {
    uk: 'Каміни',
    ru: 'Камины',
    description: {
      uk: 'Елегантні каміни з натурального каменю',
      ru: 'Элегантные камины из натурального камня'
    },
    compatibleStones: ['marble', 'granite', 'onyx']
  },
  facades: {
    uk: 'Фасади',
    ru: 'Фасады',
    description: {
      uk: 'Фасадні рішення з природного каменю',
      ru: 'Фасадные решения из природного камня'
    },
    compatibleStones: ['granite', 'travertine', 'marble']
  },
  countertops: {
    uk: 'Стільниці',
    ru: 'Столешницы',
    description: {
      uk: 'Кухонні та ванні стільниці з каменю',
      ru: 'Кухонные и ванные столешницы из камня'
    },
    compatibleStones: ['granite', 'marble', 'onyx']
  },
  stairs: {
    uk: 'Сходи',
    ru: 'Лестницы',
    description: {
      uk: 'Елегантні сходи з натурального каменю',
      ru: 'Элегантные лестницы из натурального камня'
    },
    compatibleStones: ['granite', 'marble', 'travertine']
  }
};