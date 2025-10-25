"use client";
import { createContext, useContext, useReducer, type ReactNode } from "react";

// Tipos para el producto y carrito
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };

interface CartContextType extends CartState {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const INITIAL_STATE = {
  items: [],
  total: 0,
  itemCount: 0,
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Reducer para manejar las acciones del carrito
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItems = state.items.find(
        (item) => item.id === action.payload.id
      );

      /* const arrayNuevo1 = [1, 2, 3, 4].map((element) => element + 1);
      const arrayNuevo2 = [1, 2, 3, 4].map((element) => {return element + 1});  */
      // [2,3,4,5]

      if (existingItems) {
        // [{id: 20, quantity: 1}] => [{id: 20, quantity: 2}]
        const updateItem = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        // useLocalStorage

        return {
          ...state,
          items: updateItem,
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );

      if (!itemToRemove) return state;

      const updateItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        items: updateItems,
        total: state.total - itemToRemove.price * itemToRemove.quantity,
        itemCount: updateItems.length,
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_FROM_CART", payload: id });
      }

      const item = state.items.find((item) => item.id === id);
      if (!item) return state;

      //quantity, item.quantity
      //5 - 3 = 2
      //3 - 5 = -2
      const quantityDiff = quantity - item.quantity;
      const updateItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );

      return {
        ...state,
        items: updateItems,
        total: state.total + item.price * quantityDiff,
        itemCount: state.itemCount + quantityDiff,
      };
    }

    case "CLEAR_CART":
      return INITIAL_STATE;

    default:
      return state;
  }
}

// Provider del contexto

export function CartProvider({ children }: { children: ReactNode }) {
  // useLocalStorage Get
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        // Methods
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
