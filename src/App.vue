<template>
    <p><a name="top"></a></p> 
    <app-header />
    <div class="app-container">
        <router-view/>
    </div>
    <app-menu />
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import AppMenu from '@/components/common/AppMenu.vue'

export default {
    name: 'App',
    components: { 
        AppHeader, 
        AppMenu 
    }
}
</script>

<style lang="scss" scoped>

.app-container {
    width: 60vw;
    margin: 0 auto;
    padding-top: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 70vw;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
    }      
    @media (max-width: 768px) {
        width: 95vw;
    } 
}

</style>
