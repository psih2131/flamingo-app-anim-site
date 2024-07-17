<template>
    <main class="main home-main">
        <section class="home-front-sec">
            <div class="home-front-sec__container"></div>
        </section>

        <section class="who-needs-sec" id="ourUsers">
            <div class="container">
                <div class="who-needs-sec__subtitle-row">
                    <p class="who-needs-sec__subtitle">{{ $t('ourusers') }}</p>
                </div>
                <h2 class="who-needs-sec__title">{{ $t('index_who_need') }}</h2>

                <div class="who-needs-sec__wrapper">

                    <div class="who-needs-sec__element needs-anim-element n-amin-1" @click="activHoverAnim('x1', $event)" >

                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_expats') }}<br>{{ $t('index_expats_nomads') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_expats_texts') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x1.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-2" @click="activHoverAnim('x2', $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_tax') }}<br>{{ $t('index_residents') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_residents_text') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x2.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-3" @click="activHoverAnim('x3', $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_frequent_travelers') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_ft_text') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x3.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-4" @click="activHoverAnim('x4', $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_i') }}<br>{{ $t('index_s') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_is_text') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x4.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <PartialsFeatures @openPopup="openPopupInfo"/>

        <PartialsHowItWorks />

        <PartialsFaq />

        <BlogsBlogOnMain />

        <PartialsHowhelp />

        <PartialsDownload />

        <!-- <component__reason_popup v-if="popupStatus"  @closePopup="closePopup" :popupData="popupData"/> -->


    </main>
</template>



<script>

definePageMeta({
  layout: 'home'
})

import component__reason_popup from '@/components/component__reason-popup.vue'


export default {
    data() {
        return {
            popupData :{},
            animCounter: 0,
            pastAnimCounter: null,
            // popupStatus: false,
        }
    },

    components: {
        component__reason_popup,
    },


    methods: {
        toggleActive(index) {
            if (this.activeIndex === index) {
                this.activeIndex = null;
            }
            else {
                this.activeIndex = index;
            }
        },

        activHoverAnim(element, event){

            let mediaQuery = window.matchMedia('(min-width: 1250px)');
            if(mediaQuery.matches){

                let element1 = document.querySelector('.n-amin-1')
                let element2 = document.querySelector('.n-amin-2')
                let element3 = document.querySelector('.n-amin-3')
                let element4 = document.querySelector('.n-amin-4')

                this.animCounter = this.animCounter + 1;

                if(this.pastAnimCounter == element){
                    this.offHoverAnim()
                    this.pastAnimCounter = null
                }
                else{

                    this.offHoverAnim()
                    if(element == 'x1'){

                        element1.classList.add('active-hover-anim')
                        element2.classList.add('activ-hover-anim-small')
                        element3.classList.add('activ-hover-anim-small')
                        element4.classList.add('activ-hover-anim-small')
                    }

                    if(element == 'x2'){

                        element2.classList.add('active-hover-anim')
                        element1.classList.add('activ-hover-anim-small')
                        element3.classList.add('activ-hover-anim-small')
                        element4.classList.add('activ-hover-anim-small')
                    }

                    if(element == 'x3'){

                        element3.classList.add('active-hover-anim')
                        element1.classList.add('activ-hover-anim-small')
                        element2.classList.add('activ-hover-anim-small')
                        element4.classList.add('activ-hover-anim-small')
                    }

                    if(element == 'x4'){

                        element4.classList.add('active-hover-anim')
                        element1.classList.add('activ-hover-anim-small')
                        element2.classList.add('activ-hover-anim-small')
                        element3.classList.add('activ-hover-anim-small')
                    }

                    this.pastAnimCounter = element
                }

                console.log(element)
                console.log(event)
                console.log(this.pastAnimCounter)
            }

        },

        offHoverAnim(element, event){
            let element1 = document.querySelector('.n-amin-1')
            let element2 = document.querySelector('.n-amin-2')
            let element3 = document.querySelector('.n-amin-3')
            let element4 = document.querySelector('.n-amin-4')

            element1.classList.remove('active-hover-anim')
            element2.classList.remove('active-hover-anim')
            element3.classList.remove('active-hover-anim')
            element4.classList.remove('active-hover-anim')

            element1.classList.remove('activ-hover-anim-small')
            element2.classList.remove('activ-hover-anim-small')
            element3.classList.remove('activ-hover-anim-small')
            element4.classList.remove('activ-hover-anim-small')
        },

        // openPopupInfo(data){
        //     this.popupStatus = true;
        //     this.popupData = data;
        // },
        // closePopup(data){
        //     this.popupStatus = data
        // }
    },

    computed: {

    },

    watch: {

    },


    mounted(){

    },

}
</script>
