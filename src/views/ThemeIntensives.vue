<template>
    <main>
        <img 
            :src="require('@/assets/img/jpg/theme-intensives/001.jpg')"  
            alt="photo"
            class="img-content"
        >
        
        <child-geography />
        <since-school />
        <the-exursions />
    </main>   
</template>

<script>
import ChildGeography from '@/components/theme-intensives/ChildGeography.vue'
import SinceSchool from '@/components/theme-intensives/SinceSchool.vue'
import TheExursions from '@/components/theme-intensives/TheExursions.vue'

export default {
    name: 'ThemeIntensives', 
    components: { 
        ChildGeography, 
        SinceSchool,
        TheExursions 
    }   
}
</script>

<style lang="scss" scoped>

</style>