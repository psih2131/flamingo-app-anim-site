<template>
    <header class="header header-home" :class="{ 'header_active': isScrolled, 'header_mob-meny-active': mobMenyStatus }">
        <div class="container">
            <div class="header__logo-wrapper">
                <nuxt-link no-prefetch to="/" class="header__logo"><img src="@/assets/images/logo.svg" alt="" class="header__logo-img"></nuxt-link>
            </div>
            <nav class="header__nav-wrapper">
                <ul class="header__nav-list">
                    <li  class="header__nav-element">
                        <a  href="/#ForWhom" class="header__nav-element-link" :class="{ 'router-link-active': activeSection === 'ForWhom' }">{{ $t('forwhom') }}</a>
                    </li>

                    <li  class="header__nav-element">
                        <a  href="/#Features" class="header__nav-element-link" :class="{ 'router-link-active': activeSection === 'Features' }">{{ $t('features') }}</a>
                    </li>

                    <li  class="header__nav-element">
                        <a  href="/#HowItWorks" class="header__nav-element-link" :class="{ 'router-link-active': activeSection === 'HowItWorks' }">{{ $t('how-it-works') }}</a>
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

                            <li  class="mob-meny__nav-list-element">
                                <a  href="/#ForWhom" class="mob-meny__nav-list-element-link" :class="{ 'router-link-active': activeSection === 'ForWhom' }">{{ $t('forwhom') }}</a>
                            </li>

                            <li  class="mob-meny__nav-list-element">
                                <a  href="/#Features" class="mob-meny__nav-list-element-link" :class="{ 'router-link-active': activeSection === 'Features' }">{{ $t('features') }}</a>
                            </li>

                            <li  class="mob-meny__nav-list-element">
                                <a  href="/#HowItWorks" class="mob-meny__nav-list-element-link" :class="{ 'router-link-active': activeSection === 'HowItWorks' }">{{ $t('how-it-works') }}</a>
                            </li>

                            <li class="mob-meny__nav-list-element">
                                <nuxt-link @click="mobMenyStatus = false" no-prefetch to="/blog" class="mob-meny__nav-list-element-link">{{ $t('blog') }}</nuxt-link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <div class="mob-meny__lang-container">
                    <div class="container">
                        <div class="mob-meny__lang">
                            <div class="mob-meny__lang-header">
                                <div class="mob-meny__lang-header-title">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0914 6.72222H20.0451C20.5173 6.72222 20.7534 6.72222 20.8914 6.82149C21.0119 6.9081 21.0903 7.04141 21.1075 7.18877C21.1272 7.35767 21.0126 7.56403 20.7833 7.97677L19.3624 10.5343C19.2793 10.684 19.2377 10.7589 19.2214 10.8381C19.207 10.9083 19.207 10.9806 19.2214 11.0508C19.2377 11.13 19.2793 11.2049 19.3624 11.3545L20.7833 13.9121C21.0126 14.3248 21.1272 14.5312 21.1075 14.7001C21.0903 14.8475 21.0119 14.9808 20.8914 15.0674C20.7534 15.1667 20.5173 15.1667 20.0451 15.1667H12.6136C12.0224 15.1667 11.7269 15.1667 11.5011 15.0516C11.3024 14.9504 11.141 14.7889 11.0398 14.5903C10.9247 14.3645 10.9247 14.0689 10.9247 13.4778V10.9444M7.23027 21.5L3.00805 4.61111M4.59143 10.9444H12.4025C12.9937 10.9444 13.2892 10.9444 13.515 10.8294C13.7137 10.7282 13.8751 10.5667 13.9763 10.3681C14.0914 10.1423 14.0914 9.84672 14.0914 9.25556V4.18889C14.0914 3.59772 14.0914 3.30214 13.9763 3.07634C13.8751 2.87773 13.7137 2.71625 13.515 2.61505C13.2892 2.5 12.9937 2.5 12.4025 2.5H4.64335C3.90602 2.5 3.53735 2.5 3.2852 2.65278C3.0642 2.78668 2.89999 2.99699 2.82369 3.24387C2.73663 3.52555 2.82605 3.88321 3.00489 4.59852L4.59143 10.9444Z" stroke="#4B5565" stroke-width="2" stroke-linecap="square"/>
                                    </svg>
                                    EN
                                </div>
                                <div class="amob-meny__lang-header-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#697586" stroke-width="1.67" stroke-linecap="square"/>
                                    </svg>
                                </div>
                            </div>


                            <ul class="mob-meny__lang-list">
                                <li class="mob-meny__lang-list-element">English</li>
                                <li class="mob-meny__lang-list-element">Français</li>
                            </ul>
                        </div>
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
</script>
<script>
import component__lang_list from '@/components/lang-list.vue'
export default {
    data() {
        return {
            isScrolled: false,
            mobMenyStatus: false,
            activeSection: '',
        }
    },

    components: {
        component__lang_list,
    },

    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 100;
        },

        onScroll() {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom > 50) {
                currentSection = section.id;
                }
            });

            this.activeSection = currentSection;
        }

    },

    computed: {

    },

    watch: {

    },

    mounted(){
        window.addEventListener('scroll', this.handleScroll);

        window.addEventListener('scroll', this.onScroll);
        this.onScroll(); // Инициализация на загрузке страницы
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.onScroll);
    },

}
</script>
