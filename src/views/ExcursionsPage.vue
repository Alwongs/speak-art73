<template>
    <main>
        <img 
            :src="require('@/assets/img/jpg/theme-intensives/excursions/001.jpg')"  
            alt="photo"
            class="img-content"
        >
        <p>
            Посещаем наши музеи\выставки\творческие пространства и проводим там тематические и познавательные экскурсии.            
        </p>
        <p>
            Подходит для уже изучающих иностранных язык.        
        </p>
        <p>
            Для только начинающих — экскурсии предполагают русский язык.
        </p>
        <p>
            Продолжительность от 1,5 часа до двух.
        </p>

        <p>
            В программу входит:
        </p>
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

        <p>
            Стоимость: зависит от экскурсии и продолжительности
        </p>
        <p>
            Количество человек: от 7 до 12
        </p>
        <p>
            Возраст: 4−6 лет, 7−9 лет, 10−12 лет
        </p>

        <app-divider /> 

        <app-slider :data="$store.getters.excursions" />

        <app-button 
            :text="'ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ'" 
            :btn_pulsing="true"
            :arrow="'&#9658;'" 
        /> 

    </main>   
</template>

<script>
import AppSlider from '@/components/app/AppSlider.vue'
import AppDivider from '@/components/app/AppDivider.vue'

export default {
    name: 'ExcursionsPage', 
    components: { 
        AppSlider,
        AppDivider
    }, 
}
</script>

<style lang="scss" scoped>

</style>