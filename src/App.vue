<script setup>
import { useMainStore } from './stores/useMainStore'
import { storeToRefs } from 'pinia'


const mainStore = useMainStore()
const { isInitialLoading, isLoading } = storeToRefs(mainStore)
</script>

<template>
    <div>
        <p>isInitialLoading: {{ isInitialLoading }}</p>
        <p>isLoading: {{ isLoading }}</p>
    </div>
</template>
