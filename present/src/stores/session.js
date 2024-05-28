import { defineStore } from 'pinia'

export const storeSession = defineStore({
  id: 'userSession',
  state: () => ({
    session: null
  })
})