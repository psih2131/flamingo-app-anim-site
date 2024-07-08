<template>
    <div class="form__inp-wrapper-select form-custom-select">
        <p class="form__inp-title">{{ $t(translateText) }}</p>

        <div class="form-custom-select__wrapper">
          <div class="form-custom-select__current-value" @click="openStatusSelect = !openStatusSelect" >
            <input type="text" readonly placeholder="Select Version" :value="currentValue" >
            <div class="form-custom-select__ar-wrapper" :class="{'form-custom-select__ar-wrapper_activ': openStatusSelect}">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#697586" stroke-width="1.66667" stroke-linecap="square"/>
              </svg>                    
            </div>
          </div>
          
          <SlideUpDown :active="openStatusSelect" :duration="500">
            <div class="form-custom-select__value-list" >
                <ul class="form-custom-select__ul-value-list">
                  <li class="form-custom-select__vvalue-list-element" v-for="(item, index) in optionList" :key="index" 
                    @click="selectValue(item.text, index), openStatusSelect = false"
                    :class="{'form-custom-select__vvalue-list-element_active': activeIndex == index}">
                    {{ item.text }}
                  </li>
                </ul>
            </div>
          </SlideUpDown>
          
         
        </div>
        <!-- <select class="form__select" name="select_model" id="select_model" v-model="form.phone">
            <option value="0">{{ $t('contact_select_model') }}</option>
            <option :value="item.text" v-for="(item, index) in phone" :key="index">{{item.text}}</option>
        </select> -->
    </div>
</template>


<script>
import SlideUpDown from 'vue-slide-up-down'

export default {
    data() {
        return {
            activeIndex: null,
            currentValue: '',
            openStatusSelect: false,
            open: false,
        }
    },

    props:{
        translateText: String,
        optionList: Object
    },

    components: {
        SlideUpDown
    },

    methods: {
        selectValue(item, index){
            this.currentValue = item
            this.activeIndex = index
            this.$emit('selectDataSend', this.currentValue)
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
