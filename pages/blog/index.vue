<template>
    <main class="main blog-main">
        <section class="blog-sec">
            <div class="container">
                <div class="blog-sec__teg-wrapper">
                    <div class="blog-sec__teg">Stories and interviews</div>
                </div>
                <h1 class="blog-sec__title">Blog</h1>
                <p class="blog-sec__subtitle">The latest news, travel directions, tips and tricks from our team.</p>
                <ul class="blog-sec__nav">
                    <li class="blog-sec__nav-element">
                        <a href="" class="blog-sec__nav-link blog-sec__nav-link_active">Recent</a>
                    </li>
                    <li class="blog-sec__nav-element">
                        <a href="" class="blog-sec__nav-link">Visa Managment</a>
                    </li>
                    <li class="blog-sec__nav-element">
                        <a href="" class="blog-sec__nav-link">Travel Tracker</a>
                    </li>
                    <li class="blog-sec__nav-element">
                        <a href="" class="blog-sec__nav-link">Travel Planning</a>
                    </li>
                    <li class="blog-sec__nav-element">
                        <a href="" class="blog-sec__nav-link">Fun</a>
                    </li>
                    <li class="blog-sec__nav-element">
                        <a href="" class="blog-sec__nav-link">Food</a>
                    </li>
                </ul>
                <div class="blog-sec__nav-mob">
                    <select name="" id="" class="blog-sec__nav-list">
                        <option value=""><a href="">Recent</a></option>
                        <option value=""><a href="">Visa Managment</a></option>
                        <option value=""><a href="">Travel Tracker</a></option>
                        <option value=""><a href="">Fun</a></option>
                    </select>
                </div>

                <div class="blog-sec__news-container">
                    <component__news_box v-for="item in posts" :key="item"  :postId="item"/>
                </div>
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
            </div>
        </section>

   </main>
</template>


<script>
import component__news_box from '@/components/component__news-box.vue'

export default {
    data() {
        return {
            posts: [1,2,3,4,5,6]
        }
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