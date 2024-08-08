<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="footer__top-info">

                    <nuxt-link no-prefetch :to="localePath('/')" class="footer__logo">
                        <img src="@/assets/images/logo.png" alt="" class="footer__logo-img">
                    </nuxt-link>

                    <p class="footer__info-text">
                        {{ $t('footer_text') }}
                        <br><br>
                        {{ $t('footer_text2') }}
                    </p>
                </div>
                <nav class="footer__top-nav">
                    <ul class="footer__top-nav-list">
                        <li class="footer__top-nav-list-element">
                            <nuxt-link no-prefetch :to="localePath('/#ourUsers')" class="footer__nav-element-link">{{ $t('ourusers') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element">
                          <nuxt-link no-prefetch :to="localePath('/legal')" class="footer__nav-element-link">{{ $t('privacy_notice') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element">
                            <nuxt-link no-prefetch :to="localePath('/#Features')" class="footer__nav-element-link">{{ $t('features') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element">
                          <nuxt-link no-prefetch :to="localePath('/terms-of-use')" class="footer__nav-element-link">{{ $t('terms_of_use') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element">
                            <nuxt-link no-prefetch :to="localePath('/#Security')" class="footer__nav-element-link">{{ $t('security') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element">
                            <nuxt-link no-prefetch :to="localePath('/contact-us')" class="footer__nav-element-link">{{ $t('contact_support_link') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element">
                          <nuxt-link no-prefetch :to="localePath('/blog')" class="footer__nav-element-link">{{ $t('blog') }}</nuxt-link>
                        </li>
                        <li class="footer__top-nav-list-element"></li>
                        <li class="footer__top-nav-list-element">
                            <nuxt-link no-prefetch :to="localePath('/#Faq')" class="footer__nav-element-link">{{ $t('faq_short') }}</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <div class="footer__developer-row">
                    <div class="footer__developer">
                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="24" fill="#9AA4B2"/>
                            <mask id="mask0_1_16604" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="24">
                            <path d="M0 0V24H48V0H0Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_1_16604)">
                            <path d="M0.00012207 0V24H48.0001V0H0.00012207Z" fill="#CDD5DF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6328 11.9999L-1.07397 2.14652L1.07265 -2.14673L23.9993 9.31662L46.926 -2.14673L49.0727 2.14652L29.3659 11.9999L49.0727 21.8533L46.926 26.1465L23.9993 14.6832L1.07265 26.1465L-1.07397 21.8533L18.6328 11.9999Z" fill="white"/>
                            <mask id="mask1_1_16604" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="24">
                            <path d="M24.0001 12H48.0001V24L24.0001 12ZM24.0001 12V24H0.00012207L24.0001 12ZM24.0001 12H0.00012207V0L24.0001 12ZM24.0001 12V0H48.0001L24.0001 12Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask1_1_16604)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4231 11.9999L-0.714722 1.43101L0.716362 -1.43115L24.0008 10.2111L47.2853 -1.43115L48.7164 1.43101L27.5785 11.9999L48.7164 22.5688L47.2853 25.431L24.0008 13.7888L0.716362 25.431L-0.714722 22.5688L20.4231 11.9999Z" fill="#9AA4B2"/>
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 8V0H28.0001V8H48.0001V16H28.0001V24H20.0001V16H0.00012207V8H20.0001Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6001 9.6V0H26.4001V9.6H48.0001V14.4H26.4001V24H21.6001V14.4H0.00012207V9.6H21.6001Z" fill="#9AA4B2"/>
                            </g>
                        </svg>
                        <p class="footer__developer-text">{{ $t('footer_made_in') }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__down">
            <div class="container">
                <p class="footer__copy">
                  {{ $t('footer_copyright') }} <br> {{ $t('footer_copyright2') }} <br> {{ $t('footer_copyright3') }}
                </p>

                <component__footer_social />
            </div>
        </div>
    </footer>
</template>


<script>
import component__footer_social from '@/components/component__footer-social.vue'

export default {
    data() {
        return {

        }
    },

    components: {
        component__footer_social,
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
