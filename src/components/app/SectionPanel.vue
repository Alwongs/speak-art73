<template>
    <div class="section-panel">
        <div class="title">
            {{ text }}
        </div>
        <div class="close">
            &#9650;
        </div>
    </div>   
</template>

<script>

export default {
    name: 'SectionPanel',
    props: ['text']
}
</script>

<style lang="scss" scoped>

.section-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 62px;
    border-left: 2px solid $lilac;
    border-top: 2px solid $lilac;
    border-right: 2px solid $lilac;
    border-bottom: 1px solid lightgrey;
    border-radius: 42px 42px 0 0;
    .close {       
        padding: 5px;
        cursor: pointer;
    }
}
</style>