<template>
    <main class="main home-main">

        <section class="faq-sec">
            <div class="container">
                <h2 class="faq-sec__title">Frequently Asked Questions</h2>
                <p class="faq-sec__subtitle">Everything you need to know.</p>

                <!-- faq-sec__element_active -->
                <div class="faq-sec__wrapper" >

                    <div v-for="(item, index) in faq" :key="index" 
                        :class="['faq-sec__element', { 'faq-sec__element_active ': activeIndex === index }]"
                        @click="toggleActive(index)">
                        <div class="faq-sec__element-header">
                        <div class="faq-sec__element-header-icon-wrapper">
                            <div class="faq-l faq-X"></div>
                            <div class="faq-l faq-Y"></div>
                        </div>
                        <p class="faq-sec__element-header-title">{{ item.question }}</p>
                        </div>
                        <div class="faq-sec__element-body">
                        {{ item.ansver }}
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="blog-home-sec">
            <div class="container">
                <div class="related-posts__header">
                    <div class="related-posts__header-text">
                        <h2 class="related-posts__title">Blog</h2>
                        <p class="related-posts__subtitle">The latest news, travel directions, tips and tricks from our team.</p>
                    </div>

                    <div class="related-posts__btn-wrapper">
                        <nuxt-link no-prefetch to="/blog" class="btnV1">
                            View all posts
                        </nuxt-link>
                        
                    </div>
                </div>
            </div>

            <div class="related-posts__slider posts-slider">

                <swiper
                    :slidesPerView="'auto'"
                    :spaceBetween="4"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="posts-slider__swiper"
                >   
                    <swiper-slide v-for="item in posts" :key="item" >
                        <component__news_box :postId="item"/>
                    </swiper-slide>

                    <swiper-slide v-for="item in posts" :key="item" >
                        <component__news_box :postId="item"/>
                    </swiper-slide>

                </swiper>

            </div>
        </section>

        <section class="help-list-sec">
            <div class="container">
                <div class="help-list-sec__title-wrapper">
                    <h2 class="help-list-sec__title">Flamingo Helps You with</h2>
                    <div class="help-list-sec__icon-wrapper">
                        <svg width="244" height="241" viewBox="0 0 244 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.96094 125.984C13.1068 91.247 45.9455 26.5432 96.1329 45.6255C158.867 69.4783 99.736 206.092 61.3309 189.25C24.6401 173.16 48.2835 64.1416 115.186 45.6255C180.76 27.4768 195.579 99.887 188.028 141.819C180.477 183.751 154.723 225.339 127.941 210.216C90.9576 189.332 134.465 62.0355 240.561 50.0497M240.561 50.0497L215.567 82.0426M240.561 50.0497L201.681 37.23" stroke="white" stroke-width="3.45" stroke-linecap="square"/>
                        </svg>                            
                    </div>
                </div>
                <div class="help-list-sec__list-wrapper">
                    <div class="help-list-sec__element" v-for="item in helpListArray" :key="item">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.74967 14.7502L12.2497 18.2502L19.2497 11.2502M25.6663 14.7502C25.6663 21.1935 20.443 26.4168 13.9997 26.4168C7.55635 26.4168 2.33301 21.1935 2.33301 14.7502C2.33301 8.30684 7.55635 3.0835 13.9997 3.0835C20.443 3.0835 25.6663 8.30684 25.6663 14.7502Z" stroke="#0E9384" stroke-width="2.33333" stroke-linecap="square"/>
                        </svg>                            
                        <p class="help-list-sec__element-text">
                            {{ item }}
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section class="download-sec">
            <div class="container">
                <div class="download-sec__info">
                    <h2 class="download-sec__title">Download<br>Flamingo Now</h2>
                    <p class="download-sec__subtitle">An essential tool for global expats, permanent residents, overseas homeowners and frequent travelers.</p>
                    <div class="download-sec__row">

                        <a href="" class="header__download-ios">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_16227)">
                                <path d="M20.8418 17.6447C20.5091 18.4133 20.1153 19.1208 19.659 19.7713C19.0371 20.658 18.5278 21.2719 18.1354 21.6127C17.527 22.1722 16.8752 22.4587 16.1772 22.475C15.6761 22.475 15.0718 22.3324 14.3683 22.0432C13.6626 21.7553 13.014 21.6127 12.421 21.6127C11.7991 21.6127 11.132 21.7553 10.4185 22.0432C9.70396 22.3324 9.12831 22.4832 8.68819 22.4981C8.01884 22.5266 7.35166 22.2319 6.68571 21.6127C6.26066 21.242 5.72901 20.6064 5.09212 19.7061C4.40878 18.7446 3.84698 17.6297 3.40686 16.3587C2.93551 14.9857 2.69922 13.6563 2.69922 12.3692C2.69922 10.8948 3.0178 9.62321 3.65592 8.5576C4.15742 7.70166 4.82459 7.02647 5.65962 6.53081C6.49464 6.03514 7.39688 5.78256 8.36852 5.7664C8.90017 5.7664 9.59736 5.93085 10.4637 6.25405C11.3277 6.57834 11.8824 6.74279 12.1256 6.74279C12.3075 6.74279 12.9237 6.5505 13.9684 6.16714C14.9564 5.81162 15.7902 5.66441 16.4732 5.7224C18.3241 5.87178 19.7147 6.60142 20.6395 7.91595C18.9841 8.91896 18.1653 10.3238 18.1816 12.126C18.1965 13.5297 18.7057 14.6979 19.7066 15.6254C20.1601 16.0558 20.6667 16.3885 21.2302 16.6248C21.108 16.9793 20.979 17.3188 20.8418 17.6447ZM16.5968 0.940125C16.5968 2.04038 16.1948 3.06768 15.3936 4.01854C14.4267 5.14892 13.2572 5.80211 11.989 5.69904C11.9729 5.56705 11.9635 5.42812 11.9635 5.28214C11.9635 4.2259 12.4233 3.09552 13.2399 2.17127C13.6475 1.70331 14.166 1.31421 14.7948 1.00381C15.4221 0.69805 16.0156 0.528957 16.5737 0.5C16.59 0.647086 16.5968 0.794182 16.5968 0.940111V0.940125Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_16227">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            Download    
                        </a>

                        <svg width="178" height="67" viewBox="0 0 178 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 57.0616C3 57.0616 20.6382 -3.89489 54.2235 5.34457C87.8088 14.584 71.0277 68.9085 54.1679 64.7761C37.3127 60.6378 52.2405 4.37581 87.4011 7.79052C122.562 11.2052 113.471 63.1974 95.0086 62.1149C76.5411 61.0385 99.2495 15.5311 116.59 4.09473C138.79 -10.547 116.59 57.0616 175 37.3418M175 37.3418C166.381 31.9384 152.93 23.5054 152.93 23.5054M175 37.3418C167.295 45.0429 162.976 49.3606 155.271 57.0616" stroke="white" stroke-width="3.45" stroke-linecap="square"/>
                        </svg> 
                        
                        <div class="download-sec__qr">
                            <img src="@/assets/images/qr.png" alt="" class="download-sec__qr-img">
                        </div>
                    </div>
                </div>
                <div class="download-sec__phone-wrapper">
                    <img src="@/assets/images/phone.png" alt="" class="download-sec__phone">
                    <img src="@/assets/images/green-buble.png" alt="" class="download-sec__bable">
                </div>
            </div>
        </section>


    </main>
