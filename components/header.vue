<template>
    <header class="header" :class="{ 'header_active': isScrolled, 'header_mob-meny-active': mobMenyStatus }">
        <div class="container">
            <div class="header__logo-wrapper">
                <nuxt-link no-prefetch to="/" class="header__logo"><img src="@/assets/images/logo.svg" alt="" class="header__logo-img"></nuxt-link>
            </div>
            <nav class="header__nav-wrapper">
                <ul class="header__nav-list">
                    <li class="header__nav-element">
                        <nuxt-link no-prefetch to="/#OurUsers" class="header__nav-element-link">{{ $t('ourusers') }}</nuxt-link>
                    </li>

                    <li class="header__nav-element">
                        <nuxt-link no-prefetch to="/#Features" class="header__nav-element-link">{{ $t('features') }}</nuxt-link>
                    </li>

                    <li class="header__nav-element">
                        <nuxt-link no-prefetch to="/#Security" class="header__nav-element-link">{{ $t('security') }}</nuxt-link>
                    </li>

                    <li class="header__nav-element">
                        <nuxt-link no-prefetch to="/blog" class="header__nav-element-link">{{ $t('blog') }}</nuxt-link>
                    </li>

                </ul>

                <component__lang_list />

                <div class="header__download-ios-wrapper">
                    <a href="" class="header__download-ios">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_16227)">
                            <path d="M20.8418 17.6447C20.5091 18.4133 20.1153 19.1208 19.659 19.7713C19.0371 20.658 18.5278 21.2719 18.1354 21.6127C17.527 22.1722 16.8752 22.4587 16.1772 22.475C15.6761 22.475 15.0718 22.3324 14.3683 22.0432C13.6626 21.7553 13.014 21.6127 12.421 21.6127C11.7991 21.6127 11.132 21.7553 10.4185 22.0432C9.70396 22.3324 9.12831 22.4832 8.68819 22.4981C8.01884 22.5266 7.35166 22.2319 6.68571 21.6127C6.26066 21.242 5.72901 20.6064 5.09212 19.7061C4.40878 18.7446 3.84698 17.6297 3.40686 16.3587C2.93551 14.9857 2.69922 13.6563 2.69922 12.3692C2.69922 10.8948 3.0178 9.62321 3.65592 8.5576C4.15742 7.70166 4.82459 7.02647 5.65962 6.53081C6.49464 6.03514 7.39688 5.78256 8.36852 5.7664C8.90017 5.7664 9.59736 5.93085 10.4637 6.25405C11.3277 6.57834 11.8824 6.74279 12.1256 6.74279C12.3075 6.74279 12.9237 6.5505 13.9684 6.16714C14.9564 5.81162 15.7902 5.66441 16.4732 5.7224C18.3241 5.87178 19.7147 6.60142 20.6395 7.91595C18.9841 8.91896 18.1653 10.3238 18.1816 12.126C18.1965 13.5297 18.7057 14.6979 19.7066 15.6254C20.1601 16.0558 20.6667 16.3885 21.2302 16.6248C21.108 16.9793 20.979 17.3188 20.8418 17.6447ZM16.5968 0.940125C16.5968 2.04038 16.1948 3.06768 15.3936 4.01854C14.4267 5.14892 13.2572 5.80211 11.989 5.69904C11.9729 5.56705 11.9635 5.42812 11.9635 5.28214C11.9635 4.2259 12.4233 3.09552 13.2399 2.17127C13.6475 1.70331 14.166 1.31421 14.7948 1.00381C15.4221 0.69805 16.0156 0.528957 16.5737 0.5C16.59 0.647086 16.5968 0.794182 16.5968 0.940111V0.940125Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_16227">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        Download
                    </a>
                </div>

            </nav>
            <div class="header__burger-wrapper">
                <div class="header__burger burger-meny" @click="mobMenyStatus = !mobMenyStatus">
                    <span class="burger-meny__line bml-1"></span>
                    <span class="burger-meny__line bml-2"></span>
                    <span class="burger-meny__line bml-3"></span>
                </div>
            </div>

        </div>


        <div class="mob-meny header__mob-meny">
            <div class="mob-meny__wrapper">
                <nav class="mob-meny__nav">
                    <div class="container">
                        <ul class="mob-meny__nav-list">
                            <li class="mob-meny__nav-list-element">
                                <nuxt-link @click="mobMenyStatus = false" no-prefetch to="/#ourUsers" class="mob-meny__nav-list-element-link">{{ $t('ourusers') }}</nuxt-link>
                            </li>
                            <li class="mob-meny__nav-list-element">
                                <nuxt-link no-prefetch to="/#Features" class="mob-meny__nav-list-element-link">{{ $t('features') }}</nuxt-link>
                            </li>
                            <li class="mob-meny__nav-list-element">
                                <nuxt-link no-prefetch to="/#Security" class="mob-meny__nav-list-element-link">{{ $t('security') }}</nuxt-link>
                            </li>
                            <li class="mob-meny__nav-list-element">
                                <nuxt-link @click="mobMenyStatus = false" no-prefetch to="/blog" class="mob-meny__nav-list-element-link">{{ $t('blog') }}</nuxt-link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <div class="mob-meny__lang-container">
                    <div class="container">
                        <component__lang_list />
                    </div>
                </div>

                <div class="mob-meny__download-wrapper">
                    <div class="container">
                        <a href="" class="header__download-ios">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_16227)">
                                <path d="M20.8418 17.6447C20.5091 18.4133 20.1153 19.1208 19.659 19.7713C19.0371 20.658 18.5278 21.2719 18.1354 21.6127C17.527 22.1722 16.8752 22.4587 16.1772 22.475C15.6761 22.475 15.0718 22.3324 14.3683 22.0432C13.6626 21.7553 13.014 21.6127 12.421 21.6127C11.7991 21.6127 11.132 21.7553 10.4185 22.0432C9.70396 22.3324 9.12831 22.4832 8.68819 22.4981C8.01884 22.5266 7.35166 22.2319 6.68571 21.6127C6.26066 21.242 5.72901 20.6064 5.09212 19.7061C4.40878 18.7446 3.84698 17.6297 3.40686 16.3587C2.93551 14.9857 2.69922 13.6563 2.69922 12.3692C2.69922 10.8948 3.0178 9.62321 3.65592 8.5576C4.15742 7.70166 4.82459 7.02647 5.65962 6.53081C6.49464 6.03514 7.39688 5.78256 8.36852 5.7664C8.90017 5.7664 9.59736 5.93085 10.4637 6.25405C11.3277 6.57834 11.8824 6.74279 12.1256 6.74279C12.3075 6.74279 12.9237 6.5505 13.9684 6.16714C14.9564 5.81162 15.7902 5.66441 16.4732 5.7224C18.3241 5.87178 19.7147 6.60142 20.6395 7.91595C18.9841 8.91896 18.1653 10.3238 18.1816 12.126C18.1965 13.5297 18.7057 14.6979 19.7066 15.6254C20.1601 16.0558 20.6667 16.3885 21.2302 16.6248C21.108 16.9793 20.979 17.3188 20.8418 17.6447ZM16.5968 0.940125C16.5968 2.04038 16.1948 3.06768 15.3936 4.01854C14.4267 5.14892 13.2572 5.80211 11.989 5.69904C11.9729 5.56705 11.9635 5.42812 11.9635 5.28214C11.9635 4.2259 12.4233 3.09552 13.2399 2.17127C13.6475 1.70331 14.166 1.31421 14.7948 1.00381C15.4221 0.69805 16.0156 0.528957 16.5737 0.5C16.59 0.647086 16.5968 0.794182 16.5968 0.940111V0.940125Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_16227">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>


</template>
<script setup>
const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<script>
import component__lang_list from '@/components/lang-list.vue'

export default {
    data() {
        return {
            isScrolled: false,
            mobMenyStatus: false,
        }
    },

    components: {
        component__lang_list,
    },

    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 100;
        },
    },

    computed: {

    },

    watch: {

    },

    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

}
</script>
