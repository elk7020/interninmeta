import { useState } from 'react'
import { useCard } from '../context/CardContext'
import type { Card } from '../types/Card'

interface AddCardPageProps {
  onBackClick: () => void
  onCardAdded: () => void
}

export function AddCardPage({ onBackClick, onCardAdded }: AddCardPageProps) {
  const { addCard } = useCard()
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardType: 'visa' as Card['cardType'],
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join('-')
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '')
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }
    return v
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.cardName && formData.cardNumber && formData.expiryDate && formData.cvv) {
      addCard({
        cardName: formData.cardName,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        cardType: formData.cardType,
      })
      onCardAdded()
    }
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
        <h1 className='text-lg font-semibold'>카드 추가</h1>
      </div>

      {/* 카드 프리뷰 */}
      <div className='p-4'>
        <div className='bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-lg mb-6'>
          <div className='flex justify-between items-start mb-8'>
            <div className='w-12 h-8 bg-yellow-400 rounded'></div>
            <div className='text-sm opacity-80'>{formData.cardType.toUpperCase()}</div>
          </div>

          <div className='mb-4'>
            <div className='text-lg font-mono tracking-widest'>{formData.cardNumber || '0000-0000-0000-0000'}</div>
          </div>

          <div className='flex justify-between items-end'>
            <div>
              <div className='text-xs opacity-60 mb-1'>NAME</div>
              <div className='text-sm font-medium'>{formData.cardName || 'CARD HOLDER'}</div>
            </div>
            <div>
              <div className='text-xs opacity-60 mb-1'>MM/YY</div>
              <div className='text-sm font-medium'>{formData.expiryDate || 'MM/YY'}</div>
            </div>
          </div>
        </div>

        {/* 입력 폼 */}
        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>카드명</label>
            <input
              type='text'
              value={formData.cardName}
              onChange={(e) => handleInputChange('cardName', e.target.value)}
              placeholder='카드명을 입력하세요'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>카드번호</label>
            <input
              type='text'
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
              placeholder='0000-0000-0000-0000'
              maxLength={19}
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono'
            />
          </div>

          <div className='flex space-x-4'>
            <div className='flex-1'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>유효기간</label>
              <input
                type='text'
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                placeholder='MM/YY'
                maxLength={5}
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono'
              />
            </div>
            <div className='flex-1'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>CVV</label>
              <input
                type='text'
                value={formData.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                placeholder='123'
                maxLength={4}
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>카드 타입</label>
            <select
              value={formData.cardType}
              onChange={(e) => handleInputChange('cardType', e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            >
              <option value='visa'>VISA</option>
              <option value='mastercard'>MasterCard</option>
              <option value='amex'>American Express</option>
            </select>
          </div>

          <button
            type='submit'
            className='w-full bg-black text-white py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors cursor-pointer'
          >
            카드 등록
          </button>
        </form>
      </div>
    </div>
  )
}
