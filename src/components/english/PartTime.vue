<template>
    <div 
        v-if="!isBlockOpen" 
        class="wrap-btn" 
        @click="toggleBlock"
    >
        <div class="btn btn-trigger">
            <div class="title">
                ГРУППА НЕПОЛНОГО ДНЯ
            </div>
            <div class="close">
                х
            </div>                
        </div>
    </div>

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
            х
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
                <img 
                    :src="require('@/assets/img/jpg/english/part-time/gallery_1.jpg')"  
                    alt="photo"
                    class="img-about img-about-1"
                > 
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
  
                <div class="wrap-btn">
                    <div class="btn btn-pulsing">
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
    </div>
</template>

<script>
import AppDivider from '@/components/app/AppDivider.vue'
import AppHeader from '@/components/app/AppHeader.vue'

export default {
    name: 'EnglishTheater',
    components: { 
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
.wrap-btn {
    height: 64px;
    position: relative;  
    margin-bottom: 16px;
}
.btn {
    position: absolute;
    top: 0;
    left: 0;  
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 62px;
    background-color: $lilac;
    border-radius: 32px;
    color: white;
    box-shadow: 2px 3px 6px 1px rgba(95, 95, 95, 0.5);
    cursor: pointer;
}
.btn-trigger {
    transition: all 0.2s;   
    &:hover {
        margin-left: -16px;
        width: calc(100% + 32px);
        height: 64px;        
    }
}
.btn-pulsing {
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
    transition: all 0.7s ease-in-out;
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