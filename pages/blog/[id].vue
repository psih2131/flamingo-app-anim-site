<template>
    <main class="main blog-main">
        <section class="post-boby-sec">
            <div class="container">
                <div class="container-post">
                    <p class="post-boby-sec__date">Published 20 Jan 2024</p>
                    <h1 class="post-boby-sec__post-title">Stay on track with your visas! {{ $route.params.id }}</h1>
                    <p class="post-boby-sec__post-subtitle">Discover essential tips and tricks to manage your visas effectively while on the go with our visa tracking guide.</p>
                </div>

                <div class="post-boby-sec__image-wrapper">
                    <img :src="`/_nuxt/assets/images/img-${$route.params.id}.jpg`" alt="" class="post-boby-sec__image">
                </div>

                <div class="container-post">

                    <div class="post-boby-sec__main-info post-body">
                        <div class="post-body__small-description text-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
                        </div>

                        <div class="post-body__text text-container">
                            <h2>Introduction</h2>
                            <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                            <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                        </div>

                        <div class="post-body__image-wrapper">
                            <img :src="`/_nuxt/assets/images/img-${$route.params.id}.jpg`" alt="" class="post-body__image">
                            <p class="post-body__description">Image courtesy of Scott Webb via <a href="">Pexels</a></p>
                        </div>

                        <div class="post-body__autor">
                            <p class="post-body__autor-text">“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
                            <div class="post-body__autor-info">
                                <img :src="`/_nuxt/assets/images/img-${$route.params.id}.jpg`" alt="" class="post-body__autor-photo">
                                <p class="post-body__autor-name">Olivia Rhye</p>
                                <p class="post-body__autor-subname">Traveler</p>
                            </div>
                        </div>

                        <div class="post-body__text text-container">
                            <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                            <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                            <p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
                        </div>

                        <div class="post-body__white-text-background text-container">
                            <h2>Conclusion</h2>

                            <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                            <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                            <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
                        </div>
                    </div>


                    <div class="post-tag-row">
                        <p class="post-tag-row__element">Travel Tracker</p>
                        <p class="post-tag-row__element">Food</p>
                    </div>

                    <div class="post-btn-row">
                        <nuxt-link no-prefetch to="/blog" class="post-btn-row__btn">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 14L4.5 9M4.5 9L9.5 4M4.5 9H10.9C14.2603 9 15.9405 9 17.2239 9.65396C18.3529 10.2292 19.2708 11.1471 19.846 12.2761C20.5 13.5595 20.5 15.2397 20.5 18.6V20" stroke="#4C9BB6" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                            Back to the Articles
                        </nuxt-link>
                    </div>

                </div>

                
            </div>
        </section>


        <section class="related-posts related-posts-post-page">
            <div class="container">
                <div class="related-posts__header">
                    <div class="related-posts__header-text">
                        <h2 class="related-posts__title">Related Posts</h2>
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
                        <!-- <component__news_box :postId="item"/> -->
                    </swiper-slide>

                    <swiper-slide v-for="item in posts" :key="item" >
                        <!-- <component__news_box :postId="item"/> -->
                    </swiper-slide>

                </swiper>


            </div>
        </section>

    </main>
</template>



<script>

// import component__news_box from '@/components/component__news-box.vue'
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
            posts: [1,2,3,4,5,6]
        }
    },

    components: {
        Swiper,
      SwiperSlide,
    //   component__news_box,
    },

    setup() {
      return {
        modules: [Navigation, FreeMode, Pagination],
      };
    },

    methods: {

    },

    computed: {

    },

    watch: {

    },


    mounted(){

    },

}
</script>

