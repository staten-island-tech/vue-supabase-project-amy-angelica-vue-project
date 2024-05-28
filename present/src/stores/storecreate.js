import { defineStore } from 'pinia'
export const useStore = defineStore('StoreCreated',{
    state: () => {
        return {
            restaurant: null,
            restaurant_id: null,
            rating: null,
        }
    }
})