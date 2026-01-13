<script setup>
import { useMainStore } from './stores/useMainStore'
import { storeToRefs } from 'pinia'
import { useDeviceDetection } from './composables/useDeviceDetection'


const mainStore = useMainStore()
const { isInitialLoading, isLoading } = storeToRefs(mainStore)
const { isMobile, isTablet, isDesktop, smallerThanTablet, smallerThanDesktop, smallerThanMobile, isPortrait, isLandscape, isTouch } = useDeviceDetection()
</script>

<template>
    <div>
        <p>isMobile: {{ isMobile }}</p>
        <p>isTablet: {{ isTablet }}</p>
        <p>isDesktop: {{ isDesktop }}</p>
        <p>smallerThanTablet: {{ smallerThanTablet }}</p>
        <p>smallerThanDesktop: {{ smallerThanDesktop }}</p>
        <p>smallerThanMobile: {{ smallerThanMobile }}</p>
        <p>isPortrait: {{ isPortrait }}</p>
        <p>isLandscape: {{ isLandscape }}</p>
        <p>isTouch: {{ isTouch }}</p>
    </div>
</template>
