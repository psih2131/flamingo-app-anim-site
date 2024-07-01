<template>
    <main class="main contact-us-main">
        <section class="contact-us-sec">
            <div class="container-contact-us">
                <h1 class="contact-us-sec__page-title">{{ $t('contact_us') }}</h1>
                <div class="contact-us-sec__sup-info-box">
                    <h2 class="contact-us-sec__sup-title">{{ $t('contact_support') }} 👋</h2>
                    <p class="contact-us-sec__sup-text">{{ $t('contact_text') }}</p>
                    <a href="" class="contact-us-sec__sup-btn-link">{{ $t('contact_go_to') }}</a>
                </div>
                <p class="contact-us-sec__form-title">{{ $t('contact_dsc') }}</p>

                 <component__contact_form />

            </div>

        </section>
    </main>
</template>

<script>
import component__contact_form from '@/components/component__contact-form.vue'

export default {
    data() {
        return {

        }
    },

    components: {
        component__contact_form,
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
