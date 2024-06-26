<template>
  <div class="news-box">
    <nuxt-link :to="pageUrl" class="news-box__img-wrapper">
        <!-- todo: clenup temp images -->
        <img v-if="post.hero_image_url.length > 10" :src="post.hero_image_url" alt="" class="news-box__img">
        <img v-else src="@/assets/images/img-5.jpg" alt="" class="news-box__img">
    </nuxt-link>
    <div class="news-box__info">
        <p class="news-box__date">{{ getDateParsed }}</p>
        <h3 class="news-box__title">
            <nuxt-link :to="pageUrl" class="news-box__title-link">
                {{ post.title }}
                <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3335 21L17.3335 11M17.3335 11H7.3335M17.3335 11V21" stroke="#121926" stroke-width="2" stroke-linecap="square"/>
                </svg>
            </nuxt-link>
        </h3>
        <p class="news-box__subtitle">{{ post.dsc }}</p>
        <div class="news-box__tag-row">
            <div class="news-box__tag" 
                v-for="tagId in post.tags" 
                :key="tagId" 
                :set="foundTag = tags.find(t => t.id === tagId)"
                :style="{'color':'#' + foundTag.text_color, 'border-color':'#' + foundTag.border_color}"
            >{{ foundTag.title }}</div>
        </div>
    </div>
  </div>
</template>


<script>

import { useDayjs } from '#dayjs'

export default {
    data() {
        return {
            imgUrl: '',
            pageUrl: '/blog/' + this.post.slug + '-' + this.post.id
        }
    },

    components: {

    },

    props:{
        post :  {},
        tags :  Array
    },


    methods: {
        goTo(postId){
            this.$router.push('/blog/' + postId)
        }
    },

    computed: {
      getDateParsed(){
        const dayjs = useDayjs()
        return dayjs(this.post.published_at).format('DD MMM YYYY');
      }
    },

    watch: {

    },

    mounted(){

    },

}
</script>
