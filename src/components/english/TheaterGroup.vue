<template>
    <div class="theater-group">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'ТЕАТР'" 
            :trigger="true"
            @click="toggleBlock"
        />          
      
        <div 
            v-else  
            class="section-panel"
        >
            <div class="title">
                ТЕАТР
            </div>
            <div 
                class="close" 
                @click="toggleBlock"
            >
                &#9650;
            </div>
        </div>

        <div class="wrap-section">
            <section 
                :class="{ collapsible: isBlockOpen }"
                class="section"
            >
                <app-header />
                <main>
                    <img 
                        :src="require('@/assets/img/jpg/english/theater/001.jpg')"  
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
                    
                    <app-slider :data="$store.getters.slider_english_theater" />
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
                    <app-button :text="'ЗАПИСАТЬСЯ'" :btn_pulsing="true"/>                 
                </main>       
            </section>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/app/AppButton.vue'
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'
import AppHeader from '@/components/app/AppHeader.vue'

export default {
    name: 'TheaterGroup',
    components: { 
        AppButton,
        AppSlider,
        AppDivider,
        AppHeader 
    },
    data() {
        return {
            isBlockOpen: false
        }
    },      
    methods: {         
        toggleBlock() {
            this.isBlockOpen = !this.isBlockOpen;
        }       
    }, 
}
</script>

<style lang="scss" scoped>

.theater-group {
    padding: 0 14px;
}
.section-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 62px;
    border-left: 2px solid $lilac;
    border-top: 2px solid $lilac;
    border-right: 2px solid $lilac;
    border-bottom: 1px solid lightgrey;
    border-radius: 42px 42px 0 0;
    .close {       
        padding: 5px;
        cursor: pointer;
    }
}
.wrap-section {
    height: 100%;
    overflow: hidden;
}
.section {
    border-width: 0 2px 2px 2px;
    border-color: $lilac;
    border-style: solid;
    border-radius: 0 0 42px 42px;
    padding: 0 16px;
    max-height: 0;
    transition: all 0.3s ease-in-out;
    transform: translateY(-100%);
    &.collapsible {
        transform: translateY(0%);
        max-height: 100%;
        margin-bottom: 32px;
    }
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
</style>