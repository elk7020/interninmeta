import { useCart } from '../context/CartContext'

interface CartPageProps {
  onBackClick: () => void
  onPurchase: () => void
}

export function CartPage({ onBackClick, onPurchase }: CartPageProps) {
  const { cartItems, updateQuantity, totalPrice, deliveryFee, finalTotalPrice } = useCart()

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR')
  }

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  return (
    <div className='max-w-md mx-auto bg-white min-h-screen'>
      {/* 헤더 */}
      <div className='bg-black text-white p-4 flex items-center'>
        <button
          onClick={onBackClick}
          className='mr-4 cursor-pointer hover:bg-gray-700 p-1 rounded transition-colors'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
      </div>

      {/* 장바구니 타이틀 */}
      <div className='p-4'>
        <h1 className='text-xl font-bold mb-2'>장바구니</h1>
        <p className='text-gray-600 text-sm'>원하는 상품을 담아보세요.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className='px-4 py-8 text-center'>
          <div className='text-gray-500 text-lg'>장바구니가 비어있습니다.</div>
        </div>
      ) : (
        <>
          {/* 상품 목록 */}
          <div className='px-4 space-y-4'>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className='flex items-center space-x-4 py-4 border-b border-gray-100'
              >
                {/* 상품 이미지 */}
                <div className='w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0'>
                  <img
                    src={item.image}
                    alt={item.productName}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/64x64/f3f4f6/9ca3af?text=No+Image'
                    }}
                  />
                </div>

                {/* 상품 정보 */}
                <div className='flex-1 min-w-0'>
                  <div className='text-sm font-medium text-gray-900 truncate'>{item.brandName}</div>
                  <div className='text-lg font-bold text-gray-900'>{formatPrice(item.price)}원</div>
                </div>

                {/* 수량 조절 */}
                <div className='flex items-center space-x-2'>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20 12H4'
                      />
                    </svg>
                  </button>
                  <span className='w-8 text-center font-medium'>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 가격 정보 */}
          <div className='p-4 mt-6 space-y-3'>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600'>상품 금액</span>
              <span className='font-medium'>{formatPrice(totalPrice)}원</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600'>배송비</span>
              <span className='font-medium'>{formatPrice(deliveryFee)}원</span>
            </div>
            <div className='border-t pt-3'>
              <div className='flex justify-between items-center'>
                <span className='font-bold text-lg'>총 금액</span>
                <span className='font-bold text-lg text-blue-600'>{formatPrice(finalTotalPrice)}원</span>
              </div>
            </div>
          </div>

          {/* 결제 버튼 */}
          <div className='p-4 mt-6'>
            <button
              onClick={onPurchase}
              className='w-full bg-gray-800 text-white py-4 rounded-lg font-medium text-lg hover:bg-gray-900 transition-colors cursor-pointer'
            >
              결제하기
            </button>
          </div>
        </>
      )}
    </div>
  )
}
