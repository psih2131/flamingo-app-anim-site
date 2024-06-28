<template>
  <div class="blog-sec__pagination-row pagination">

    <NuxtLink :to="`/blog/page-${prevPage}`"  class="pagination__arrow-link pagination__arrow-link-prev">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8327 9.99935H4.16602M4.16602 9.99935L9.99935 15.8327M4.16602 9.99935L9.99935 4.16602" stroke="#4B5565" stroke-width="1.66667" stroke-linecap="square"/>
      </svg>
      <span>{{ $t('pagination_prev') }}</span>
    </NuxtLink>

    <div class="pagination__nambers-row" >
      <NuxtLink v-for="n in parseInt(totalPages)"  :to="`/blog/page-${n}`" class="pagination__number" :class="{'pagination__number_active':(currentPage == n)}">
        {{n}}
      </NuxtLink>
    </div>

    <div class="pagination__numbers-mob">Page <b>1</b> of <b>{{totalPages}}</b></div>


    <NuxtLink :to="`/blog/page-${nextPage}`" class="pagination__arrow-link pagination__arrow-link-next">
      <span>{{ $t('pagination_next') }}</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16602 9.99984H15.8327M15.8327 9.99984L9.99935 4.1665M15.8327 9.99984L9.99935 15.8332" stroke="#4B5565" stroke-width="1.66667" stroke-linecap="square"/>
      </svg>
    </NuxtLink>

  </div>
</template>

<script>
import {useAsyncData, useRouter, useRoute} from "nuxt/app";


export default {
  name: "pagination",
  data() {
    return {

    }
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  async setup() {
    const route = useRoute();
    let page_id = 1;

    if(route.params.pagenum) {
      page_id = route.params.pagenum;
    }

    return {
      page_id
    }
  },

  computed: {

    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },

    currentPage() {
      return parseInt(this.page_id) || 1;
    },

    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },

    nextPage() {
      return this.currentPage < this.totalPages
          ? this.currentPage + 1
          : this.totalPages;
    },
  },

}
</script>

<style scoped>

</style>
