<template>

  <ul class="blog-sec__nav">
    <li class="blog-sec__nav-element">
      <a href="" class="blog-sec__nav-link">Recent</a>
    </li>
    <li class="blog-sec__nav-element" v-for="item in tags" :key="item.id">
      <NuxtLink  v-if="item.is_in_menu" :to="`/blog/tag/${item.id}`" class="blog-sec__nav-link"  :class="{'blog-sec__nav-link_active' :(item.id == currentTag)}">{{ item.title }}</NuxtLink>
    </li>
  </ul>

  <div class="blog-sec__nav-mob">
    <select name="" id="" class="blog-sec__nav-list" >
      <option value=""><a href="">Recent</a></option>
      <option value="" v-for="item in tags" :key="item.id">
        <NuxtLink  :to="`/blog/tag/${item.id}`"  v-if="item.is_in_menu"  :class="{'blog-sec__nav-link_active' :(item.id == currentTag)}">{{ item.title }}</NuxtLink>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "list-tags-items",
  props:{
    tags : {},
    currentTag : 0
  },
}
</script>

<style scoped>

</style>
