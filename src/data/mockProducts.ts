import type { Product } from '../types/Product'

import AIRFORCE_WHITE from '../assets/images/AIRFORCE_WHITE.avif'
import AIRFORCE_ORANGE from '../assets/images/AIRFORCE_ORANGE.avif'
import NIKEVOMER18 from '../assets/images/NIKEVOMER18.avif'
import OFFCOURT from '../assets/images/OFFCOURT.avif'
import PHANTOM6 from '../assets/images/PHANTOM6.avif'
import ROMALEOS_4 from '../assets/images/ROMALEOS_4.avif'

export const mockProducts: Product[] = [
  {
    id: 1,
    brandName: '나이키',
    productName: '에어포스 1 로우 화이트',
    price: 129000,
    image: AIRFORCE_WHITE,
  },
  {
    id: 2,
    brandName: '나이키',
    productName: '팬텀6 로우 엘리트',
    price: 319000,
    image: PHANTOM6,
  },
  {
    id: 3,
    brandName: '나이키',
    productName: '보메로 18',
    price: 179000,
    image: NIKEVOMER18,
  },
  {
    id: 4,
    brandName: '나이키',
    productName: '에어포스 1 로우 오렌지',
    price: 129000,
    image: AIRFORCE_ORANGE,
  },
  {
    id: 5,
    brandName: '나이키',
    productName: '오프코트 어저스트',
    price: 59000,
    image: OFFCOURT,
  },
  {
    id: 6,
    brandName: '나이키',
    productName: '로말레오 4 SE',
    price: 349000,
    image: ROMALEOS_4,
  },
]
