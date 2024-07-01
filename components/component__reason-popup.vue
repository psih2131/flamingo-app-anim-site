<template>
    <div class="reason-popup-wrapper">

    <div class="reason-popup-wrapper-bg">

    </div>
    <div class="reason-popup" :class="{'reason-popup__active': popupStatus}">
        <div class="reason-popup__close" @click="closePopup">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#FCFCFD" stroke-width="2" stroke-linecap="square"/>
            </svg>
        </div>
        <div class="reason-popup__wrapper">
            <div class="reason-popup__img-wrapper">
                <img src="@/assets/images/iphone-mockup-2.png" alt="" class="reason-popup__img">
            </div>
                <div class="reason-popup__body-text">
                    <div class="reason-popup__container">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.1389 29.0575L56.8621 31.6126L58.0156 32.2606C60.4725 33.641 60.4725 37.1998 58.0156 38.5802L42.3685 47.3711C38.7397 49.4098 34.3206 49.4098 30.6918 47.3711L15.0449 38.5802C12.5879 37.1998 12.5879 33.641 15.0449 32.2606L16.1981 31.6126L20.7951 28.98" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M52.3395 41.7656L57.5569 44.4187C60.1394 45.7187 60.222 49.3985 57.7009 50.8152L42.3666 59.4304C38.7378 61.4691 34.3187 61.4691 30.6899 59.4304L15.5791 50.9407C13.0146 49.4999 13.1559 45.7386 15.8212 44.497L21.077 41.9678" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M30.6918 10.6531L15.0449 19.444C12.5879 20.8244 12.5879 24.3832 15.0449 25.7637L30.6918 34.5545C34.3206 36.5933 38.7397 36.5933 42.3685 34.5545L58.0156 25.7637C60.4725 24.3832 60.4725 20.8244 58.0156 19.444L42.3685 10.6531C38.7397 8.61432 34.3206 8.61432 30.6918 10.6531Z" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>


                        <h3 class="reason-popup__title">{{ popupData.popup_title }}</h3>
                        <p class="reason-popup__subtitle">{{ popupData.popup_subtitle }}</p>
                        <div class="reason-popup__text">
                              {{ popupData.popup_text }}
                        </div>

                    </div>
            </div>

        </div>

    </div>

    </div>
</template>


<script>

export default {
    data() {
        return {
            popupStatus: false,
      }
    },
    props:{
        popupData :{
          popup_title : "",
          popup_subtitle : "",
          popup_text : "",
        }
    },

    components: {

    },


    methods: {
        closePopup(){
            this.popupStatus = false
            setTimeout(()=>{
                this.$emit('closePopup', false);
            },800)
        }
    },

    computed: {

    },

    watch: {

    },

    mounted(){
        setTimeout(()=>{
            this.popupStatus = true
        },200)
    },

}
</script>
