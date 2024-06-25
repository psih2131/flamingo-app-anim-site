<template>
    <main class="main blog-main">
        <section class="post-boby-sec">
            <div class="container">
                <div class="container-post">
                    <p class="post-boby-sec__date">Published {{ getDateParsed }}</p>
                    <h1 class="post-boby-sec__post-title">{{ blog.title }}</h1>
                    <p class="post-boby-sec__post-subtitle">{{ blog.dsc }}</p>
                </div>

                <div class="post-boby-sec__image-wrapper">
                    <img v-if="blog.hero_image_url.length > 10" :src="blog.hero_image_url" alt="" class="post-boby-sec__image">
                    <img v-if="blog.hero_image_url.length < 10" src="@/assets/images/img-5.jpg" alt="" class="post-boby-sec__image">
                </div>

                <div class="container-post">

                    <div class="post-boby-sec__main-info post-body" v-html="renderArticle"></div>

                    <div class="post-tag-row">
                        <p class="post-tag-row__element" 
                          v-for="tagId in blog.tags" 
                          :key="tagId" 
                          :set="foundTag = tags.find(t => t.id === tagId)" 
                          :style="{'color':'#' + foundTag.text_color, 'border-color':'#' + foundTag.border_color}"
                        >{{ foundTag.title }}</p>
                    </div>

                    <div class="post-btn-row">
                        <nuxt-link no-prefetch to="/blog" class="post-btn-row__btn">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 14L4.5 9M4.5 9L9.5 4M4.5 9H10.9C14.2603 9 15.9405 9 17.2239 9.65396C18.3529 10.2292 19.2708 11.1471 19.846 12.2761C20.5 13.5595 20.5 15.2397 20.5 18.6V20" stroke="#4C9BB6" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                            Back to the Articles
                        </nuxt-link>
                    </div>

                </div>

                
            </div>
        </section>


        <section class="related-posts related-posts-post-page">
            <div class="container">
                <div class="related-posts__header">
                    <div class="related-posts__header-text">
                        <h2 class="related-posts__title">Related Posts</h2>
                        <p class="related-posts__subtitle">The latest news, travel directions, tips and tricks from our team.</p>
                    </div>

                    <div class="related-posts__btn-wrapper">
                        <nuxt-link no-prefetch to="/blog" class="btnV1">
                            View all posts
                        </nuxt-link>
                        
                    </div>
                </div>

                
            </div>

            <div class="related-posts__slider posts-slider">

                <swiper
                    :slidesPerView="'auto'"
                    :spaceBetween="4"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="posts-slider__swiper"
                >   
                    <swiper-slide v-for="item in related_blogs" :key="item" >
                        <component__news_box :post="item" :tags="tags" />
                    </swiper-slide>

                    <!-- <swiper-slide v-for="item in posts" :key="item" > -->
                        <!-- <component__news_box :postId="item"/> -->
                    <!-- </swiper-slide> -->

                </swiper>


            </div>
        </section>

    </main>
</template>



<script>

// import component__news_box from '@/components/component__news-box.vue'
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default {
    data() {
        return {
            posts: [1,2,3,4,5,6]
        }
    },

    components: {
        Swiper,
      SwiperSlide,
    //   component__news_box,
    },

    async setup() {
      const route = useRoute();
      const router = useRouter();

      let blogId = route.params.id.split('-');

      const { data: { value: { blog, tags, related_blogs } }, error, execute, pending, refresh, status } = await useAsyncData('blogItem', () => $fetch('/api/blog' , {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: { blog_id: blogId.pop() }
      }))

      if (route.params.id !== `${blog.slug}-${blog.id}`) {
        router.replace({ path: `${blog.slug}-${blog.id}` });
      }

      return {
        modules: [Navigation, FreeMode, Pagination],
        blog,
        tags,
        related_blogs
      };
    },

    methods: {

    },

    computed: {
      getDateParsed(){
        const dayjs = useDayjs()
        return dayjs(this.blog.published_at).format('DD MMM YYYY');
      },
      renderArticle(){
        if (!this.blog.article || this.blog.article.length <= 0) return '-- empty article --'
        let blocks = {
            "text": "post-body__text text-container",
            "text_italic": "post-body__small-description text-container",
        }
        let result = '';
        for (let i = 0; i < this.blog.article.length; i++) {
            const block = this.blog.article[i];

            if (!block.block_type) return;
            let blockHtml = `<div class="${blocks[block.block_type]}">`;
            if (block.title) blockHtml += `<h2>${block.title}</h2>`;
            if (block.subtitle) blockHtml += `<h3>${block.subtitle}</h3>`;
            if (block.text) {
                let paragraphs = block.text.split('\n\n');
                for (let j = 0; j < paragraphs.length; j++) {
                    const p = paragraphs[j];
                    
                    blockHtml += `<p>${p}</p>`;
                }
            }
            blockHtml += `</div>`;
            result += blockHtml;
        }

        return result;
      }
    },

    watch: {

    },


    mounted() {
    },

}
</script>

