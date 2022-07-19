<template>
    <main>
        <img 
            :src="require('@/assets/img/jpg/english/001.jpg')"  
            alt="photo"
            class="img-content"
        >

        <p>В нашем творческом центре мы изучаем английский язык в форме игры. Благодаря такой методике, дети учатся применять полученные знания сразу на практике и лучше усваивают их. На занятия они полностью погружаются в привычную игровую среду, поэтому учеба становится интереснее и приятнее.</p>

        <p>‌Мы рады видеть на занятиях детей от 3 до 18 лет. Все уроки проходят  в небольших группах по 4-5 детей. Для малышей дошкольного возраста уроки длятся по 30 минут, для школьников по 40-60 минут. Вы можете выбрать удобный для вас формат занятий: «театр» или группу неполного дня.</p>
        
        <app-slider 
            :data="$store.getters.slider_english" 
            :isAutoSlider="true"
        />

        <app-divider />

        <theater-group/> 

        <part-time /> 
    </main>   
</template>

<script>
import AppSlider from '@/components/app/AppSlider.vue'
import TheaterGroup from '@/components/english/TheaterGroup.vue'
import PartTime from '@/components/english/PartTime.vue'
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'EnglishPage', 
    components: { 
        AppSlider,
        TheaterGroup,
        PartTime,
        AppDivider
    }, 
}
</script>

<style lang="scss" scoped>

</style>