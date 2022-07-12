<template>
    <main class="english-page">
        <img 
            :src="require('@/assets/img/jpg/theme-intensives/001.jpg')"  
            alt="photo"
            class="img-english"
        >

        
    </main>   
</template>

<script>

export default {
    name: 'ThemeIntensives'
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
    padding-left: 32px;
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