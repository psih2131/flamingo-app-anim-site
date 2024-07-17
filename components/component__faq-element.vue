<template>
    
    <div class="faq-sec__element" :class=" { 'faq-sec__element_active ': openStatusSelect }"
         @click="changeStatusFaq">
        <div class="faq-sec__element-header">
        <div class="faq-sec__element-header-icon-wrapper">
            <div class="faq-l faq-X"></div>
            <div class="faq-l faq-Y"></div>
        </div>
        <p class="faq-sec__element-header-title">{{ faqData.question }}</p>
        </div>

        <SlideUpDown :active="openStatusSelect" :duration="500">
            <div class="faq-sec__element-body">
                {{ faqData.ansver }}
            </div>
        </SlideUpDown>
    
    </div>

</template>

<script>
import SlideUpDown from 'vue-slide-up-down'



export default {
    data() {
        return {
            openStatusSelect: false,
        }
    },

    props:{
        faqData: Object,
        currentIndex: Number,
        activIndexProps: Number,
    },

    components: {
        SlideUpDown
    },

    methods: {
        changeStatusFaq(){
            this.openStatusSelect = !this.openStatusSelect
            this.$emit('activIndexFaq', this.currentIndex)
        }
    },

    computed: {

    },

    watch: {
        activIndexProps(newVal, oldVal) {
            if(newVal != this.currentIndex){
                this.openStatusSelect = false
            }
      }
    },

    mounted(){
        
    },

}
</script>
