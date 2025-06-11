<template>
    <!-- PC  /> -->
    <component__front_sec_v2_x1 v-if="pcAnimSecStatus == true"  />

    <!-- Mobile  /> -->
    <!-- <component__front_sec_anim_mob_x1 v-else-if="pcAnimSecStatus == false"  /> -->

    <component__front_sec_anim_mob_x2 v-else-if="pcAnimSecStatus == false"/>
</template>

<script>
import component__front_sec_v2_x1 from '@/components/component__front-sec-anim-v2.vue'
import component__front_sec_anim_mob_x1 from '@/components/component__fornt-sec-v2_mob.vue'
import component__front_sec_anim_mob_x2 from '@/components/component__fornt-sec-v2_mob-new-gen.vue'



export default {
    data() {
        return {
            pcAnimSecStatus: true,
            widthWind: null,
            heightWind: null,
            resizeTimeout: null,
        }
    },

    components: {
        component__front_sec_v2_x1,
        component__front_sec_anim_mob_x1,
        component__front_sec_anim_mob_x2,
    },

    methods: {

        updateWindowSizeComponentX1(){
            clearTimeout(this.resizeTimeout); // Очищаем предыдущий таймер
            this.resizeTimeout = setTimeout(() => {
                this.widthWind = window.innerWidth;
                this.heightWind = window.innerHeight;
                console.log("Пользователь закончил изменять размер окна!");

                this.checkCurrentComponent()
            }, 1500); // Задержка перед выполнением

        },

        checkCurrentComponent(){
            if(this.widthWind > 750){
                this.pcAnimSecStatus = true
            }
            else{
                this.pcAnimSecStatus = false
            }

        },

    },

    computed: {

    },

    watch: {

    },

    mounted(){
        this.widthWind = window.innerWidth;
        this.checkCurrentComponent()
        window.addEventListener("resize", this.updateWindowSizeComponentX1);
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.updateWindowSizeComponentX1);
   }

}
</script>
