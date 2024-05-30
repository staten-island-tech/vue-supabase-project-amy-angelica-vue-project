import { defineStore } from 'pinia'

export const usethisStore = defineStore('StoreCreated',{
    state: () => {
        return {
            restaurant: null,
            restaurant_id: null,
            rating: null,
        }
    }
})