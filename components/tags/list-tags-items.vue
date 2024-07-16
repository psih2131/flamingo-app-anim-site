<template>

  <ul class="blog-sec__nav">
    <li class="blog-sec__nav-element">
      <nuxt-link :to="'/blog'" class="blog-sec__nav-link" :class="{'blog-sec__nav-link_active': (null == currentTag)}">Recent</nuxt-link>
    </li>
    <li class="blog-sec__nav-element" v-for="item in tags" :key="item.id">
      <nuxt-link
          v-if="item.is_in_menu" 
          :to="`/blog/tag/${item.id}`" 
          class="blog-sec__nav-link"  
          :class="{'blog-sec__nav-link_active' :(item.id == currentTag)}"
        >{{ item.title }}
      </nuxt-link>
    </li>
  </ul>

  <div class="blog-sec__nav-mob">

    <component__blog_mobile_custom_select :optionList="filterMenu(tags)"   />
    
    <!-- <select name="" id="" class="blog-sec__nav-list" @change="goTo" v-model="selectedTag">
      <option value="-1" :key="-1">{{ 'Recent' }}</option>
      <option v-for="item in filterMenu(tags)" :value="item.id" :key="item.id">{{ item.title }}</option>
    </select> -->
  </div>
</template>

<script>

import component__blog_mobile_custom_select from '@/components/component__blog-mobile-custom-select.vue'

// let selectedTag;
export default {
  name: "list-tags-items",
  props:{
    tags : {},
    currentTag : 0
  },

  data() {
    return {
      // selectedTag
    }
  },

  component: {
    component__blog_mobile_custom_select
  },

  computed: {
    filterMenu(){
      return (tags) => {return tags.filter(t => t.is_in_menu === true)}
    }
  },

  // async setup() {
  //   const route = useRoute();
  //   selectedTag = route.name.includes('blog-tag-tag') ? route.params.tag : -1;
  // },

  methods: {
    // goTo() {
    //   const router = useRouter();
    //   if (this.selectedTag > -1) {
    //     router.push({ path: `/blog/tag/${this.selectedTag}` });
    //   } else {
    //     router.push({ path: `/blog` });
    //   }
    //   return {}
    // }
  }
}
</script>

<style scoped>

</style>
