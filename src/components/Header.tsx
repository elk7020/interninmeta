import { useCart } from '../context/CartContext'
import { IoCartOutline } from 'react-icons/io5'

interface HeaderProps {
  onCartClick: () => void
}

export function Header({ onCartClick }: HeaderProps) {
  const { cartItemsCount } = useCart()

  return (
    <header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10'>
      <div className='max-w-md mx-auto px-4 py-3 flex justify-between items-center'>
        <h1 className='text-lg font-semibold text-gray-900'>상품 목록</h1>

        <button
          onClick={onCartClick}
          className='relative cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors'
        >
          <IoCartOutline className='w-6 h-6 text-gray-700' />
          {cartItemsCount > 0 && <div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>{cartItemsCount}</div>}
        </button>
      </div>
    </header>
  )
}
