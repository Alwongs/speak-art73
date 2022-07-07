<template>
    <div class="divider">
        <div class="line"></div>
        <div class="arrow-bottom"></div>
        <div class="line"></div>
    </div>    
</template>

<style lang="scss" scoped>

.divider {
    display: flex;
    align-items: center;
    padding: 0 32px;
}
.arrow-bottom {
    background-image: url('../../assets/img/svg/arrow.svg');
    background-position: center;
    width: 10px;
    height: 20px;
    align-self: center;
    margin: 0 auto;
}
.line {
    background-color: rgb(153, 149, 149);
    width: 45%;
    height: 1px;
}
</style>