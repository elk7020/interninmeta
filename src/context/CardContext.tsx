import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Card } from '../types/Card'

interface CardContextType {
  cards: Card[]
  addCard: (card: Omit<Card, 'id'>) => void
  removeCard: (cardId: number) => void
  setDefaultCard: (cardId: number) => void
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export function CardProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([

  ])

  const addCard = (newCard: Omit<Card, 'id'>) => {
    const id = Math.max(...cards.map((c) => c.id), 0) + 1
    setCards((prev) => [...prev, { ...newCard, id }])
  }

  const removeCard = (cardId: number) => {
    setCards((prev) => prev.filter((card) => card.id !== cardId))
  }

  const setDefaultCard = (cardId: number) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        isDefault: card.id === cardId,
      }))
    )
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        addCard,
        removeCard,
        setDefaultCard,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export function useCard() {
  const context = useContext(CardContext)
  if (context === undefined) {
    throw new Error('useCard must be used within a CardProvider')
  }
  return context
}
