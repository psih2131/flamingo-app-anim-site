<template>
    <main class="main contact-us-main">
        <section class="contact-us-sec">
            <div class="container-contact-us">
                <h1 class="contact-us-sec__page-title">{{ $t('contact_us') }}</h1>

                <div v-if="sendStatus == false" class="contact-us-sec__default-status">
                    <div class="contact-us-sec__sup-info-box">
                        <h2 class="contact-us-sec__sup-title">{{ $t('contact_support') }} 👋</h2>
                        <p class="contact-us-sec__sup-text">{{ $t('contact_text') }}</p>
                        <a href="" class="contact-us-sec__sup-btn-link">{{ $t('contact_go_to') }}</a>
                    </div>
                    <p class="contact-us-sec__form-title">{{ $t('contact_dsc') }}</p>
    
                     <component__contact_form />
                </div>

                <div v-else class="contact-us-sec__send-status send-status-contact">
                    <div class="send-status-contact__icon-wrapper">
                        <div class="send-status-contact__icon-main">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3332 7L10.4998 19.8333L4.6665 14" stroke="black" stroke-width="2" stroke-linecap="square"/>
                            </svg>    
                        </div>

                        <div class="send-status-contact__circle send-status-contact__circle-1"></div>
                        <div class="send-status-contact__circle send-status-contact__circle-2"></div>
                        <div class="send-status-contact__circle send-status-contact__circle-3"></div>
                        <div class="send-status-contact__circle send-status-contact__circle-4"></div>
                        <div class="send-status-contact__circle send-status-contact__circle-5"></div>
                    </div>

                    <p class="send-status-contact__title">Sent!</p>
                    <p class="send-status-contact__subtitle">liquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac</p>
                    <div class="send-status-contact__btn-wrapper">
                        <button @click="goBack" class="error-page-sec__prev-link-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#FCFCFD" stroke-width="2" stroke-linecap="square"/>
                        </svg>                            
                        Go back
                        </button>

                        <nuxt-link no-prefetch to="/" class="error-page-sec__home-btn">Take me home</nuxt-link>
                    </div>
                </div>
                

            </div>

        </section>
    </main>
</template>

<script>

import component__contact_form from '@/components/component__contact-form.vue'


export default {
    data() {
        return {
            sendStatus: false
        }
    },

    components: {
        component__contact_form,
    },

    methods: {
        goBack(){
            window.history.back();
        }
    },

    computed: {

    },

    watch: {

    },

    mounted(){

    },

}
</script>
