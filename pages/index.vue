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

                <div class="who-needs-sec__wrapper" ref="animContainerRow" :class="{'one-open-elemen': activeFirsLoad}">

                    <div class="who-needs-sec__element needs-anim-element n-amin-1" @click="activHoverAnim(0, $event)" >

                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_expats') }}<br>{{ $t('index_expats_nomads') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_expats_texts') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x1.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-2" @click="activHoverAnim(1, $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_tax') }}<br>{{ $t('index_residents') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_residents_text') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x2.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-3" @click="activHoverAnim(2, $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">{{ $t('index_frequent_travelers') }}</h3>
                                <p class="needs-anim-element__subtitle">{{ $t('index_ft_text') }}</p>
                            </div>

                            <img src="@/assets/images/who-needs-image/x3.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-4" @click="activHoverAnim(3, $event)" >
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

            activeFirsLoad: false,
            previewActivIndex: null,
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
            this.activeFirsLoad = true


            let mediaQuery = window.matchMedia('(min-width: 1250px)');
            if(mediaQuery.matches){

                let allAnimElement = document.querySelectorAll('.needs-anim-element')
                let elementOpen = event.target.closest('.needs-anim-element')


                if(elementOpen.classList.contains('active-hover-anim')){
                    for(let i = 0; i < allAnimElement.length; i++){
                        allAnimElement[i].classList.remove('active-hover-anim')
                        allAnimElement[i].classList.remove('fixed')
                        // allAnimElement[i].classList.remove('activ-hover-anim-small')
                        elementOpen.classList.remove('active-hover-anim_revers')

                        this.previewActivIndex = null
                        
                    }
                    // elementOpen.classList.remove('activ-hover-anim-small')
                    elementOpen.classList.remove('active-hover-anim')

                    elementOpen.classList.add('active-hover-anim_revers')

                    this.activeFirsLoad = false
            
              
                }
                else{
                    
                    if(this.activeFirsLoad == true){    

                        

                        for(let i = 0; i < allAnimElement.length; i++){
                            allAnimElement[i].classList.remove('active-hover-anim')
                            // allAnimElement[i].classList.add('activ-hover-anim-small')
                            elementOpen.classList.remove('active-hover-anim_revers')
                        }


                  
                        if(element == 0){

                            if(this.previewActivIndex == 1){
                                allAnimElement[2].classList.add('fixed')
                                allAnimElement[3].classList.add('fixed')

                                allAnimElement[0].classList.remove('fixed')
                                allAnimElement[1].classList.remove('fixed')

                                this.$refs.animContainerRow.style.justifyContent = 'flex-end'
                            }

                            else if(this.previewActivIndex == 2){
                                allAnimElement[2].classList.add('fixed')
                                allAnimElement[3].classList.add('fixed')

                                allAnimElement[0].classList.remove('fixed')
                                allAnimElement[1].classList.remove('fixed')

                                this.$refs.animContainerRow.style.justifyContent = 'flex-end'
                            }
                            else{
                                allAnimElement[0].classList.remove('fixed')
                                allAnimElement[1].classList.remove('fixed')
                                allAnimElement[2].classList.remove('fixed')
                                allAnimElement[3].classList.remove('fixed')
                                this.$refs.animContainerRow.style.justifyContent = 'space-between'
                            }

                           
                            
                        }

                        if(element == 1){
                            if(this.previewActivIndex == 0){
                                allAnimElement[2].classList.add('fixed')
                                allAnimElement[3].classList.add('fixed')

                                allAnimElement[0].classList.remove('fixed')
                                allAnimElement[1].classList.remove('fixed')

                                this.$refs.animContainerRow.style.justifyContent = 'flex-end'
                            }
                            else if(this.previewActivIndex == 2){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[3].classList.add('fixed')

                                allAnimElement[1].classList.remove('fixed')
                                allAnimElement[2].classList.remove('fixed')
                                
                                this.$refs.animContainerRow.style.justifyContent = 'space-between'
                            }

                            else if(this.previewActivIndex == 3){
                                allAnimElement[0].classList.add('fixed')

                                

                                allAnimElement[1].classList.remove('fixed')
                                allAnimElement[2].classList.remove('fixed')
                                allAnimElement[3].classList.remove('fixed')

                                this.$refs.animContainerRow.style.justifyContent = 'space-between'
                            }
            
                           
                        }

                        if(element == 2){
                            if(this.previewActivIndex == 1){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[3].classList.add('fixed')

                                allAnimElement[1].classList.remove('fixed')
                                allAnimElement[2].classList.remove('fixed')
                                this.$refs.animContainerRow.style.justifyContent = 'space-between'
                            }
                            else if(this.previewActivIndex == 3){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[1].classList.add('fixed')

                                allAnimElement[2].classList.remove('fixed')
                                allAnimElement[3].classList.remove('fixed')
                                this.$refs.animContainerRow.style.justifyContent = 'flex-start'
                            }

                            else if(this.previewActivIndex == 0){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[3].classList.add('fixed')

                                allAnimElement[1].classList.remove('fixed')
                                allAnimElement[2].classList.remove('fixed')
                                
                                this.$refs.animContainerRow.style.justifyContent = 'flex-star'
                            }
                            
                        }

                        if(element == 3){

                            if(this.previewActivIndex == 0){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[1].classList.add('fixed')

                                allAnimElement[2].classList.remove('fixed')
                                allAnimElement[3].classList.remove('fixed')
                                this.$refs.animContainerRow.style.justifyContent = 'flex-end'
                            }
                            else if(this.previewActivIndex == 2){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[1].classList.add('fixed')

                                allAnimElement[2].classList.remove('fixed')
                                allAnimElement[3].classList.remove('fixed')

                                this.$refs.animContainerRow.style.justifyContent = 'flex-star'
                            }
                            else if(this.previewActivIndex == 1){
                                allAnimElement[0].classList.add('fixed')
                                allAnimElement[2].classList.add('fixed')

                                allAnimElement[1].classList.remove('fixed')
                                allAnimElement[3].classList.remove('fixed')
                                this.$refs.animContainerRow.style.justifyContent = 'flex-start'
                            }
                            
                        }

                  

                    }
                    
                    // elementOpen.classList.remove('activ-hover-anim-small')
                
                        elementOpen.classList.add('active-hover-anim')
                        elementOpen.classList.remove('active-hover-anim_revers')
                 
                    
                }

                
                console.log(element)
                console.log(this.activeFirsLoad)
                console.log('preview element',this.previewActivIndex)



                this.previewOpenedElement(element)






                // let element1 = document.querySelector('.n-amin-1')
                // let element2 = document.querySelector('.n-amin-2')
                // let element3 = document.querySelector('.n-amin-3')
                // let element4 = document.querySelector('.n-amin-4')

                // this.animCounter = this.animCounter + 1;

                // if(this.pastAnimCounter == element){
                //     this.offHoverAnim()
                //     this.pastAnimCounter = null
                // }
                // else{

                //     this.offHoverAnim()
                //     if(element == 'x1'){

                //         element1.classList.add('active-hover-anim')
                //         element2.classList.add('activ-hover-anim-small')
                //         element3.classList.add('activ-hover-anim-small')
                //         element4.classList.add('activ-hover-anim-small')
                //     }

                //     if(element == 'x2'){

                //         element2.classList.add('active-hover-anim')
                //         element1.classList.add('activ-hover-anim-small')
                //         element3.classList.add('activ-hover-anim-small')
                //         element4.classList.add('activ-hover-anim-small')
                //     }

                //     if(element == 'x3'){

                //         element3.classList.add('active-hover-anim')
                //         element1.classList.add('activ-hover-anim-small')
                //         element2.classList.add('activ-hover-anim-small')
                //         element4.classList.add('activ-hover-anim-small')
                //     }

                //     if(element == 'x4'){

                //         element4.classList.add('active-hover-anim')
                //         element1.classList.add('activ-hover-anim-small')
                //         element2.classList.add('activ-hover-anim-small')
                //         element3.classList.add('activ-hover-anim-small')
                //     }

                //     this.pastAnimCounter = element
                // }

                // console.log(element)
                // console.log(event)
                // console.log(this.pastAnimCounter)
            }

        },


        previewOpenedElement(element){
            if(this.activeFirsLoad == true){
                this.previewActivIndex = +element
            }
            else{
                this.activeFirsLoad = false
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
