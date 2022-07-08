<template>
    <div class="section-panel">
        <div class="title">
            ТЕАТР
        </div>
        <div 
            class="close" 
            @click="toggleSubComponent"
        >
            х
        </div>
    </div>
    <section 
        v-if="isSubComponentOpen" 
        class="theater"
    >
        <app-header />
        <main>
            <img 
                :src="require('@/assets/img/jpg/english_theater_1.jpg')"  
                alt="photo"
                class="img-about img-about-1"
            >
            <p>
                Каждый праздник — как произведение искусства! А точнее спектакль на небольшой сцене.             
            </p>
            <p>
                Занятия строятся таким образом, чтобы к моменту репетиции и раздачи сценария дети уже знали большую часть не только своих, но и других ролей. 
            </p>
            <p>
                На занятиях мы примеряем разные образы и учимся вживаться в роль.
            </p>
            <p>
                Мы даём волю фантазии, переделывая известные сказки.
            </p>
            <p>
                Мы учимся выступать публично и учимся преодолевать свои страхи и стеснение. Мы придумываем костюмы и реквизит. В создании спектакля участвуют и дети и их родители. Такой союз делает наши спектакли более душевными и тёплыми!
            </p>
            <p>
                Изучаем грамматику без упражнений и учим слова без зубрёжки. Сразу применяя знания на деле.
            </p>
            <app-divider />
            <img 
                :src="require('@/assets/img/jpg/english_theater_2.jpg')"  
                alt="photo"
                class="img-about img-about-1"
            > 
            <app-divider />

            <h1>СТОИМОСТЬ</h1>
            <h1>‌(продолжительность занятия 90 минут)</h1>

            <ul class="price-list">
                <li class="price-item">
                    <div class="item-name">
                        1 занятие
                    </div>
                    <div class="dots"></div>
                    <div class="item-price">
                        700.00р
                    </div>
                </li>
            </ul> 

            <ul class="conditional-list">
                <li>
                    Занятия проходят 2 раза в неделю
                </li>
                <li>
                    Возраст: от 7 до 11 лет 
                </li>
                <li>
                    Дети младше или старше — по запросу
                </li>
                <li>
                    В группу можно попасть в любой момент.
                </li>
            </ul>  
            <div class="wrap-btn">
                <div class="btn">
                    <div class="title">
                        ЗАПИСАТЬСЯ
                    </div>
                    <div class="close">
                        х
                    </div>                
                </div>
            </div>                  
        </main>       
    </section>
</template>

<script>
import AppDivider from '@/components/common/AppDivider.vue'
import AppHeader from '@/components/common/AppHeader.vue'

export default {
    name: 'EnglishTheater',
    components: { 
        AppDivider,
        AppHeader 
    },
    data() {
        return {
            isSubComponentOpen: false
        }
    },
    methods: {
        toggleSubComponent() {
            this.isSubComponentOpen = !this.isSubComponentOpen
        }
    }
}
</script>

<style lang="scss" scoped>
.section-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 62px;
    border-left: 2px solid rgb(161, 75, 187);
    border-top: 2px solid rgb(161, 75, 187);
    border-right: 2px solid rgb(161, 75, 187);
    border-bottom: 1px solid lightgrey;
    border-radius: 42px 42px 0 0;
    .close {
        padding: 5px;
        cursor: pointer;
    }
}
.theater {
    border-width: 0 2px 2px 2px;
    border-color: rgb(161, 75, 187);
    border-style: solid;
    border-radius: 0 0 42px 42px;
    padding: 0 16px;
    margin-bottom: 32px;
}
.img-about {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 16px;    
}
p {
    line-height: 22px;
    margin-bottom: 16px;
}
h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 400; 
    margin-bottom: 8px;      
}  
.price-list {
    margin-bottom: 18px;
    li {
        display: flex;
        margin-bottom: 16px;
    }
    .dots {
        flex: 1 1 auto;
        background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 4px 1px;
        background-repeat: repeat-x;
        margin: 0 8px;
        margin-bottom: 4px;
    }          
}
.conditional-list {
    margin-bottom: 16px;
    li {
        margin-bottom: 5px;
    }          
}
.wrap-btn {
    height: 86px;
    position: relative;  
}
.btn {
    position: absolute;
    top: 0;
    left: 0;  
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 62px;
    background-color: rgb(161, 75, 187);
    border-radius: 32px;
    margin-bottom: 32px;
    color: white;
    box-shadow: 2px 3px 6px 1px rgba(95, 95, 95, 0.5); 
    animation: pulsing;
    animation-duration: 2s;
    animation-iteration-count: infinite;    
}
@keyframes pulsing {
    10% {
        margin-left: -16px;
        width: calc(100% + 32px);
        height: 64px;
    }
    30% {
        margin-left: 0;
        width: 100%;
        height: 62px;
    }
    100% {
        margin-left: 0;
        margin-right: 0;
        height: 62px;
    }
}
</style>