<template>  
    <ul class="nav-list">
        <li class="nav-item">
            <button class="lang-btn blue" @click.prevent="goTo('english-page')">
                АНГЛИЙСКИЙ ЯЗЫК            
            </button>                      
        </li>
        <li class="nav-item">
            <button class="lang-btn green" @click.prevent="goTo('chinese-page')">
                КИТАЙСКИЙ ЯЗЫК            
            </button>                      
        </li>
        <li class="nav-item">
            <button class="lang-btn blue" @click.prevent="goTo('master-classes')">
                МАСТЕР-КЛАССЫ            
            </button>                   
        </li>
        <li class="nav-item">
            <button class="lang-btn green" @click.prevent="goTo('theme-intensives')">
                ТЕМАТИЧЕСКИЕ ИНТЕНСИВЫ          
            </button>                     
        </li>                
        <li class="nav-item">
            <button class="lang-btn blue" @click.prevent="goTo('excursions-page')">
                ЭКСКУРСИИ             
            </button>                     
        </li>                
    </ul>                   
</template>

<script>

export default {
    name: 'NavList',
    methods: {
        goTo(route) {
            this.$router.push(route);
        }
    }      
}
</script>

<style lang="scss" scoped>

.nav-item {
    padding: 30px 40px;
    button {
        background-color: #fff;
        border-radius: 20px;
        height: 100px;
        width: 100%;
        text-align: center;
        font-size: 26px;
        padding: 0 16px;
        cursor: pointer;
        &.blue {
            border: 2px solid rgba(161, 75, 187, 0.934);
            box-shadow: 0px 0px 10px 4px rgb(161, 75, 187),
                        inset 0px 0px 10px 4px rgba(161, 75, 187, 0.559);
            &:hover {
                background-color: rgba(161, 75, 187, 0.1); 
            }                         
        }
        &.green {
            border: 2px solid rgba(44, 189, 46, 0.934);
            box-shadow: 0px 0px 10px 4px rgb(44, 189, 46),
                        inset 0px 0px 10px 4px rgba(44, 189, 46, 0.559); 
            &:hover {
                background-color: rgba(44, 189, 46, 0.1); 
            }       
        }

    }    
}
</style>