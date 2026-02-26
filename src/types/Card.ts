export interface Card {
  id: number
  cardName: string
  cardNumber: string
  expiryDate: string
  cvv: string
  cardType: 'visa' | 'mastercard' 
  isDefault?: boolean
}
