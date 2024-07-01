<template>
    <div class="header__lang lang-list lang-list__pc" v-if="mobStatus == false">
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


    <div class="mob-meny__lang" v-if="mobStatus == true">
        <div class="mob-meny__lang-header" :class="{'mob-meny__lang-header_active':show}" @click="show = !show">
            <div class="mob-meny__lang-header-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0914 6.72222H20.0451C20.5173 6.72222 20.7534 6.72222 20.8914 6.82149C21.0119 6.9081 21.0903 7.04141 21.1075 7.18877C21.1272 7.35767 21.0126 7.56403 20.7833 7.97677L19.3624 10.5343C19.2793 10.684 19.2377 10.7589 19.2214 10.8381C19.207 10.9083 19.207 10.9806 19.2214 11.0508C19.2377 11.13 19.2793 11.2049 19.3624 11.3545L20.7833 13.9121C21.0126 14.3248 21.1272 14.5312 21.1075 14.7001C21.0903 14.8475 21.0119 14.9808 20.8914 15.0674C20.7534 15.1667 20.5173 15.1667 20.0451 15.1667H12.6136C12.0224 15.1667 11.7269 15.1667 11.5011 15.0516C11.3024 14.9504 11.141 14.7889 11.0398 14.5903C10.9247 14.3645 10.9247 14.0689 10.9247 13.4778V10.9444M7.23027 21.5L3.00805 4.61111M4.59143 10.9444H12.4025C12.9937 10.9444 13.2892 10.9444 13.515 10.8294C13.7137 10.7282 13.8751 10.5667 13.9763 10.3681C14.0914 10.1423 14.0914 9.84672 14.0914 9.25556V4.18889C14.0914 3.59772 14.0914 3.30214 13.9763 3.07634C13.8751 2.87773 13.7137 2.71625 13.515 2.61505C13.2892 2.5 12.9937 2.5 12.4025 2.5H4.64335C3.90602 2.5 3.53735 2.5 3.2852 2.65278C3.0642 2.78668 2.89999 2.99699 2.82369 3.24387C2.73663 3.52555 2.82605 3.88321 3.00489 4.59852L4.59143 10.9444Z" stroke="#4B5565" stroke-width="2" stroke-linecap="square"/>
                </svg>
                {{activLang}}
            </div>
            <div class="amob-meny__lang-header-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#697586" stroke-width="1.67" stroke-linecap="square"/>
                </svg>
            </div>
        </div>

        <transition name="slide-toggle">
            <ul v-if="show" class="mob-meny__lang-list">
                <template v-for="item in langList" :key="item.langSlug">
                    <li @click="selectLang(item.langSlug)" 
                        :class="{'lang-list__drop-down-list-element_current': activLang === item.langSlug}" 
                        class="mob-meny__lang-list-element">
                        {{item.langName}}
                    </li>
                </template>

            </ul>
        </transition>
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
            mobStatus: false,
        }
    },
    methods: {
        selectLang(langSlug) {
            this.activLang = langSlug;
            this.show = false;
        },

        updateContainerClass() {
        if (window.innerWidth >= 1250) {
            this.mobStatus = false
        }  else {
            this.mobStatus = true
        }
        }
    },
    mounted() {
        this.activLang = this.langList[0].langSlug;
        this.updateContainerClass()
        window.addEventListener('resize', this.updateContainerClass)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateContainerClass)
    },
}
</script>

