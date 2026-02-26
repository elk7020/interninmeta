import type { Product } from '../types/Product'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
  onPurchase: () => void
}

export function ProductCard({ product, onPurchase }: ProductCardProps) {
  const { addToCart, removeFromCart, isInCart } = useCart()
  const inCart = isInCart(product.id)

  const handleToggleCart = () => {
    if (inCart) {
      removeFromCart(product.id)
    } else {
      addToCart(product)
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR')
  }

  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
      <div className='aspect-square bg-gray-100 relative overflow-hidden'>
        <img
          src={product.image}
          alt={product.productName}
          className='w-full h-full object-cover object-center'
          onError={(e) => {
            // 이미지 로드 실패 시 대체 이미지
            e.currentTarget.src = 'https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image'
          }}
        />
      </div>

      {/* 상품 정보 */}
      <div className='p-3 space-y-2'>
        <div className='text-xs text-gray-500 font-medium'>{product.brandName}</div>
        <div className='text-sm text-gray-900 font-medium leading-tight line-clamp-2'>{product.productName}</div>
        <div className='text-sm font-bold text-gray-900'>{formatPrice(product.price)}원</div>

        {/* 버튼들 */}
        <div className='flex space-x-2'>
          <button
            onClick={handleToggleCart}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded transition-colors cursor-pointer ${
              inCart ? 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700' : 'bg-black text-white hover:bg-gray-800 active:bg-gray-900'
            }`}
          >
            {inCart ? '빼기' : '담기'}
          </button>
          <button
            onClick={onPurchase}
            className='flex-1 py-2 px-3 text-xs font-medium rounded transition-colors cursor-pointer bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
          >
            구매
          </button>
        </div>
      </div>
    </div>
  )
}
