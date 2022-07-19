<template>
    <app-divider /> 
    <footer>  
        <p class="adress">
            Обучение проходит в комфортной обстановке в мини-группах до 8 человек по адресу: г. Ульяновск, ул. Льва Толстого, д. 22                
        </p>         
        <social-media /> 
        <a href="#" class="arrow-up"></a>            
        <p class="copyright"> Сделано дома &#129322; </p>            
    </footer>  
</template>

<script>
import AppDivider from '@/components/app/AppDivider.vue'
import SocialMedia from '@/components/app/SocialMedia.vue'

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
    padding-bottom: 16px;
    text-align: center; 
    .adress {
        font-size: 14px;
    }
    .copyright {
        font-size: 12px;
    }
}
</style>