<template>
    <p><a name="top"></a></p> 
    <app-panel />
    <div class="app-container">
        <app-header />
        <router-view/>
        <app-footer />
    </div>
    <app-menu />
</template>

<script>
import AppHeader from '@/components/app/AppHeader.vue'
import AppPanel from '@/components/app/AppPanel.vue'
import AppMenu from '@/components/app/AppMenu.vue'
import AppFooter from '@/components/app/AppFooter.vue'

export default {
    name: 'App',
    components: { 
        AppPanel, 
        AppHeader,
        AppFooter,        
        AppMenu,
    }
}
</script>

<style lang="scss" scoped>

.app-container {
    width: 830px;
    margin: 0 auto;
    padding-top: 64px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 700px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 630px;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;
    } 
}
</style>
