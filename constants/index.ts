export const navLinks = [
  {
    labelJa: 'ホーム',
    labelEn: 'Home',
    route: '/',
    icon: '/assets/icons/home.svg',
  },
  {
    labelJa: '画像の復元',
    labelEn: 'Image Restore',
    route: '/transformations/add/restore',
    icon: '/assets/icons/image.svg',
  },
  {
    labelJa: '生成塗りつぶし',
    labelEn: 'Generative Fill',
    route: '/transformations/add/fill',
    icon: '/assets/icons/stars.svg',
  },
  {
    labelJa: 'オブジェクトの削除',
    labelEn: 'Object Remove',
    route: '/transformations/add/remove',
    icon: '/assets/icons/scan.svg',
  },
  {
    labelJa: 'オブジェクトの再色',
    labelEn: 'Object Recolor',
    route: '/transformations/add/recolor',
    icon: '/assets/icons/filter.svg',
  },
  {
    labelJa: '背景除去',
    labelEn: 'Background Remove',
    route: '/transformations/add/removeBackground',
    icon: '/assets/icons/camera.svg',
  },
  {
    labelJa: 'プロフィール',
    labelEn: 'Profile',
    route: '/profile',
    icon: '/assets/icons/profile.svg',
  },
  {
    labelJa: 'クレジットの購入',
    labelEn: 'Buy Credits',
    route: '/credits',
    icon: '/assets/icons/bag.svg',
  },
];

export const plans = [
  {
    _id: 1,
    nameEn: 'Free',
    nameJa: '無料版',
    icon: '/assets/icons/free-plan.svg',
    price: 0,
    credits: 20,
    inclusions: [
      {
        labelEn: '20 Free Credits',
        labelJa: '20 無料クレジット',
        isIncluded: true,
      },
      {
        labelEn: 'Basic Access to Services',
        labelJa: 'サービスへの基本的なアクセス',
        isIncluded: true,
      },
      {
        labelEn: 'Priority Customer Support',
        labelJa: '優先カスタマーサポート',
        isIncluded: false,
      },
      {
        labelEn: 'Priority Updates',
        labelJa: '優先アップデート',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    nameEn: 'Pro Package',
    nameJa: 'プロパッケージ',
    icon: '/assets/icons/free-plan.svg',
    price: 40,
    credits: 120,
    inclusions: [
      {
        labelEn: '120 Credits',
        labelJa: '120クレジット',
        isIncluded: true,
      },
      {
        labelEn: 'Full Access to Services',
        labelJa: 'サービスへのフルアクセス',
        isIncluded: true,
      },
      {
        labelEn: 'Priority Customer Support',
        labelJa: '優先カスタマーサポート',
        isIncluded: true,
      },
      {
        labelEn: 'Priority Updates',
        labelJa: '優先アップデート',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    nameEn: 'Premium Package',
    nameJa: 'プレミアムパッケージ',
    icon: '/assets/icons/free-plan.svg',
    price: 199,
    credits: 2000,
    inclusions: [
      {
        labelEn: '2000 Credits',
        labelJa: '2000クレジット',
        isIncluded: true,
      },
      {
        labelEn: 'Full Access to Services',
        labelJa: 'サービスへのフルアクセス',
        isIncluded: true,
      },
      {
        labelEn: 'Priority Customer Support',
        labelJa: '優先カスタマーサポート',
        isIncluded: true,
      },
      {
        labelEn: 'Priority Updates',
        labelJa: '優先アップデート',
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: 'restore',
    titleEn: 'Restore Image',
    titleJa: '画像の復元',
    subTitleEn: 'Refine images by removing noise and imperfections',
    subTitleJa: 'ノイズや欠陥の除去による画像の精細化',
    config: { restore: true },
    icon: 'image.svg',
  },
  removeBackground: {
    type: 'removeBackground',
    titleEn: 'Background Remove',
    titleJa: '背景除去',
    subTitleEn: 'Removes the background of the image using AI',
    subTitleJa: 'AIを使って画像の背景を削除',
    config: { removeBackground: true },
    icon: 'camera.svg',
  },
  fill: {
    type: 'fill',
    titleEn: 'Generative Fill',
    titleJa: '生成塗りつぶし',
    subTitleEn: "Enhance an image's dimensions using AI outpainting",
    subTitleJa: 'AIアウトペインティングを使って画像の寸法を強調',
    config: { fillBackground: true },
    icon: 'stars.svg',
  },
  remove: {
    type: 'remove',
    titleEn: 'Object Remove',
    titleJa: 'オブジェクトの削除',
    subTitleEn: 'Identify and eliminate objects from images',
    subTitleJa: '画像からオブジェクトを識別・除去',
    config: {
      remove: { prompt: '', removeShadow: true, multiple: true },
    },
    icon: 'scan.svg',
  },
  recolor: {
    type: 'recolor',
    titleEn: 'Object Recolor',
    titleJa: 'オブジェクトの再色',
    subTitleEn: 'Identify and recolor objects from the image',
    subTitleJa: '画像からオブジェクトを識別し、色を変更',
    config: {
      recolor: { prompt: '', to: '', multiple: true },
    },
    icon: 'filter.svg',
  },
};

export const aspectRatioOptions = {
  '1:1': {
    aspectRatio: '1:1',
    labelEn: 'Square (1:1)',
    labelJa: '正方形（1：1）',
    width: 1000,
    height: 1000,
  },
  '3:4': {
    aspectRatio: '3:4',
    labelEn: 'Standard Portrait (3:4)',
    labelJa: '標準ポートレート (3:4)',
    width: 1000,
    height: 1334,
  },
  '9:16': {
    aspectRatio: '9:16',
    labelEn: 'Phone Portrait (9:16)',
    labelJa: 'スマホのポートレート (9:16)',
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: '',
  aspectRatio: '',
  color: '',
  prompt: '',
  publicId: '',
};

export const creditFee = -1;
