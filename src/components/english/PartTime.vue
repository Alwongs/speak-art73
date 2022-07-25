<template>
    <div class="sub-tub">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'ГРУППА НЕПОЛНОГО ДНЯ'" 
            :trigger="true"
            :arrow="'&#9660;'"
            @click="toggleBlock"            
        />
        <section-panel 
            v-else 
            :text="'ГРУППА НЕПОЛНОГО ДНЯ'"
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
                        :src="require('@/assets/img/jpg/english/part-time/001.jpg')"  
                        alt="photo"
                        class="img-content"
                    >
                    <p>Мы предлагаем вашим малышам полное погружение в</p>

                    <p>Язык нужно учить так, чтобы можно было его применить. Мы успешно сочетаем приятное с полезным: учим готовить вкусненькое на английском языке. Ребята под присмотром, конечно, сами делают и тесто, и жарят блинчики, и пекут, и мешают и многое другое.</p>

                    <p>Мы рисуем и творим — даём волю фантазии, а у детей она развита на все 200%! Используем разные техники рисования и делаем удивительные поделки — и всё это тоже на английском!</p>

                    <p>Каждая неделя тематическая — мы «летаем в космос» и «погружаемся на морское дно», а можем даже «зайти в логово зверей».</p>

                    <p>Три дня в неделю — понедельник, среда и пятница с 9.00 до 12.00 ждём ваших чудесных деток! (При наборе группы — каждый день)</p>

                    <app-divider />
                    
                    <app-slider 
                        :data="$store.getters.slider_english_part_time" 
                        :isAutoSlider="false"
                        :sliding="sliding"
                        @updateTrigger="updateTrigger"
                    />                

                    <app-divider />

                    <h2 class="text-center">СТОИМОСТЬ</h2>

                    <ul class="price-list">
                        <price-item 
                            :title="'1 занятие'"
                            :price="'600.00'"
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
    name: 'EnglishTheater',
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
            sliderNumber: 2 // номер слайдера на странице начиная с 0.
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
    li {
        margin-bottom: 5px;
    }          
}
</style>