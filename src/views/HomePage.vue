<template>     
    <main class="home-page">
        <img 
            :src="require('@/assets/img/jpg/general.jpg')"  
            alt="photo"
            class="img-about img-about-1"
        >
        <p>
            Меня зовут Анна Седнёва и я руководитель театрально-творческого центра иностранных языков для детей и взрослых «SpeakART».
        </p>
        <p>‌
            С 2007 года работаю, преподаю и прохожу практику за границей. За это время получила множество иностранных сертификатов, подтверждающих мои знания. Благодаря многолетнему опыту и практике, я знаю как сделать занятия не только полезными, но и интересными. В ТТЦ «Speakart» уроки проходят в форме игры. Именно так информация усваивается лучше всего, а новые знания сразу применяются на практике.
        </p>
        <img 
            :src="require('@/assets/img/jpg/general_2.jpg')"  
            alt="photo"
            class="img-about img-about-2"
        >     
        <app-divider />  
        <p>
            Наш центр — это уникальная площадка для углубленного изучения иностранных языков и реализации творческих идей.
        </p>  
        <img 
            :src="require('@/assets/img/png/skills.png')" 
            alt="logo"
            class="img-about skills"
        > 
        <app-divider />
        <nav-list />
    </main>
</template>

<script>
import AppDivider from '@/components/common/AppDivider.vue'
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