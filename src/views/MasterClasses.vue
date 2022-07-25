<template>
    <main>
        <img 
            :src="require('@/assets/img/jpg/master-classes/001.jpg')"  
            alt="photo"
            class="img-content"
        >
        <ul class="dotted-list mb-16">
            <li>Кулинарные</li>
            <li>Творческие</li>
            <li>Театральные</li>
            <li>Языковые</li>
        </ul>

        <p>Мастер-классы полностью на иностранном языке. Адаптируем под уровень знания языка.</p>

        <p>Прекрасная возможность погрузиться в языковую среду и найти применение своим знаниям!</p>

        <p>Продолжительность: от полутра до двух часов</p>

        <app-slider 
            :data="$store.getters.master_classes" 
            :isAutoSlider="false"
            :sliding="sliding"
            @updateTrigger="updateTrigger"  
        />
        <app-button 
            :text="'ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ'" 
            :btn_pulsing="true"
            :arrow="'&#9658;'" 
        />        
    </main>   
</template>

<script>
import AppButton from '@/components/app/AppButton.vue'
import AppSlider from '@/components/app/AppSlider.vue'
import swiperMixin from '@/mixins/swiper.mixin.js'

export default {
    name: 'EnglishPage', 
    mixins: [swiperMixin],
    components: {
        AppButton, 
        AppSlider,
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

</style>