<template>
  <main class="main blog-main">
    <section class="blog-sec">
      <div class="container">
        <div class="blog-sec__teg-wrapper">
          <div class="blog-sec__teg">Stories and interviews. Page # {{page_num}}</div>
        </div>
        <ul class="blog-sec__nav">
          <li class="blog-sec__nav-element">
            <a href="" class="blog-sec__nav-link blog-sec__nav-link_active">Recent</a>
          </li>
          <li class="blog-sec__nav-element" v-for="item in tags" :key="item.id">
            <a v-if="item.is_in_menu" href="" class="blog-sec__nav-link" :style="{ color : '#' + item.text_color }">{{ item.title }}</a>
          </li>
        </ul>
        <div class="blog-sec__nav-mob">
          <select name="" id="" class="blog-sec__nav-list" >
            <option value=""><a href="">Recent</a></option>
            <option value="" v-for="item in tags" :key="item.id"><a href="" v-if="item.is_in_menu" >{{ item.title }}</a></option>
          </select>
        </div>

        <div class="blog-sec__news-container">
          <component__news_box v-for="item in blogs" :key="item"  :post="item" :tags="tags"/>
        </div>

        <pagination />

      </div>

    </section>

  </main>
</template>


<script>
import component__news_box from '@/components/component__news-box.vue'

import {FreeMode, Navigation, Pagination} from "swiper/modules";
import {useAsyncData, useRoute} from "nuxt/app";

export default {
  data() {

  },

  async setup() {

    const route = useRoute();

    let page_num = route.params.pagenum;
    let per_page = 6;

    const { data: { value: { blogs, tags } }, error, execute, pending, refresh, status } = await useAsyncData('blogspaging', () => $fetch('/api/blogs' , {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: { page : page_num, per_page : per_page }
    }))

    return {
      modules: [Navigation, FreeMode, Pagination],
      blogs,
      tags,
      page_num,
    };
  },

  components: {
    component__news_box,
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
