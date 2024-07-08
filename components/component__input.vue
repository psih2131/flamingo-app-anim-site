<template>
    <div class="form__inp-wrapper input-wrapper">
        <p class="form__inp-title">{{ $t(titleTextTranslate) }}*</p>

        <div class="input-wrapper__cover">
            <input :placeholder="$t(inpPlaceholderTranslate)" 
            type="text" class="form__inp" 
            :class="{'form__inp-error': errorStatus}"
            v-model="inputValue"
            @input="changeInput"
            >

            <div class="input-wrapper__error-icon-wrapper" v-if="errorStatus">
                <div class="input-wrapper__error-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_221_17054)">
                        <path d="M8.00016 5.33398V8.00065M8.00016 10.6673H8.00683M14.6668 8.00065C14.6668 11.6826 11.6821 14.6673 8.00016 14.6673C4.31826 14.6673 1.3335 11.6826 1.3335 8.00065C1.3335 4.31875 4.31826 1.33398 8.00016 1.33398C11.6821 1.33398 14.6668 4.31875 14.6668 8.00065Z" stroke="#F63D68" stroke-width="1.33333" stroke-linecap="square"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_221_17054">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>                        
                </div>
            </div>

        </div>

        <p v-if="errorStatus" class="input-wrapper__error-text">{{textError}}</p>
        <!-- <input type="text" class="form__inp"
               :placeholder="$t('contact_name')"
                v-model="form.name"
        > -->
    </div>
</template>

<script>


export default {
    data() {
        return {
            inputValue: ''
        }
    },

    props:{
        inpPlaceholderTranslate: String,
        titleTextTranslate: String,
        errorStatus: Boolean,
        textError: String,
    },

    components: {
   
    },

    methods: {
        changeInput(){
            this.$emit('sentInputValueToParent', this.inputValue)
            console.log(this.inputValue)
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