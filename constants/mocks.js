const categories = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['products', 'inspirations'],
    counts: 147,
    image: require('../assets/icons/plants.png'),
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['products', 'shop'],
    counts: 16,
    image: require('../assets/icons/seeds.png'),
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['products', 'inspirations'],
    counts: 68,
    image: require('../assets/icons/flowers.png'),
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['products', 'shop'],
    counts: 17,
    image: require('../assets/icons/sprayers.png'),
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['products', 'inspirations'],
    counts: 47,
    image: require('../assets/icons/pots.png'),
  },
  {
    id: 'fertilizer',
    name: 'Fertilizer',
    tags: ['products', 'shop'],
    counts: 147,
    image: require('../assets/icons/fertilizers.png'),
  },
];
const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrives In Your Bedroom!',
    description:
      'Aliquip fugiat laboris culpa elit consequat. Minim irure adipisicing do non. Commodo proident sit aliquip officia enim sunt fugiat amet laboris aliquip cupidatat occaecat. Labore exercitation do qui cupidatat esse duis exercitation consectetur ex nostrud ad pariatur in. Ut anim Lorem adipisicing magna nostrud. Et excepteur fugiat quis magna sit.',
    tags: ['Interior', '27 m™', 'Ideas'],
    gallary: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // some more pictures
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ],
  },
];
const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  // some more pictures
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
];

const profile = {
  username: 'charles_ryu',
  location: 'California',
  email: 'conctact@charlesryu.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notification: true,
  newsletter: false,
};

export {
  categories, products, profile, explore,
};
