export default {
    getters: {
        slider_english(state) {
            return state.slider_english;
        },
        slider_english_theater(state) {
            return state.slider_english_theater;
        },
        slider_english_part_time(state) {
            return state.slider_english_part_time;
        },
        slider_chinese(state) {
            return state.slider_chinese;
        },
        master_classes(state) {
            return state.master_classes;
        },
        child_geography(state) {
            return state.child_geography;
        },
    },
    state: {

        slider_english: [
            { id: 1, img: 'english/gallery_1.jpg' },
            { id: 2, img: 'english/gallery_2.jpg' },
            { id: 3, img: 'english/gallery_3.jpg' },
            { id: 4, img: 'english/gallery_4.jpg' },
            { id: 5, img: 'english/gallery_5.jpg' },
            { id: 6, img: 'english/gallery_6.jpg' },
        ],

        slider_english_theater: [
            { id: 1, img: 'english/theater/gallery_1.jpg' },
            { id: 2, img: 'english/theater/gallery_2.jpg' },
            { id: 3, img: 'english/theater/gallery_3.jpg' },
            { id: 4, img: 'english/theater/gallery_4.jpg' },
            { id: 5, img: 'english/theater/gallery_5.jpg' },
            { id: 6, img: 'english/theater/gallery_6.jpg' },
            { id: 7, img: 'english/theater/gallery_7.jpg' },
        ],

        slider_english_part_time: [
            { id: 1, img: 'english/part-time/gallery_1.jpg' },
            { id: 2, img: 'english/part-time/gallery_2.jpg' },
            { id: 3, img: 'english/part-time/gallery_3.jpg' },
            { id: 4, img: 'english/part-time/gallery_4.jpg' },
            { id: 5, img: 'english/part-time/gallery_5.jpg' },
            { id: 6, img: 'english/part-time/gallery_6.jpg' },
            { id: 7, img: 'english/part-time/gallery_7.jpg' },
            { id: 8, img: 'english/part-time/gallery_8.jpg' },
            { id: 9, img: 'english/part-time/gallery_9.jpg' },
            { id: 10, img: 'english/part-time/gallery_10.jpg' },
        ],

        slider_chinese: [
            { id: 1, img: 'chinese/gallery_1.jpg'},
            { id: 2, img: 'chinese/gallery_2.jpg'},
            { id: 3, img: 'chinese/gallery_3.jpg'},
            { id: 4, img: 'chinese/gallery_4.jpg'},
            { id: 5, img: 'chinese/gallery_5.jpg'},
        ],

        master_classes: [
            { id: 1, img: 'master-classes/gallery_1.jpg'},
            { id: 2, img: 'master-classes/gallery_2.jpg'},
            { id: 3, img: 'master-classes/gallery_3.jpg'},
        ],

        child_geography: [
            { id: 1, img: 'theme-intensives/child-geography/gallery_1.jpg' },
            { id: 2, img: 'theme-intensives/child-geography/gallery_2.jpg' },
            { id: 3, img: 'theme-intensives/child-geography/gallery_3.jpg' },
            { id: 4, img: 'theme-intensives/child-geography/gallery_4.jpg' },
            { id: 5, img: 'theme-intensives/child-geography/gallery_5.jpg' },
            { id: 6, img: 'theme-intensives/child-geography/gallery_6.jpg' },
            { id: 7, img: 'theme-intensives/child-geography/gallery_7.jpg' },
            { id: 8, img: 'theme-intensives/child-geography/gallery_8.jpg' },
            { id: 9, img: 'theme-intensives/child-geography/gallery_9.jpg' },            
        ]
    }
}