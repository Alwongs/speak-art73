<template>
    <header class="app-header">
        <div class="container">
            <div 
                class="header-link home-link"
                @click="goTo('/')"
            >
                Home
            </div>
            <div class="header-link nav-links" @click="toggleMenu">
                Menu
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
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
.app-header {
    background-color: rgb(49, 155, 51);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;    
    height: 48px;
    color: white;
}
.container {
    position: relative;
    height: 100%;
    width: 60vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 70vw;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
    }      
    @media (max-width: 768px) {
        width: 95vw;
    } 
}
.header-link  {
    cursor: pointer;
}

</style>