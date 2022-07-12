<template>
    <main class="english-page">
        <img 
            :src="require('@/assets/img/jpg/master-classes/001.jpg')"  
            alt="photo"
            class="img-english"
        >
        <ul class="master-classes-list mb-16">
            <li>Кулинарные</li>
            <li>Творческие</li>
            <li>Театральные</li>
            <li>Языковые</li>
        </ul>
        <p>
            Мастер-классы полностью на иностранном языке. Адаптируем под уровень знания языка. 
        </p>
        <p>‌
            Прекрасная возможность погрузиться в языковую среду и найти применение своим знаниям!
        </p>
        <p>‌
            Продолжительность: от полутра до двух часов
        </p>

        <h2 style="color: red;">Слайдер пока снглийский ))</h2>
        <app-slider 
            :data="$store.getters.slider_english" 
            :isAutoSlider="true"
        />
        <app-divider />
    </main>   
</template>

<script>
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'EnglishPage', 
    components: { 
        AppSlider,
        AppDivider
    }, 
}
</script>

<style lang="scss" scoped>

.img-english {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 16px; 
    @media (max-width: $mobile-max) {
        border-radius: 0;
    }    
}
.master-classes-list {
    list-style: disc;
    padding-left: 16px;
    li {
        line-height: 22px;
    }
}
p {
    line-height: 22px;
    margin-bottom: 16px;
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    }      
}
</style>