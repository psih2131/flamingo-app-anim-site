<template>
  <main class="main blog-main">
    <section class="blog-sec">
      <div class="container">
        <div class="blog-sec__teg-wrapper">
          <div class="blog-sec__teg">Stories and interviews. Page # {{page_num}}</div>
        </div>

        <TagsListTagsItems :tags="tags"/>

        <div class="blog-sec__news-container">
          <component__news_box v-for="item in blogs" :key="item"  :post="item" :tags="tags"/>
        </div>
        <pagination :total="getTotal" :perPage="per_page"/>

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
    return {}
  },

  async setup() {

    const route = useRoute();

    let page_num = route.params.pagenum;
    let per_page = 9;

    const { data: { value: { blogs, tags, blogs_qty } }, error, execute, pending, refresh, status } = await useAsyncData('blogspaging', () => $fetch('/api/blogs' , {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: { page : page_num, per_page : per_page }
    }))

    return {
      modules: [Navigation, FreeMode, Pagination],
      blogs,
      tags,
      blogs_qty,
      page_num,
      per_page,
    };
  },

  components: {
    component__news_box,
  },


  methods: {

  },

  computed: {
    getTotal() {
       return this.blogs_qty;
    }
  },

  watch: {

  },

  mounted(){

  },

}
</script>
