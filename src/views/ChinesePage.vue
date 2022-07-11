<template>
    <main class="chinese-page">
        <img 
            :src="require('@/assets/img/jpg/chinese/001.jpg')"  
            alt="photo"
            class="img-chinese"
        >
        <p style="color:red;">
            текста пока нетююю :(
        </p>

        <img 
            :src="require('@/assets/img/jpg/chinese/002.jpg')"  
            alt="photo"
            class="img-chinese"
        >

        <p style="color:red;">‌
            текста пока нетююю :(
        </p>
        <app-divider />  

        <app-slider 
            :data="$store.getters.slider_chinese" 
            :isAutoSlider="true"            
        />


    </main>   
</template>

<script>
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'ChinesePage', 
    components: { 
        AppSlider,
        AppDivider
    }, 
}
</script>

<style lang="scss" scoped>

.img-chinese {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 16px; 
    @media (max-width: $mobile-max) {
        border-radius: 0;
    }    
}
h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 16px;       
}
p {
    line-height: 22px;
    margin-bottom: 16px;
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    }      
}
</style>