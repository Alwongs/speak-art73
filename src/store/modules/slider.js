export default {
    getters: {
        slider_english(state) {
            return state.slider_english;
        },
        slider_english_theater(state) {
            return state.slider_english_theater;
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
    },
    mutations: {
    }
}