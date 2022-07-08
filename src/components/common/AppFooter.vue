<template>
    <app-divider /> 
    <footer>  
        <p>
            Обучение проходит в комфортной обстановке в мини-группах до 8 человек по адресу: г. Ульяновск, ул. Льва Толстого, д. 22                
        </p>         
        <social-media /> 
        <a href="#top" class="arrow-up"></a>            
        <p>Сделано дома &#129322;</p>            
    </footer>  
</template>

<script>
import AppDivider from '@/components/common/AppDivider.vue'
import SocialMedia from '@/components/common/SocialMedia.vue'

export default {
    name: 'AppFooter',
    components: { 
        SocialMedia, 
        AppDivider 
    }    
}
</script>

<style lang="scss" scoped>

footer {
    text-align: center;
    .arrow-up {
        display: block;
        background-image: url('../../assets/img/svg/arrow_up.svg');
        background-position: center;
        width: 48px;
        height: 48px;
        align-self: center;
        margin: 0 auto;    
        margin-bottom: 24px; 
    }  
    p {
        margin-bottom: 32px;
    }  
}
</style>