import { useCard } from '../context/CardContext'

interface MyCardsPageProps {
  onBackClick: () => void
  onAddCardClick: () => void
}

export function MyCardsPage({ onBackClick, onAddCardClick }: MyCardsPageProps) {
  const { cards } = useCard()

  const maskCardNumber = (cardNumber: string) => {
    const parts = cardNumber.split('-')
    if (parts.length === 4) {
      return `${parts[0]}-${parts[1]}-****-****`
    }
    return cardNumber
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
        <h1 className='text-lg font-semibold'>보유카드</h1>
      </div>

      {/* 카드 목록 */}
      <div className='p-6 mx-4 space-y-6'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='relative bg-gray-900 text-white rounded-2xl p-6 shadow-lg'
          >
            {/* 카드 타입 아이콘 */}
            <div className='flex justify-between items-start mb-8'>
              <div className='w-12 h-8 bg-yellow-400 rounded'></div>
              <div className='text-sm opacity-80'>{card.cardType.toUpperCase()}</div>
            </div>

            {/* 카드 번호 */}
            <div className='mb-4'>
              <div className='text-lg font-mono tracking-widest'>{maskCardNumber(card.cardNumber)}</div>
            </div>

            {/* 카드 정보 */}
            <div className='flex justify-between items-end'>
              <div>
                <div className='text-xs opacity-60 mb-1'>NAME</div>
                <div className='text-sm font-medium'>{card.cardName}</div>
              </div>
              <div>
                <div className='text-xs opacity-60 mb-1'>MM/YY</div>
                <div className='text-sm font-medium'>{card.expiryDate}</div>
              </div>
            </div>
          </div>
        ))}

        {/* 카드 추가 버튼 */}
        <div
          onClick={onAddCardClick}
          className='border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors'
        >
          <div className='w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center mb-3'>
            <svg
              className='w-6 h-6 text-gray-400'
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
          </div>
          <div className='text-gray-500 font-medium'>카드 추가</div>
        </div>
      </div>
    </div>
  )
}
