<template>
  <div class="blog-sec__pagination-row pagination">

    <a href="" class="pagination__arrow-link pagination__arrow-link-prev">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8327 9.99935H4.16602M4.16602 9.99935L9.99935 15.8327M4.16602 9.99935L9.99935 4.16602" stroke="#4B5565" stroke-width="1.66667" stroke-linecap="square"/>
      </svg>
      <span>Previous</span>
    </a>

    <div class="pagination__nambers-row">
      <a href="" class="pagination__number pagination__number_active">1</a>
      <a href="" class="pagination__number">2</a>
      <a href="" class="pagination__number">3</a>
      <a href="" class="pagination__number">4</a>
      <a href="" class="pagination__number">5</a>
    </div>
    <div class="pagination__numbers-mob">Page <b>1</b> of <b>10</b></div>

    <a href="" class="pagination__arrow-link pagination__arrow-link-next">
      <span>Next</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16602 9.99984H15.8327M15.8327 9.99984L9.99935 4.1665M15.8327 9.99984L9.99935 15.8332" stroke="#4B5565" stroke-width="1.66667" stroke-linecap="square"/>
      </svg>
    </a>

  </div>
</template>

<script>
export default {
  name: "show-pager-block.vue"
}
</script>

<style scoped>

</style>
