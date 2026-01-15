// src/composables/useLenis.js
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
    const lenis = ref(null)

    const initLenis = () => {
        // Destroy existing instance
        if (lenis.value) {
            lenis.value.destroy()
        }

        // Create new Lenis instance
        lenis.value = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        // Sync ScrollTrigger with Lenis
        lenis.value.on('scroll', ScrollTrigger.update)

        // Add RAF (requestAnimationFrame) for Lenis
        gsap.ticker.add((time) => {
            lenis.value.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
    }

    const destroyLenis = () => {
        if (lenis.value) {
            gsap.ticker.remove((time) => {
                lenis.value.raf(time * 1000)
            })
            lenis.value.destroy()
            lenis.value = null
        }
    }

    onMounted(() => {
        initLenis()
    })

    onUnmounted(() => {
        destroyLenis()
    })

    return {
        lenis,
        initLenis,
        destroyLenis,
    }
}
