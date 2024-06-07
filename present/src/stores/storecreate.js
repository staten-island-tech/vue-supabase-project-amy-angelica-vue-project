import { defineStore } from 'pinia'

export const usethisStore = defineStore('StoreCreated',{
    state: () => {
        return {
            restaurant: null,
            restaurant_id: 2,
            rating: null,
            upvote: 0
        }
    }
})