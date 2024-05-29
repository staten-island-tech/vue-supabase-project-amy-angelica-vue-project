import { createApp } from 'vue'
import { createPinia, defineStore } from 'pinia'
import { App } from 'vue'
const pinia = createPinia()
const app = createApp(APP)
app.use(pinia)
app.mount('#app')
export const useStore = defineStore('StoreCreated',{
    state: () => {
        return {
            restaurant: null,
            restaurant_id: null,
            rating: null,
        }
    }
})