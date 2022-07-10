<template>
    <main class="english-page">
        <img 
            :src="require('@/assets/img/jpg/english/001.jpg')"  
            alt="photo"
            class="img-english"
        >
        <p>
            В нашем творческом центре мы изучаем английский язык в форме игры. Благодаря такой методике, дети учатся применять полученные знания сразу на практике и лучше усваивают их. На занятия они полностью погружаются в привычную игровую среду, поэтому учеба становится интереснее и приятнее.
        </p>
        <p>‌
            ‌Мы рады видеть на занятиях детей от 3 до 18 лет. Все уроки проходят  в небольших группах по 4−5 детей. Для малышей дошкольного возраста уроки длятся по 30 минут, для школьников по 40−60 минут. Вы можете выбрать удобный для вас формат занятий: «театр» или группу неполного дня.
        </p>
        
        <english-slider :data="$store.getters.slider_english" />
        <app-divider />

        <theater-group/> 
        <part-time /> 

    </main>   
</template>

<script>
import EnglishSlider from '@/components/english/EnglishSlider.vue'
import TheaterGroup from '@/components/english/TheaterGroup.vue'
import PartTime from '@/components/english/PartTime.vue'
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'EnglishPage', 
    components: { 
        EnglishSlider,
        TheaterGroup,
        PartTime,
        AppDivider
    }, 
}
</script>

<style lang="scss" scoped>

.img-english {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 16px;    
}
p {
    line-height: 22px;
    margin-bottom: 16px;
}
</style>