</template>



<script>

import component__news_box from '@/components/component__news-box.vue'
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import {Navigation, FreeMode, Pagination } from 'swiper/modules';

export default {
    data() {
        return {
            posts: [1,2,3,4,5,6],
            helpListArray: [
                'USA Substantial Presence Test and Physical Presence Test',
                'USA Substantial Presence Test and Physical Presence Test',
                'UK Statutory Residence Test',
                'UK Statutory Residence Test',
                'EU Schengen Area tracking, 90 in 180 days rule',
                'Cyprus residency day counting',
                'Canada residence / physical presence requirements',
                'Israel residency',
                'Puerto Rico Act 60 (act 20/22) day counting',
                'The international 183-day rule',
                'India residence status day counting',
                'Tracking of permitted visa stay time and expiration date to prevent overstays',
                'International health insurance for expats',
                'US & UK tax residency requirements',
            ],

            faq: [
                {'question': 'What is Flamingo Tracker 1?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 2?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 3?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 4?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 5?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 6?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
            ],
            activeIndex: null,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        component__news_box,
    },

    setup() {
      return {
        modules: [Navigation, FreeMode, Pagination],
        
      };
    },

    methods: {
        toggleActive(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
    },

    computed: {

    },

    watch: {

    },


    mounted(){

    },

}
</script>
