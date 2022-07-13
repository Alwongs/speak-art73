<template>
    <div 
        class="wrap-btn"
        :class="{ 'btn-pulsing': btn_pulsing, 'trigger': trigger}"
    >
        <div class="btn">
            <div class="title">
                {{ text }}
            </div>
            <div class="close">
                {{ arrow }}
            </div>                
        </div>
    </div>    
</template>

<script>

export default {
    name: 'AppButton',
    props: [ 'text', 'btn_pulsing', 'trigger', 'arrow']
}
</script>

<style lang="scss" scoped>

.wrap-btn {
    border-radius: 24px;
    height: 64px;
    padding: 1px 16px 1px 16px;
    margin-bottom: 32px;
}
.btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 100%;
    background-color: $lilac;
    border-radius: 32px;
    color: white;
    box-shadow: 2px 3px 6px 1px rgba(95, 95, 95, 0.5);
    cursor: pointer;    
}
.btn-pulsing {
    animation: pulsing;
    animation-duration: 2s;
    animation-iteration-count: infinite;    
}
@keyframes pulsing {
    10% {
        padding: 0;       
    }
    30% {
        padding: 1px 16px 1px 16px;         
    }
    100% {
        padding: 1px 16px 1px 16px;          
    }
}
.trigger { 
    transition: all 0.2s ease-in-out; 
    &:hover {
        padding: 0;                
    }
}
</style>