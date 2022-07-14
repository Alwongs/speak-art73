<template>
    <header class="header">
        <img 
            :src="require('@/assets/img/png/logo.png')" 
            alt="logo"
            class="logo"
        >
        <h1>ТЕАТРАЛЬНО-ТВОРЧЕСКИЙ ЦЕНТР</h1>
        <h1>ИНОСТРАННЫХ ЯЗЫКОВ «SpeakART»</h1>           
    </header>   
    <app-divider /> 
</template>

<script>
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'AppHeader',
    components: { AppDivider }     
}
</script>

<style lang="scss" scoped>

.header {
    padding-top: 16px;
    margin-bottom: 32px;
    .logo {
        width: 100%;
        padding: 10px;
        margin-bottom: 16px;
    }
}
</style>