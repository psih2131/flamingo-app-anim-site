<template>
  <main class="main blog-main">

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
      body: { page_num : _page_num, per_page: this._per_page }
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
