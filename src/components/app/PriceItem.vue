<template>
    <li class="price-item">
        <div class="item-name">
            {{ title }}
        </div>
        <div class="dots"></div>
        <div class="item-price">
            {{ price }}р
        </div>
    </li>  
</template>

<script>
export default {
    props: ['title', 'price']
}
</script>

<style lang="scss" scoped>

.price-item {
    display: flex;
    margin-bottom: 16px;
}
.dots {
    flex: 1 1 auto;
    background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: 4px 1px;
    background-repeat: repeat-x;
    margin: 0 8px;
    margin-bottom: 4px;
}          

</style>