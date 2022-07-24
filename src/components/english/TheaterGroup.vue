<template>
    <div class="sub-tub">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'ТЕАТР'" 
            :trigger="true"
            :arrow="'&#9660;'"
            @click="toggleBlock"
        />     
        <section-panel 
            v-else 
            :text="'ТЕАТР'"
            @click="toggleBlock"
        />     

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
                        class="img-content"
                    >

                    <p>Каждый праздник — как произведение искусства! А точнее спектакль на небольшой сцене.</p>

                    <p>Занятия строятся таким образом, чтобы к моменту репетиции и раздачи сценария дети уже знали большую часть не только своих, но и других ролей.</p>

                    <p>На занятиях мы примеряем разные образы и учимся вживаться в роль.</p>

                    <p>Мы даём волю фантазии, переделывая известные сказки.</p>

                    <p>Мы учимся выступать публично и учимся преодолевать свои страхи и стеснение. Мы придумываем костюмы и реквизит. В создании спектакля участвуют и дети и их родители. Такой союз делает наши спектакли более душевными и тёплыми!</p>

                    <p>Изучаем грамматику без упражнений и учим слова без зубрёжки. Сразу применяя знания на деле.</p>

                    <app-divider />
                    
                    <app-slider 
                        :data="$store.getters.slider_english_theater"
                        :isAutoSlider="false"
                        :sliding="sliding"
                        @updateTrigger="updateTrigger"
                    />

                    <app-divider />

                    <h2 class="text-center">СТОИМОСТЬ</h2>
                    <p class="text-center">‌(продолжительность занятия 90 минут)</p>
                    <ul class="price-list">
                        <price-item 
                            :title="'1 занятие'"
                            :price="'700.00'"
                        />
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

                    <app-button 
                        :text="'ЗАПИСАТЬСЯ'" 
                        :btn_pulsing="true"
                        :arrow="'&#9658;'" 
                        :href="'viber://chat?number=%2B79020079848'"
                    />  
                    
                    <a 
                        class="arrow-up" 
                        @click="toggleBlock"
                    ></a>                 
                </main>       
            </section>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/app/AppButton.vue'
import SectionPanel from '@/components/app/SectionPanel.vue'
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import PriceItem from '@/components/app/PriceItem.vue'

export default {
    name: 'TheaterGroup',
    components: { 
        AppButton,
        SectionPanel,
        AppSlider,
        AppDivider,
        AppHeader,
        PriceItem
    },
    data() {
        return {
            isBlockOpen: false,
            sliding: 0,
            slider: null      
        }
    },      
    methods: {   
        updateTrigger(newVal) {
            setTimeout(() => {
                console.log('setTimeOut-theater')
                this.sliding = newVal;
            })
        },   

        toggleBlock() {
            this.isBlockOpen = !this.isBlockOpen;
        },

        touchStart(e) {
            let firstTouch = e.touches[0]
            this.x1 = firstTouch.clientX;
        },
        touchEnd(e) {
            let x2 = e.changedTouches[0].clientX;
            if (x2 < this.x1) {
                this.sliding = this.sliding + 1; 
            }
            if (x2 > this.x1) {
                this.sliding = this.sliding - 1;             
            }
        },            
    }, 
    mounted() {
        let slider = document.querySelectorAll('.wrapper-slider')[1];
        slider.ontouchstart = (e) => {
            this.touchStart(e);
        }
        slider.ontouchend = (e) => {
            this.touchEnd(e);
        } 
        this.slider = slider;        
    },
    unmounted() {
        this.slider.ontouchstart = null;
        this.slider.ontouchend = null;        
    } 
}
</script>

<style lang="scss" scoped>

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
    @media (max-width: $mobile-max) {
        padding: 0;
    }     
    &.collapsible {
        transform: translateY(0%);
        max-height: 100%;
        margin-bottom: 32px;
    }
}  
.conditional-list {
    margin-bottom: 16px;
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    }  
    li {
        margin-bottom: 5px;
    }          
}
</style>