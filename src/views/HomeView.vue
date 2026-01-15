<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.from(".animate-me-on-scroll", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".animate-me-on-scroll",
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
        },
    })
})
</script>

<template>
    <div style="padding-bottom: 300vh">
        <h1>Home</h1>
        <router-link to="/projects">
            Projects
        </router-link>
        <p
            style="margin-top: 100vh;"
            class="animate-me-on-scroll"
        >
            Lorem ipsum dolor sit amet...
        </p>
        <div class="fade-in-element">
            This will fade in
        </div>

        <router-link to="/projects">
            Projects
        </router-link>
    </div>
</template>
