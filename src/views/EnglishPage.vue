<template>
    <main class="english-page">
        <img 
            :src="require('@/assets/img/jpg/english_1.jpg')"  
            alt="photo"
            class="img-about img-about-1"
        >
        <p>
            В нашем творческом центре мы изучаем английский язык в форме игры. Благодаря такой методике, дети учатся применять полученные знания сразу на практике и лучше усваивают их. На занятия они полностью погружаются в привычную игровую среду, поэтому учеба становится интереснее и приятнее.
        </p>
        <p>‌
            ‌Мы рады видеть на занятиях детей от 3 до 18 лет. Все уроки проходят  в небольших группах по 4−5 детей. Для малышей дошкольного возраста уроки длятся по 30 минут, для школьников по 40−60 минут. Вы можете выбрать удобный для вас формат занятий: «театр» или группу неполного дня.
        </p>
        <img 
            :src="require('@/assets/img/jpg/english_2.jpg')"  
            alt="photo"
            class="img-about img-about-2"
        > 
        <english-theater />        
    </main>   
</template>

<script>
import EnglishTheater from '@/components/english/EnglishTheater.vue'

export default {
    name: 'EnglishPage', 
    components: { EnglishTheater },   
}
</script>

<style lang="scss" scoped>

main {
    .img-about {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 16px;    
    }
    p {
        line-height: 22px;
        margin-bottom: 16px;
    }
}
</style>