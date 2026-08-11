import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',

    initialState: {
        items: [],
    },

    reducers: {
        // Add item to cart
        addItem: (state, action) => {
            const existingItem = state.items.find(
                item => item.name === action.payload.name
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        // Remove item from cart
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.name !== action.payload
            );
        },

        // Update item quantity
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const item = state.items.find(
                item => item.name === name
            );

            if (item) {
                item.quantity = quantity;
            }
        },
    },
});

// Export actions
export const {
    addItem,
    removeItem,
    updateQuantity
} = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;