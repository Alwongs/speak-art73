<template>
    <div class="home-page">      
        <header class="header">
            <img 
                :src="require('@/assets/img/png/logo.png')" 
                alt="logo"
                class="logo"
            >
            <h1>ТЕАТРАЛЬНО-ТВОРЧЕСКИЙ ЦЕНТР</h1>
            <h1>ИНОСТРАННЫХ ЯЗЫКОВ «SpeakART»</h1>           
        </header>
        <main>
            <app-divider class="divider"/> 
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
            <app-divider class="divider"/>  
            <p>
                Наш центр — это уникальная площадка для углубленного изучения иностранных языков и реализации творческих идей.
            </p>  
            <img 
                :src="require('@/assets/img/png/skills.png')" 
                alt="logo"
                class="img-about skills"
            > 
            <app-divider class="divider"/>  

            <nav-list />

            <app-divider class="divider"/> 
            <p>
                Обучение проходит в комфортной обстановке в мини-группах до 8 человек по адресу: г. Ульяновск, ул. Льва Толстого, д. 22                
            </p> 

            <social-media /> 

            <a href="#top" class="arrow-up"></a>  

        </main>
        <footer>
            <p>Сделано дома &#129322;</p>            
        </footer>
    </div>
</template>

<script>
import AppDivider from '@/components/common/AppDivider.vue'
import NavList from '@/components/home/NavList.vue'
import SocialMedia from '@/components/home/SocialMedia.vue'

export default {
    name: 'Home',
    components: {
        AppDivider,
        NavList,
        SocialMedia
    }
}
</script>

<style lang="scss" scoped>
.divider {
    margin-bottom: 24px;    
}
.header {
    padding-top: 16px;
    margin-bottom: 16px;
    .logo {
        width: 100%;
        margin-bottom: 16px;
    }
    h1 {
        text-align: center;
        font-size: 18px;
        font-weight: 400;       
    }
}
main {
    margin-bottom: 48px;
    .img-about {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 16px;    
    }
    p {
        line-height: 22px;
        margin-bottom: 16px;
    }
    .arrow-up {
        display: block;
        background-image: url('../assets/img/svg/arrow_up.svg');
        background-position: center;
        width: 48px;
        height: 48px;
        align-self: center;
        margin: 0 auto;     
    }
}
footer {
    text-align: center;
    height: 48px;
}
</style>