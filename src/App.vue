<script setup>
// import { useMainStore } from './stores/useMainStore'
// import { storeToRefs } from 'pinia'
// import { useDeviceDetection } from './composables/useDeviceDetection'


// const mainStore = useMainStore()
// const { isInitialLoading, isLoading } = storeToRefs(mainStore)
// const { isMobile, isTablet, isDesktop, smallerThanTablet, smallerThanDesktop, isPortrait, isLandscape, isTouch } = useDeviceDetection()

import { useLenis } from './composables/useLenis'
import gsap from 'gsap'
import { useRouter } from 'vue-router'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { nextTick, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const { lenis, initLenis, destroyLenis } = useLenis()

onMounted(() => {
    initLenis()

    router.beforeEach((to, from, next) => {
    // Kill existing ScrollTriggers before route change
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        next()
    })

    router.afterEach(() => {
    // Scroll to top AFTER the route has changed
        if (lenis.value) {
            lenis.value.scrollTo(0, { 
                immediate: true  // Use "immediate" instead of "instant"
            })
        }
    
        // Refresh ScrollTrigger after DOM updates
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 50) // Small delay to ensure DOM is ready
    })
})
</script>

<template>
    <main>
        <router-view />
    </main>
</template>
