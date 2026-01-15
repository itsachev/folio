import {useMediaQuery } from "@vueuse/core";
import { computed } from "vue";

export const useDeviceDetection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1025px)");
    const isPortrait = useMediaQuery("(orientation: portrait)");
    const isLandscape = useMediaQuery("(orientation: landscape)");
    const isTouch = useMediaQuery("(pointer: coarse)");
    const smallerThanDesktop = computed(() => isMobile.value || isTablet.value);
    const smallerThanTablet = computed(() => isMobile.value);
    
    return { isMobile, isTablet, isDesktop, smallerThanDesktop, smallerThanTablet, isPortrait, isLandscape, isTouch };
};
