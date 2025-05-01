<template>
    <Head>
        <Title>Flamingo | Country & State Travel Days Tracker</Title>
        <Meta name="description" :content="`Count your international and stateside travel days with Flamingo, an iPhone app for global expats, permanent residents, overseas homeowners and travellers.`" />
        <Meta name="og:title" :content="`Flamingo | Country & State Travel Days Tracker`" />
        <Meta name="og:description" :content="`Count your international and stateside travel days with Flamingo, an iPhone app for global expats, permanent residents, overseas homeowners and travellers.`" />
        <Meta name="og:image" :content="`/android-chrome-512x512.png`" />
        <Meta name="og:url" :content="`https://next.flamingotracker.com/`" />
        <Meta name="twitter:title" :content="`Flamingo | Country & State Travel Days Tracker`" />
        <Meta name="twitter:description" :content="`Count your international and stateside travel days with Flamingo, an iPhone app for global expats, permanent residents, overseas homeowners and travellers.`" />
        <Meta name="twitter:image" :content="`/android-chrome-512x512.png`" />
        <Meta name="twitter:card" :content="'summary'" />
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div class="app-wrapper">
        <component__header />
        
        <slot/>
    
        <component__footer />
    </div>
</template>

<script>
import component__header from '@/components/header-home.vue'
import component__footer from '@/components/footer.vue'

export default {
    data() {
        return {

        }
    },

    components: {
        component__header,
        component__footer,
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
  