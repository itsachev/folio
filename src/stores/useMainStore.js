import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        isInitialLoading: true,
        isLoading: false,
    }),

    actions: {
        setIsInitialLoading(payload) {
            this.isInitialLoading = payload
        },
        setIsLoading(payload) {
            this.isLoading = payload
        },
    }
})
