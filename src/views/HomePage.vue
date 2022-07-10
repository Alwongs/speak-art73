<template>     
    <main class="home-page">
        <img 
            :src="require('@/assets/img/jpg/001.jpg')"  
            alt="photo"
            class="img-home"
        >
        <p>
            Меня зовут Анна Седнёва и я руководитель театрально-творческого центра иностранных языков для детей и взрослых «SpeakART».
        </p>
        <p>‌
            С 2007 года работаю, преподаю и прохожу практику за границей. За это время получила множество иностранных сертификатов, подтверждающих мои знания. Благодаря многолетнему опыту и практике, я знаю как сделать занятия не только полезными, но и интересными. В ТТЦ «Speakart» уроки проходят в форме игры. Именно так информация усваивается лучше всего, а новые знания сразу применяются на практике.
        </p>
        <img 
            :src="require('@/assets/img/jpg/002.jpg')"  
            alt="photo"
            class="img-home"
        >     
        <app-divider />  
        <p class="mb-32">
            Наш центр — это уникальная площадка для углубленного изучения иностранных языков и реализации творческих идей.
        </p>  
        <img 
            :src="require('@/assets/img/png/home_skills.png')" 
            alt="logo"
            class="img-home"
        > 
        <app-divider />
        <nav-list />
    </main>
</template>

<script>
import AppDivider from '@/components/app/AppDivider.vue'
import NavList from '@/components/home/NavList.vue'

export default {
    name: 'Home',
    components: {
        AppDivider,
        NavList
    }
}
</script>

<style lang="scss" scoped>

.img-home {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 16px; 
    @media (max-width: $mobile-max) {
        border-radius: 0;
    }    
}
p {
    font-size: 18px;
    line-height: 24px;
    padding: 0 16px;
    margin-bottom: 16px;
}
</style>