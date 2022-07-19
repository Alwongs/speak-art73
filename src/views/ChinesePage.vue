<template>
    <main>
        <img 
            :src="require('@/assets/img/jpg/chinese/001.jpg')"  
            alt="photo"
            class="img-content"
        >

        <p style="color:red;">текста пока нетююю :(</p>

        <img 
            :src="require('@/assets/img/jpg/chinese/002.jpg')"  
            alt="photo"
            class="img-content"
        >

        <p style="color:red;">текста пока нетююю :(</p>

        <app-divider />  

        <app-slider 
            :data="$store.getters.slider_chinese" 
            :isAutoSlider="true"            
        />
        
        <app-button 
            :text="'ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ'" 
            :btn_pulsing="true"
            :arrow="'&#9658;'" 
        />
    </main>   
</template>

<script>
import AppButton from '@/components/app/AppButton.vue'
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'ChinesePage', 
    components: { 
        AppButton,
        AppSlider,
        AppDivider
    }, 
}
</script>

<style lang="scss" scoped>


</style>