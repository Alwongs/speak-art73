<template>
    <div class="sub-tub">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'ДЕТСКАЯ ГЕОГРАФИЯ'" 
            :trigger="true"
            :arrow="'&#9660;'"
            @click="toggleBlock"
        />     
        <section-panel 
            v-else 
            :text="'ДЕТСКАЯ ГЕОГРАФИЯ'"
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
                        :src="require('@/assets/img/jpg/theme-intensives/child-geography/001.jpg')"  
                        alt="photo"
                        class="img-content"
                    >

                    <p>Подходит для уже изучавших английский язык (от 4 до 6 лет и от 7 до 9 лет)</p>

                    <h2>МЫ ЗАТРОНЕМ ТЕМЫ:</h2>
                    <ul class="dotted-list mb-16">
                        <li>Еда</li>
                        <li>Время (часы)</li>
                        <li>Страны (континенты)</li>
                        <li>Музыкальные инструменты</li>
                        <li>Животные</li>
                        <li>Семья</li>
                        <li>Игрушки</li>
                        <li>Дни недели, месяца, времена года</li>
                        <li>Предлоги</li>
                    </ul>

                    <p>Мы вместе отправимся в кругосветное путешествие, а дети получат свои «загранпаспорта». Почти в каждой из 10 стран нас ждёт кулинарный мастер-класс.</p>

                    <p>Каждый участник путешествия получает рабочую тетрадь, а в конце — именные дипломы и приятные подарки!

                    </p>
                    <p>Страны: Россия, Египет, Япония, Китай, Франция, Англия, Германия, Италия, Испания, Африка, Мадагаскар.</p>

                    <p>Продолжительность: 5 дней по 2 часа занятие</p>
                    
                    <app-slider 
                        :data="$store.getters.child_geography"  
                        :isAutoSlider="false"
                        :sliding="sliding"
                        @updateTrigger="updateTrigger"  
                    />

                    <app-divider />

                    <h2 class="text-center">СТОИМОСТЬ</h2>
                    <ul class="price-list">
                        <price-item 
                            :title="'1 занятие'"
                            :price="'5000.00'"
                        />
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
import swiperMixin from '@/mixins/swiper.mixin.js'

export default {
    name: 'ChildGeography',
    mixins: [swiperMixin],
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
            sliderNumber: 0 // номер слайдера на странице начиная с 0.
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
</style>