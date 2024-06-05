<template>
  <div class="news-box">
    <a :href="pageUrl" class="news-box__img-wrapper">
        <img :src="`/_nuxt/assets/images/img-${postId}.jpg`" alt="" class="news-box__img">
    </a>
    <div class="news-box__info">
        <p class="news-box__date">17 Jan 2024</p>
        <h3 class="news-box__title">
            <a :href="pageUrl" class="news-box__title-link">
                Keep track of your visa days hassle-free! {{ postId }}
                <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3335 21L17.3335 11M17.3335 11H7.3335M17.3335 11V21" stroke="#121926" stroke-width="2" stroke-linecap="square"/>
                </svg>    
            </a>
        </h3>
        <p class="news-box__subtitle">Mental models are simple expressions of complex processes or relationships.</p>
        <div class="news-box__tag-row">
            <div class="news-box__tag">Visa Managment</div>
        </div>
    </div>
  </div>
</template>


<script>


export default {
    data() {
        return {
            imgUrl: '',
            pageUrl: '/blog/' + this.postId
        }
    },

    components: {
    },

    props:{
        postId: String,
    },


    methods: {
        goTo(postId){
            this.$router.push('/blog/' + postId)
        }
    },

    computed: {

    },

    watch: {

    },

    mounted(){

    },

}
</script>