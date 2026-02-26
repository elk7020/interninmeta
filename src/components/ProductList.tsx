import { ProductCard } from './ProductCard'
import { mockProducts } from '../data/mockProducts'

interface ProductListProps {
  onPurchase: () => void
}

export function ProductList({ onPurchase }: ProductListProps) {
  return (
    <div className='max-w-md mx-auto px-4 py-4'>
      <div className='text-lg font-semibold text-gray-900 mb-2'>신발 상품 목록</div>
      <div className='text-sm font-semibold text-gray-900 mb-2'>현재 {mockProducts.length}개의 상품이 있습니다.</div>
      <div className='grid grid-cols-2 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPurchase={onPurchase}
          />
        ))}
      </div>
    </div>
  )
}
