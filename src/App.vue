<script setup>
// import { useMainStore } from './stores/useMainStore'
// import { storeToRefs } from 'pinia'
// import { useDeviceDetection } from './composables/useDeviceDetection'


// const mainStore = useMainStore()
// const { isInitialLoading, isLoading } = storeToRefs(mainStore)
// const { isMobile, isTablet, isDesktop, smallerThanTablet, smallerThanDesktop, isPortrait, isLandscape, isTouch } = useDeviceDetection()
import { useLenisRouter } from '@/composables/useLenisRouter'
import { onMounted, onUnmounted } from 'vue'

const { initLenis, destroyLenis, setupRouterIntegration } = useLenisRouter()

onMounted(() => {
    initLenis()
    setupRouterIntegration()
})
onUnmounted(() => {
    destroyLenis()
})
</script>

<template>
    <main>
        <router-view />
    </main>
</template>
