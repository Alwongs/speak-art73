<template>
    <main class="english-page">
        <img 
            :src="require('@/assets/img/jpg/master-classes/001.jpg')"  
            alt="photo"
            class="img-english"
        >
        <ul class="dotted-list mb-16">
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

        <h4 
            style="color: red;"
            class="mb-16"
        >
            Уже Китайский, но глючит. Меньше 4х фоток не понимает. Надо разбираться ))
        </h4>
        <app-slider 
            :data="$store.getters.master_classes" 
            :isAutoSlider="false"
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

export default {
    name: 'EnglishPage', 
    components: {
        AppButton, 
        AppSlider,
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
p {
    line-height: 22px;
    margin-bottom: 16px;
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    }      
}
</style>