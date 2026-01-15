import { useLenis } from '@/composables/useLenis'
import { useRouter } from 'vue-router'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useLenisRouter() {
    const router = useRouter()
    const { lenis, initLenis, destroyLenis } = useLenis()

    const setupRouterIntegration = () => {
        const originalScrollBehavior = router.options.scrollBehavior

        router.options.scrollBehavior = (to, from, savedPosition) => {
            if (lenis.value) {
                if (savedPosition) {
                    lenis.value.scrollTo(savedPosition.top, { immediate: true })
                } else {
                    lenis.value.scrollTo(0, { immediate: true })
                }
            }
            if (originalScrollBehavior) {
                return originalScrollBehavior(to, from, savedPosition)
            }

            return { top: 0 }
        }

        router.beforeEach((to, from, next) => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            next()
        })

        router.afterEach(() => {
            setTimeout(() => ScrollTrigger.refresh(), 50)
        })
    }

    return {
        lenis,
        initLenis,
        destroyLenis,
        setupRouterIntegration
    }
}
