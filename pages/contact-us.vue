<template>
    <main class="main contact-us-main">
        <section class="contact-us-sec">
            <div class="container-contact-us">
                <h1 class="contact-us-sec__page-title">Contact us</h1>
                <div class="contact-us-sec__sup-info-box">
                    <h2 class="contact-us-sec__sup-title">In-App Support 👋</h2>
                    <p class="contact-us-sec__sup-text">If you are an existing Flamingo app user, we recommend contacting us through the app settings. That way we will be better equipped to help you.</p>
                    <a href="" class="contact-us-sec__sup-btn-link">Go to the App</a>
                </div>
                <p class="contact-us-sec__form-title">Use this form to complete a support request or send us your feedback.</p>

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