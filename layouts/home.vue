<template>
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
  