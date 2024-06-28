<template>
    <div class="header__lang lang-list">
        <div class="lang-list__row">
            <div class="lang-list__icon-wrapper">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.742 6.10201H16.7035C17.0969 6.10201 17.2936 6.10201 17.4087 6.18474C17.5091 6.25691 17.5744 6.36801 17.5888 6.49081C17.6052 6.63155 17.5097 6.80352 17.3186 7.14747L16.1345 9.27878C16.0652 9.40352 16.0306 9.46588 16.017 9.53193C16.005 9.59039 16.005 9.65068 16.017 9.70913C16.0306 9.77518 16.0652 9.83755 16.1345 9.96228L17.3186 12.0936C17.5097 12.4375 17.6052 12.6095 17.5888 12.7503C17.5744 12.8731 17.5091 12.9842 17.4087 13.0563C17.2936 13.1391 17.0969 13.1391 16.7035 13.1391H10.5105C10.0179 13.1391 9.77157 13.1391 9.5834 13.0432C9.41789 12.9588 9.28333 12.8243 9.19899 12.6588C9.10312 12.4706 9.10312 12.2243 9.10312 11.7316V9.62053M6.02441 18.4168L2.5059 4.34276M3.82538 9.62053H10.3346C10.8272 9.62053 11.0736 9.62053 11.2617 9.52466C11.4272 9.44033 11.5618 9.30576 11.6461 9.14025C11.742 8.95208 11.742 8.70576 11.742 8.21313V3.9909C11.742 3.49826 11.742 3.25195 11.6461 3.06378C11.5618 2.89827 11.4272 2.7637 11.2617 2.67937C11.0736 2.5835 10.8272 2.5835 10.3346 2.5835H3.86864C3.2542 2.5835 2.94698 2.5835 2.73685 2.71081C2.55269 2.82239 2.41585 2.99766 2.35226 3.20339C2.27972 3.43812 2.35423 3.73617 2.50326 4.33226L3.82538 9.62053Z" stroke="#4B5565" stroke-width="2" stroke-linecap="square"/>
                </svg>                    
            </div>

            <div class="lang-list__wrapper" @mouseenter="show = true" @mouseleave="show = false">
                <p  class="lang-list__drop-down-list-element-active">{{activLang}}</p>
                
                <transition name="slide-fade">
                <div v-if="show" class="lang-list__drop-down-list-fixed-wrapper">
                    <ul class="lang-list__drop-down-list-fixed">
                        <template v-for="item in langList" :key="item.langSlug">
                            <li @click="selectLang(item.langSlug)" 
                                :class="{'lang-list__drop-down-list-element_current': activLang === item.langSlug}" 
                                class="lang-list__drop-down-list-element">
                                {{item.langName}}
                            </li>
                        </template>
                    </ul>
                </div>
                </transition>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            langList: [
                { langSlug: 'EN', langName: 'English' },
                { langSlug: 'FR', langName: 'Français' },
            ],
            activLang: '',
        }
    },
    methods: {
        selectLang(langSlug) {
            this.activLang = langSlug;
            this.show = false;
        },
    },
    mounted() {
        this.activLang = this.langList[0].langSlug;
    },
}
</script>

