<template>
    <div class="part-time">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'ГРУППА НЕПОЛНОГО ДНЯ'" 
            :trigger="true"
            @click="toggleBlock"            
        />

        <div 
            v-else  
            class="section-panel"
        >
            <div class="title">
                ГРУППА НЕПОЛНОГО ДНЯ
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
                        :src="require('@/assets/img/jpg/english/part-time/001.jpg')"  
                        alt="photo"
                        class="img-about img-about-1"
                    >
                    <p>
                        Мы предлагаем вашим малышам полное погружение в языковую среду.             
                    </p>
                    <p>
                        Язык нужно учить так, чтобы можно было его применить. Мы успешно сочетаем приятное с полезным: учим готовить вкусненькое на английском языке. Ребята под присмотром, конечно, сами делают и тесто, и жарят блинчики, и пекут, и мешают и многое другое.
                    </p>
                    <p>
                        Мы рисуем и творим — даём волю фантазии, а у детей она развита на все 200%! Используем разные техники рисования и делаем удивительные поделки — и всё это тоже на английском!
                    </p>
                    <p>
                        Каждая неделя тематическая — мы «летаем в космос» и «погружаемся на морское дно», а можем даже «зайти в логово зверей».
                    </p>
                    <p>
                        Три дня в неделю — понедельник, среда и пятница с 9.00 до 12.00 ждём ваших чудесных деток! (При наборе группы — каждый день)
                    </p>
                    <app-divider />
                    <app-slider :data="$store.getters.slider_english_part_time" />                

                    <app-divider />

                    <h1>СТОИМОСТЬ</h1>

                    <ul class="price-list">
                        <li class="price-item">
                            <div class="item-name">
                                1 занятие
                            </div>
                            <div class="dots"></div>
                            <div class="item-price">
                                600.00р
                            </div>
                        </li>
                    </ul> 
    
                    <app-button :text="'ЗАПИСАТЬСЯ'" :btn_pulsing="true"/>  
                </main>       
            </section>
        </div>
    </div>
</template>

<script>
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import AppButton from '@/components/app/AppButton.vue'

export default {
    name: 'EnglishTheater',
    components: { 
        AppSlider,
        AppDivider,
        AppHeader,
        AppButton 
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

.part-time {
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