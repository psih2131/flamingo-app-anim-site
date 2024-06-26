<template>
  <main class="main blog-main">
    <section class="blog-sec">
      <div class="container">
        <div class="blog-sec__teg-wrapper">
          <div class="blog-sec__teg">Stories and interviews</div>
        </div>
        <h1 class="blog-sec__title">Blog</h1>
        <p class="blog-sec__subtitle">The latest news, travel directions, tips and tricks from our team.</p>
        <ul class="blog-sec__nav">
          <li class="blog-sec__nav-element">
            <a href="" class="blog-sec__nav-link blog-sec__nav-link_active">Recent</a>
          </li>
          <li class="blog-sec__nav-element"  v-for="item in tags">
            <a v-if="item.is_in_menu" href="" class="blog-sec__nav-link" :style="{ color : '#' + item.text_color }">{{ item.title }}</a>
          </li>
        </ul>

        <div class="blog-sec__nav-mob">
          <select name="" id="" class="blog-sec__nav-list" >
            <option value=""><a href="">Recent</a></option>
            <option value=""  v-for="item in tags"><a href="" v-if="item.is_in_menu" >{{ item.title }}</a></option>
          </select>
        </div>

        <div class="blog-sec__news-container">
          <component__news_box v-for="item in blogs" :key="item"  :post="item" :tags="tags"/>
        </div>


        <PagerShowPagerBlock />

      </div>
    </section>

  </main>
</template>


<script>
import component__news_box from '@/components/component__news-box.vue'

import {FreeMode, Navigation, Pagination} from "swiper/modules";
import {useAsyncData} from "nuxt/app";

export default {
  data() {
    let _per_page = 6;
  },

  async setup() {
    const route = useRoute();

    let _page_num = route.params.id;

    const { data: { value: { blogs, tags } }, error, execute, pending, refresh, status } = await useAsyncData('blogsTagsLib', () => $fetch('/api/blogs' , {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: { page_num  : _page_num, per_page : this._per_page }
    }))

    const current_page = ref(1)

    return {
      modules: [Navigation, FreeMode, Pagination],
      blogs,
      tags,
      current_page,
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
