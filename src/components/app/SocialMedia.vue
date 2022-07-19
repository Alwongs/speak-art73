<template>  
    <ul class="social-media-links">
        <li>
            <a 
                href="whatsapp://send?phone=79020079848&amp;text=" 
                class="whatsapp"
            ></a> 
        </li>
        <li>
            <a 
                href="viber://chat?number=%2B79020079848" 
                class="viber"
            ></a> 
        </li>
        <li>
            <a 
                href="tg://resolve?domain=speakart73" 
                class="telegram"
            ></a> 
        </li>
    </ul>                 
</template>

<script>

export default {
    name: 'NavList',
}
</script>

<style lang="scss" scoped>

.social-media-links {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    li {
        width: 58px;
        height: 58px;
        margin: 0 16px; 
        padding: 1px;  
        &:hover {
            padding: 0;          
        }               
    }
    a {
        display: block;
        background-color: rgb(49, 147, 50);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 2px 2px 5px 3px rgb(133, 133, 133);        

        &.whatsapp {
            background-image: url('../../assets/img/svg/whatsapp.svg');
            background-position: center;
        }     
        &.viber {
            background-image: url('../../assets/img/svg/viber.svg');
            background-position: center;
        }     
        &.telegram {
            background-image: url('../../assets/img/svg/telegram.svg');
            background-position: center;
        }     
    }
}
</style>