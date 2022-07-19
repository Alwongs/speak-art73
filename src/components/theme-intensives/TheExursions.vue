<template>
    <div class="sub-tub">
        <app-button 
            v-if="!isBlockOpen" 
            :text="'ЭКСКУРСИИ'" 
            :trigger="true"
            :arrow="'&#9660;'"
            @click="toggleBlock"
        />

        <section-panel 
            v-else 
            :text="'ЭКСКУРСИИ'"
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
                        :src="require('@/assets/img/jpg/theme-intensives/excursions/001.jpg')"  
                        alt="photo"
                        class="img-content"
                    >

                    <p>Посещаем наши музеи\выставки\творческие пространства и проводим там тематические и познавательные экскурсии.</p>

                    <p>Подходит для уже изучающих иностранных язык.</p>

                    <p>Для только начинающих — экскурсии предполагают русский язык.</p>

                    <p>Продолжительность от 1,5 часа до двух.</p>

                    <p>В программу входит:</p>
                    <ul class="dotted-list mb-16">
                        <li>
                            Посещение музея\выставки\творческой площадки
                        </li>
                        <li>
                            Экскурсия (адаптируется под уровень)
                        </li>
                        <li>
                            Мастер-класс
                        </li>
                    </ul>

                    <p>Стоимость: зависит от экскурсии и продолжительности</p>

                    <p>Количество человек: от 7 до 12</p>

                    <p>Возраст: 4−6 лет, 7−9 лет, 10−12 лет</p>

                    <app-divider /> 

                    <app-slider :data="$store.getters.excursions" />

                    <app-button 
                        :text="'ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ'" 
                        :btn_pulsing="true"
                        :arrow="'&#9658;'" 
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

export default {
    name: 'SinceSchool',
    components: { 
        AppButton,
        SectionPanel,
        AppSlider,
        AppDivider,
        AppHeader,
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
    li {
        margin-bottom: 16px;
            line-height: 22px;
    }          
} 
</style>