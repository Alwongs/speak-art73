<template>
    <div class="sub-tub">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'НАУЧНАЯ ШКОЛА'" 
            :trigger="true"
            :arrow="'&#9660;'"
            @click="toggleBlock"
        />     
        <section-panel 
            v-else 
            :text="'НАУЧНАЯ ШКОЛА'"
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
                        :src="require('@/assets/img/jpg/theme-intensives/since-school/001.png')"  
                        alt="photo"
                        class="img-content"
                    >

                    <p>Подходит для уже изучавших английский язык: от 4 до 6(7) лет</p>

                    <p>Мы предлагаем захватывающий интенсив для маленьких учёных. Нас ждёт интересный мир наук и экспериментов.</p>

                    <p>В курсе будет 5 наук:</p>
                    <ul class="subject-list">
                        <li>БИОЛОГИЯ — познакомимся с насекомыми, растениями и кое-что посадим</li>
                        <li>АНАТОМИЯ — изучим органы и скелет человека. Узнаем, как работает пищеварение и сделаем забавный опыт!</li>
                        <li>ИСКУССТВО — изучим разные техники составления рисунков и нарисуем свой собственный шедевр!</li>
                        <li>МАТЕМАТИКА — научимся сложению и говорить, который час!</li>
                        <li>КУЛИНАРИЯ — мы не только развиваем интеллект и творческие способности, но и учимся готовить по интересным и простым рецептам.</li>
                    </ul>

                    <p>Каждого участника ждёт именной диплом в конце и «пропуск учёного» в начале курса.</p>

                    <p>Продолжительность: 5 дней по 2 часа каждый день</p>

                    <app-divider />

                    <h2 class="text-center">СТОИМОСТЬ</h2>
                    <ul class="price-list">
                        <price-item 
                            :title="'Научная школа'"
                            :price="'5500.00'"
                        />
                    </ul> 

                    <img 
                        :src="require('@/assets/img/jpg/theme-intensives/since-school/002.jpg')"  
                        alt="photo"
                        class="img-content"
                    >
                    
                    <app-button 
                        :text="'ЗАПИСАТЬСЯ'" 
                        :btn_pulsing="true"
                        :arrow="'&#9658;'" 
                        :href="'viber://chat?number=%2B79020079848'"
                    /> 

                    <app-divider />

                    <app-slider 
                        :data="$store.getters.since_school"   
                        :isAutoSlider="false"
                        :sliding="sliding"
                        @updateTrigger="updateTrigger" 
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
    name: 'SinceSchool',
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
            sliderNumber: 1 // номер слайдера на странице начиная с 0.
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
.subject-list {
    margin-bottom: 16px;
    padding-left: 16px;
    li {
        margin-bottom: 16px;
            line-height: 22px;
    }          
} 
</style>