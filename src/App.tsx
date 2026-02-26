import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { CardProvider } from './context/CardContext'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { CartPage } from './components/CartPage'
import { MyCardsPage } from './components/MyCardsPage'
import { AddCardPage } from './components/AddCardPage'

type PageType = 'products' | 'cart' | 'myCards' | 'addCard'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('products')

  const handlePurchase = () => {
    setCurrentPage('myCards')
  }

  return (
    <CartProvider>
      <CardProvider>
        <div className='min-h-screen bg-gray-50'>
          {currentPage === 'products' && (
            <>
              <Header onCartClick={() => setCurrentPage('cart')} />
              <ProductList onPurchase={handlePurchase} />
            </>
          )}
          {currentPage === 'cart' && (
            <CartPage
              onBackClick={() => setCurrentPage('products')}
              onPurchase={handlePurchase}
            />
          )}
          {currentPage === 'myCards' && (
            <MyCardsPage
              onBackClick={() => setCurrentPage('products')}
              onAddCardClick={() => setCurrentPage('addCard')}
            />
          )}
          {currentPage === 'addCard' && (
            <AddCardPage
              onBackClick={() => setCurrentPage('myCards')}
              onCardAdded={() => setCurrentPage('myCards')}
            />
          )}
        </div>
      </CardProvider>
    </CartProvider>
  )
}

export default App
