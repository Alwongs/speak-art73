<template>
    <div class="wrapper-slider">
        <image-group
            :data="data"
            :current_index="current_index" 
            @toggleSlide="toggleSlide"
        />
        <div class="slider-footer">
            <div class="dots-group">
                <div
                    v-for="item in data"
                    :key="item.id"
                    class="slider-footer-dot"
                    :class="{'selected-slide': item.id === current_index + 1}"
                    @click="selectSlide(item.id)" 
                ></div>
            </div>
        </div>
        <button 
            @click="prevSlide"            
            class="btn-slider btn-slider-prev"
        ></button>
        <button 
            @click="nextSlide"             
            class="btn-slider btn-slider-next"
        ></button>         
    </div>
</template>

<script>
import ImageGroup from './ImageGroup.vue';

export default {
    name: 'AppSlider',
    props: ['data', 'isAutoSlider'],
    components: { ImageGroup },
    data() {
        return {
            interval: null,
            isPaused: false,
            current_index: 0
        }
    },    
    methods: {
        selectSlide(id) {
            this.current_index = id - 1;
        },
        prevSlide() {
            if (this.current_index >= 1) {
                this.current_index = this.current_index - 1;
            }
        },
        nextSlide() {
            if (this.current_index >= this.data.length - 1) {
                this.current_index = 0;
            } else {
                this.current_index = this.current_index + 1;
            }
        },
        toggleSlide() {
            this.isPaused = !this.isPaused
            if(!this.isPaused) {
                this.startSlide();
            } else {
                this.stopSlide();
            }
        },
        startSlide() {
            this.interval = setInterval(() => {
                    this.nextSlide();
            }, 3500);
        },
        stopSlide() {
            clearInterval(this.interval)
        }        
    },
    created() {
        if (this.isAutoSlider) {
            this.startSlide();
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper-slider {
    border-radius: 5px;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 32px;
    @media (max-width: $mobile-max) {
        border-radius: 0;
        padding: 0 16px;
    }     
}
.slider-footer {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding-bottom: 32px;
    display: flex;
    align-items: center;
    z-index: 2;
}
.dots-group {
    margin: auto;
    display: flex;
}
.slider-footer-dot {
    background-color: $white;
    border: 1px solid $grey;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 4px;
    cursor: pointer;
    z-index: 1;
}
.selected-slide {
    background-color: $green;
}
.btn-slider { 
    z-index: 2;
    position: absolute;
    top: 0;
    width: 64px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/img/svg/arrow_slide.svg') no-repeat center;
    &:hover {
        background-color: $bg-slider-button-hover;
    }
    &-prev {
        left: 0;     
    }
    &-next {
        right: 0;
        transform: rotate(180deg);      
    }
}
</style>