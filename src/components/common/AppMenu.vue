<template>
    <div 
        class="menu-wrap"
        :class="{ hidden: !isMenuActive }"
    >
        <div 
            class="menu-bg" 
            :class="{ disactive: !isMenuActive }"
        >
            <div 
                class="btn-close" 
                @click="toggleMenu"
            ></div>
            <div class="menu">
                <ul class="nav-list">
                    <li class="nav-item" @click.prevent="$router.push('english-page')">
                        Английский язык                               
                    </li>
                    <li class="nav-item">
                        Китайский язык                       
                    </li>
                    <li class="nav-item">
                        Мастер-классы               
                    </li>
                    <li class="nav-item">
                        Тематические интенсивы              
                    </li>                
                    <li class="nav-item">
                        Экскурсии             
                    </li>                
                </ul>             
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        isMenuActive() {
            return this.$store.getters.isMenuActive
        }
    },
    methods: {
        goTo(route) {
            this.$router.push(route)
        },
        toggleMenu(){
            this.$store.commit('TOGGLE_MENU')
        }
    }    
}
</script>

<style lang="scss" scoped>

.menu-wrap {
    font-size: 22px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;  
    &.hidden {
        visibility: hidden;
    }  
}
.menu-bg {
    color: white;
    background: rgba(113, 104, 171, 0.934);
    border-radius: 50%;
    width: 250vw;
    height: 250vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease;
    &.disactive {
        transform: scale(0);   
    }
}
.btn-close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    background-image: url('../../assets/img/svg/menu_close_btn.svg');
    background-position: center;
    width: 32px;
    height: 32px;
    align-self: center;

}
.menu {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
}
.nav-item {
    text-align: center;
    margin-bottom: 32px;
}
</style>