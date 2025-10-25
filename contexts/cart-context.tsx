"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

// Tipos para el producto y carrito
export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: "ADD_TO_CART"; }
  | { type: "REMOVE_FROM_CART";  }
  | { type: "UPDATE_QUANTITY";  }
  | { type: "CLEAR_CART" }

interface CartContextType extends CartState {

}

const CartContext = createContext<CartContextType | undefined>(undefined)

// Reducer para manejar las acciones del carrito
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
     
    }

    case "REMOVE_FROM_CART": {
     
    }

    case "UPDATE_QUANTITY": {
   
    }

    case "CLEAR_CART":


    default:
      return state
  }
}

// Provider del contexto
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })


  return (
    <CartContext.Provider
      value={{
        ...state,
      // Methods
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
