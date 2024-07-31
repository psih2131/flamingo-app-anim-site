<template>
    <Head>
        <Title>{{ blog.title }} | Flamingo App</Title>
        <Meta name="description" :content="`${blog.meta_dsc || blog.dsc}`" />
        <Meta name="og:title" :content="`${blog.title} | Flamingo App`" />
        <Meta name="og:description" :content="`${blog.meta_dsc || blog.dsc}`" />
        <Meta name="og:image" :content="`https://ma-artist-images-service.herokuapp.com/crop-image?image_url=${blog.hero_image_url}`" />
        <Meta name="og:url" :content="`https://flamingotracker.com${$route.fullPath}`" />
        <Meta name="twitter:title" :content="`${blog.title} | Flamingo App`" />
        <Meta name="twitter:description" :content="`${blog.meta_dsc || blog.dsc}`" />
        <Meta name="twitter:image" :content="`https://ma-artist-images-service.herokuapp.com/crop-image?image_url=${blog.hero_image_url}`" />
        <Meta name="twitter:card" :content="'summary'" />
    </Head>
    <main class="main blog-main">
        <section class="post-boby-sec">
            <div class="container">
                <div class="container-post">
                    <p class="post-boby-sec__date">{{ $t('blog_published') }} {{ getDateParsed }}</p>
                    <h1 class="post-boby-sec__post-title">{{ blog.title }}</h1>
                    <p class="post-boby-sec__post-subtitle">{{ blog.dsc }}</p>
                </div>

                <div class="post-boby-sec__image-wrapper">
                    <img v-if="blog.hero_image_url.length > 10" :src="blog.hero_image_url" alt="" class="post-boby-sec__image">
                    <img v-else src="@/assets/images/img-5.jpg" alt="" class="post-boby-sec__image">
                </div>

                <div class="container-post">
                    <div class="post-body__image-wrapper" v-if="blog.article && blog.article.length > 0 && blog.article[0].block_type === 'hero_image_credential'">
                        <p class="post-body__description" v-html="getParsedUrl(blog.article[0].credential)"></p>
                    </div>
                    <div class="post-boby-sec__main-info post-body" v-html="getParsedBold(getParsedUrl(renderArticle))"></div>

                    <div class="post-tag-row" :set="foundTag = []">
                        <nuxt-link class="post-tag-row__element"
                          v-for="tagId in blog.tags"
                          :key="tagId"
                          :set="foundTag[tagId] = tags.find(t => t.id === tagId)"
                          :style="{'color':'#' + foundTag[tagId].text_color, 'border-color':'#' + foundTag[tagId].border_color}"
                          :to="`/blog/tag/${foundTag[tagId].id}`"
                        >{{ foundTag[tagId].title }}</nuxt-link>
                    </div>

                    <div class="post-btn-row">
                        <nuxt-link no-prefetch to="/blog" class="post-btn-row__btn">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 14L4.5 9M4.5 9L9.5 4M4.5 9H10.9C14.2603 9 15.9405 9 17.2239 9.65396C18.3529 10.2292 19.2708 11.1471 19.846 12.2761C20.5 13.5595 20.5 15.2397 20.5 18.6V20" stroke="#4C9BB6" stroke-width="2" stroke-linecap="square"/>
                            </svg>
                            {{ $t('blog_back') }}
                        </nuxt-link>
                    </div>

                </div>


            </div>
        </section>


        <section class="related-posts related-posts-post-page" v-if="related_blogs && related_blogs.length > 0">
            <div class="container">
                <div class="related-posts__header">
                    <div class="related-posts__header-text">
                        <h2 class="related-posts__title">{{ $t('blog_related') }}</h2>
                        <p class="related-posts__subtitle">{{ $t('blog_text_2') }}</p>
                    </div>

                    <div class="related-posts__btn-wrapper">
                        <nuxt-link no-prefetch :to="localePath('/blog')" class="btnV1">
                            {{ $t("blog_view_all") }}
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
        resizeSliderNewsHeight(){
        let boxes = document.querySelectorAll('.news-box');
        let maxHeight = 0;

        // Сброс высоты, чтобы измерить естественную высоту элементов
        boxes.forEach(box => {
            box.style.height = 'auto';
        });

        // Найти максимальную высоту
        boxes.forEach(box => {
            if (box.offsetHeight > maxHeight) {
            maxHeight = box.offsetHeight;
            }
        });

        // Установить максимальную высоту для всех элементов
        boxes.forEach(box => {
            box.style.height = `${maxHeight}px`;
        });
        }
    },

    computed: {
      getParsedUrl(){
        return (text) => {if (!text) { return text } else return text.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" rel="noopener ugc nofollow" target="_blank">$1</a>')};
      },
      getParsedBold(){
        return (text) => {if (!text) { return text } else return text.replace(/\*\*([^\]!*]+)\*\*/g, '<b>$1</b>')};
      },
      getDateParsed(){
        const dayjs = useDayjs()
        return dayjs(this.blog.published_at).format('DD MMM YYYY');
      },
      renderArticle(){
        if (!this.blog.article || this.blog.article.length <= 0) return '-- empty article --'
        let blocks = {
            "text": "post-body__text text-container",
            "text_italic": "post-body__text_italic text-container",
            "hr": "post-body__small-description text-container",
            "text_highlight": "post-body__white-text-background text-container",
            "image": "post-body__image-wrapper",
            "quote": "post-body__autor",
        }
        let result = '';
        for (let i = 0; i < this.blog.article.length; i++) {
            const block = this.blog.article[i];

            if (!block.block_type || !blocks[block.block_type]) continue;
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
            if (block.block_type === 'image') {
                if (block.image_url) blockHtml += `<img alt="article_image_${i}" class="post-body__image" src="${block.image_url}">`;
                if (block.credential) blockHtml += `<p class="post-body__description">${block.credential}</p>`;
            }
            if (block.block_type === 'quote') {
                if (block.quote) blockHtml += `<p class="post-body__autor-text">${block.quote}</p>`;
                if (block.author || block.author_dsc || block.author_dsc) {
                    blockHtml += `<div class="post-body__autor-info">`;
                    if (block.author_avatar) blockHtml += `<img alt="article_image_${i}" class="post-body__autor-photo" src="${block.author_avatar}">`;
                    if (block.author) blockHtml += `<p class="post-body__autor-name">${block.author}</p>`;
                    if (block.author_dsc) blockHtml += `<p class="post-body__autor-subname">${block.author_dsc}</p>`;
                    blockHtml += `</div>`;
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
        this.resizeSliderNewsHeight()
    },

}
/*
[
  {
    "block_type": "hero_image_credential",
    "credential": "Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)"
  },{
    "block_type": "quote",
    "quote":"“In a world older and more **complete than** ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    "author":"Olivia Rhye",
    "author_dsc":"Traveler",
    "author_avatar":"https://flamingo-blog-73266e011475.herokuapp.com/_nuxt/x1.Dsee2Vvg.png"
  },{
    "block_type": "text_italic",
    "title":"Understanding the 90/180 Rule",
    "subtitle":"The 180-day period keeps ‘rolling’",
    "text": "The 90/180 rule is a regulation that applies to non-European Union citizens traveling to the Schengen Area.<br>◾ list item 1\n\n◾ list item 2\n\n◾ list item 3",
  },{
    "block_type": "image",
    "image_url":"https://bucketeer-d6e4e59e-ad1d-4fcd-8e39-ddb579eec238.s3.amazonaws.com/public/flamingo/blogs/hero_170_1.jpg",
    "credential": "Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)"
  },{
    "block_type": "text_highlight",
    "title": "Conclusion",
    "text": "Although tax residency is far from simple, by having a knowledgeable tax advisor, a reliable trip itinerary planner app, and a basic understanding of tax residency rules, you’re well-equipped to make informed decisions about your taxes."
  },{
    "block_type": "hr"
  }
]

<div class="post-body__small-description text-container"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p></div><div class="post-body__text text-container"><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p></div><div class="post-body__image-wrapper"><img :src="`/_nuxt/assets/images/img-${$route.params.id}.jpg`" alt="" class="post-body__image"><p class="post-body__description">Image courtesy of Scott Webb via <a href="">Pexels</a></p></div><div class="post-body__autor"><p class="post-body__autor-text">“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p><div class="post-body__autor-info"><img :src="`/_nuxt/assets/images/img-${$route.params.id}.jpg`" alt="" class="post-body__autor-photo"><p class="post-body__autor-name">Olivia Rhye</p><p class="post-body__autor-subname">Traveler</p></div></div><div class="post-body__text text-container"><p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p><p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p><p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p></div><div class="post-body__white-text-background text-container"><h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p></div>
*/
</script>

