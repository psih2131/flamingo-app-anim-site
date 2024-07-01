<template>
  <section class="blog-home-sec">
    <div class="container">
      <div class="related-posts__header">
        <div class="related-posts__header-text">
          <h2 class="related-posts__title">{{ $t('blog') }}</h2>
          <p class="related-posts__subtitle">{{ $t('blog_text') }}</p>
        </div>
        <div class="related-posts__btn-wrapper">
          <nuxt-link no-prefetch to="/blog" class="btnV1">
            {{ $t('blog_view_all') }}
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
        <swiper-slide v-for="item in blogs" :key="item" >
          <component__news_box :post="item" :tags="tags" />
        </swiper-slide>

      </swiper>

    </div>

    <div class="related-posts__btn-wrapper-mob">
      <div class="container">
        <nuxt-link no-prefetch to="/blog" class="btnV1">
          {{ $t('blog_view_all') }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

// import required modules
import {Navigation, FreeMode, Pagination } from 'swiper/modules';

import component__news_box from '@/components/component__news-box.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {useFetch, useRuntimeConfig, useAsyncData} from "nuxt/app";

export default {
  name: "blog-on-main",
  data() {
    return {
      posts: ["1","2"],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    component__news_box,
  },
  methods: {
    resizeSliderNewsHeight(){
      let boxes = document.querySelectorAll('.news-box');
      let maxHeight = 0;

      // Сброс высоты, чтобы измерить естественную высоту элементов
      boxes.forEach(box => {
        box.style.height = 'auto';
      });

      // Найти максимальную высоту
      boxes.forEach(box => {
        if (box.offsetHeight > maxHeight) {
          maxHeight = box.offsetHeight;
        }
      });

      // Установить максимальную высоту для всех элементов
      boxes.forEach(box => {
        box.style.height = `${maxHeight}px`;
      });
    }
  },

  mounted(){
    this.resizeSliderNewsHeight()
  },

  async setup() {
    const { data: { value: { blogs, tags } }, error, execute, pending, refresh, status } = await useAsyncData('blogsTags', () => $fetch('/api/blogs' , {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: { page_num  : 1, per_page : 6 }
    }))

    return {
      modules: [Navigation, FreeMode, Pagination],
      blogs,
      tags
    };
  },
}
</script>

<style scoped>

</style>
