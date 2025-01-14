<template>
    <div class="contact-us-sec__form-wrapper form" >
        <div class="form__white-cover-loader" :class="{'form__white-cover-loader_activ' : btnSendLoadingStatus}"></div>


        <!-- input component name data -->
        <component__input :inpPlaceholderTranslate="'contact_name'"
        :titleTextTranslate="'contact_name'"
        :errorStatus="nameErorStatus"
        :textError="nameTextError"
        @sentInputValueToParent="getNameEmitData"
        />


        <!-- input component enail data -->
        <component__input :inpPlaceholderTranslate="'contact_email'"
        :titleTextTranslate="'contact_email'"
        :errorStatus="emailErorStatus"
        :textError="emailTextError"
        @sentInputValueToParent="getEmailEmitData"
        />


        <!-- custom select component for phone model data -->
        <component__custom_select :translateText="'contact_model'" :optionList="phone" @selectDataSend="emitSelectDataPhone" :translateDefault="'contact_select_model'" />


        <!-- custom select component for ios version data -->
        <component__custom_select :translateText="'contact_version'" :optionList="ios" @selectDataSend="emitSelectDataIos" :translateDefault="'contact_select_version'" />


        <!-- textarea message field -->
        <div class="form__inp-wrapper">
            <p class="form__inp-title">{{ $t('contact_message') }}</p>
            <textarea class="form__textarea"  :class="{'form__inp-error': textErrorStatus}"  v-model="form.message" :placeholder="$t('contact_message_placeholder')"></textarea>
        </div>


        <!-- input type file START -->
        <div class="form__file-wrapper form-file" ref="onDropZone">
          <div class="form-file__button-load">
            <input hidden name="file" type="file" id="field__file-1" @change="fileCheck($event)" class="form-file__input" multiple accept=".svg,.png,.jpg,.gif">
            <label class="form-file__input-label input-label" for="field__file-1">

              <div class="input-label__icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66797 13.3333L10.0013 10M10.0013 10L13.3346 13.3333M10.0013 10V17.5M16.668 13.9524C17.6859 13.1117 18.3346 11.8399 18.3346 10.4167C18.3346 7.88536 16.2826 5.83333 13.7513 5.83333C13.5692 5.83333 13.3989 5.73833 13.3064 5.58145C12.2197 3.73736 10.2133 2.5 7.91797 2.5C4.46619 2.5 1.66797 5.29822 1.66797 8.75C1.66797 10.4718 2.36417 12.0309 3.49043 13.1613" stroke="#364152" stroke-width="1.66667" stroke-linecap="square"/>
                </svg>
              </div>

              <p class="input-label__title">
                <b>{{ $t('to_upload')}}</b> {{ $t('or_drop') }}
              </p>
              <p class="input-label__subtitle">SVG, PNG, JPG or GIF (max. 800x400px)</p>

            </label>
          </div>
          <div v-show="filesData?.length > 0" class="form-file__loaded-file-list">
            <div v-for="(item, index) in filesData" :key="index"
             class="form-file__loaded-element file-loaded-element"
             >
              <div class="file-loaded-element__header">
                <div class="file-loaded-element__header-left">
                  <div class="file-loaded-element__file-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6654 1.89057V5.33268C11.6654 5.79939 11.6654 6.03275 11.7562 6.21101C11.8361 6.36781 11.9636 6.49529 12.1204 6.57519C12.2986 6.66602 12.532 6.66602 12.9987 6.66602H16.4408M16.6654 8.32287V14.3327C16.6654 15.7328 16.6654 16.4329 16.3929 16.9677C16.1532 17.4381 15.7707 17.8205 15.3003 18.0602C14.7656 18.3327 14.0655 18.3327 12.6654 18.3327H7.33203C5.9319 18.3327 5.23183 18.3327 4.69705 18.0602C4.22665 17.8205 3.8442 17.4381 3.60451 16.9677C3.33203 16.4329 3.33203 15.7328 3.33203 14.3327V5.66602C3.33203 4.26588 3.33203 3.56582 3.60451 3.03104C3.8442 2.56063 4.22665 2.17818 4.69705 1.9385C5.23183 1.66602 5.9319 1.66602 7.33203 1.66602H10.0085C10.62 1.66602 10.9257 1.66602 11.2134 1.73509C11.4685 1.79633 11.7124 1.89734 11.9361 2.03442C12.1884 2.18902 12.4046 2.40521 12.8369 2.83759L15.4938 5.49444C15.9262 5.92682 16.1424 6.14301 16.297 6.3953C16.434 6.61898 16.535 6.86285 16.5963 7.11794C16.6654 7.40565 16.6654 7.71139 16.6654 8.32287Z" stroke="#9AA4B2" stroke-width="1.66667" stroke-linecap="square"/>
                    </svg>
                  </div>
                  <div class="file-loaded-element__file-info">
                    <p class="file-loaded-element__file-name">{{item.name}}</p>
                    <p class="file-loaded-element__file-size">{{ convertToMB(item.size) }} MB</p>
                  </div>

                </div>


                <div class="file-loaded-element__file-remove-btn" @click="removeFile(index)">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4.99935V4.33268C13.3333 3.39926 13.3333 2.93255 13.1517 2.57603C12.9919 2.26243 12.7369 2.00746 12.4233 1.84767C12.0668 1.66602 11.6001 1.66602 10.6667 1.66602H9.33333C8.39991 1.66602 7.9332 1.66602 7.57668 1.84767C7.26308 2.00746 7.00811 2.26243 6.84832 2.57603C6.66667 2.93255 6.66667 3.39926 6.66667 4.33268V4.99935M8.33333 9.58268V13.7493M11.6667 9.58268V13.7493M2.5 4.99935H17.5M15.8333 4.99935V14.3327C15.8333 15.7328 15.8333 16.4329 15.5608 16.9677C15.3212 17.4381 14.9387 17.8205 14.4683 18.0602C13.9335 18.3327 13.2335 18.3327 11.8333 18.3327H8.16667C6.76654 18.3327 6.06647 18.3327 5.53169 18.0602C5.06129 17.8205 4.67883 17.4381 4.43915 16.9677C4.16667 16.4329 4.16667 15.7328 4.16667 14.3327V4.99935" stroke="#4B5565" stroke-width="1.66667" stroke-linecap="square"/>
                    </svg>
                </div>
              </div>

              <div class="file-loaded-element__loader-wrapper">
                <div class="file-loaded-element__loader" :class="{'file-loaded-element__loader_activ': btnSendLoadingStatus}">
                  <span class="file-loaded-element__loader-progress-element"></span>
                </div>
              </div>
            </div>

          </div>

        </div>
        <!-- input type file END -->


        <div class="form__inp-wrapper-btn">
            <button class="form__btn-send"
            :class="{'form__btn-send-activ-animation' : btnSendLoadingStatus}"
            @click="sendMessage">
            {{ $t('contact_submit') }}
            <div class="form__btn-send-circle">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 16C30 17.8385 29.6379 19.659 28.9343 21.3576C28.2308 23.0561 27.1995 24.5995 25.8995 25.8995C24.5995 27.1995 23.0561 28.2307 21.3576 28.9343C19.659 29.6379 17.8385 30 16 30C14.1615 30 12.341 29.6379 10.6424 28.9343C8.94387 28.2307 7.40052 27.1995 6.1005 25.8995C4.80048 24.5995 3.76925 23.0561 3.06569 21.3576C2.36212 19.659 2 17.8385 2 16C2 14.1615 2.36212 12.341 3.06569 10.6424C3.76926 8.94387 4.80049 7.40052 6.10051 6.1005C7.40053 4.80048 8.94388 3.76925 10.6424 3.06568C12.341 2.36212 14.1615 2 16 2C17.8385 2 19.659 2.36212 21.3576 3.06569C23.0561 3.76926 24.5995 4.80049 25.8995 6.10051C27.1995 7.40053 28.2308 8.94388 28.9343 10.6424C29.6379 12.341 30 14.1615 30 16L30 16Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 2C17.8385 2 19.659 2.36212 21.3576 3.06569C23.0561 3.76925 24.5995 4.80049 25.8995 6.10051C27.1995 7.40053 28.2308 8.94388 28.9343 10.6424C29.6379 12.341 30 14.1615 30 16" stroke="#80EAAF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>


        <!-- error message -->
        <p class="form__error-message" v-show="displayError">
          {{ $t('error_text') }} <a href="">{{ $t('error_try') }}</a>
        </p>



    </div>
</template>
<script setup>

</script>
<script>
import { useVuelidate } from '@vuelidate/core'
import { useDropZone } from '@vueuse/core';
import { required, email } from '@vuelidate/validators'
import axios from 'axios'

import component__custom_select from '@/components/component__custom-select.vue'
import component__input from '@/components/component__input.vue'
import component__drag_and_drop_file from '@/components/component__drag-and-drop-file.vue'


export default {
  setup () {
    let loadedFileWrapper = false;
    const filesData = ref([]);
    const onDropZone  = ref(null);
    const { files } = useDropZone(onDropZone, { onDrop })
    function onDrop(){
      //console.log(files.value);
      filesData.value = files.value;
    }
    return {  onDropZone, filesData, v$: useVuelidate() }
  },
  data() {
    return {
      isOpen: this.show || false,
      formSubmitted: false,
      displayError: false,
      phone:[
        {
          id:30,
          text:'iPhone 15 Pro Max - 2023',
        },
        {
          id:29,
          text:'iPhone 15 Pro - 2023'
        },
        {
          id:28,
          text:'iPhone 15 Plus - 2023'
        },
        {
          id:27,
          text:'iPhone 15 - 2023'
        },
        {
          id:26,
          text:'iPhone 14 Pro Max - 2022',
        },
        {
          id:25,
          text:'iPhone 14 Pro - 2022'
        },
        {
          id:24,
          text:'iPhone 14 Plus - 2022'
        },
        {
          id:23,
          text:'iPhone 14 - 2022'
        },
        {
          id:22,
          text:'iPhone SE (3rd) - 2022'
        },
        {
          id:21,
          text:'iPhone 13 Pro Max - 2021'
        },
        {
          id:20,
          text:'iPhone 13 Pro - 2021'
        },
        {
          id:19,
          text:'iPhone 13 Mini - 2021'
        },
        {
          id:18,
          text:'iPhone 13 - 2021'
        },
        {
          id:17,
          text:'iPhone 12 Pro Max - 2020'
        },
        {
          id:16,
          text:'iPhone 12 Pro - 2020'
        },
        {
          id:15,
          text:'iPhone 12 Mini - 2020'
        },
        {
          id:14,
          text:'iPhone 12 - 2020'
        },
        {
          id:13,
          text:'iPhone SE (2nd) - 2020'
        },
        {
          id:12,
          text:'iPhone 11 Pro Max - 2019'
        },
        {
          id:11,
          text:'iPhone 11 Pro - 2019'
        },
        {
          id:10,
          text:'iPhone 11 - 2019'
        },
        {
          id:9,
          text:'iPhone XS Max - 2018'
        },
        {
          id:8,
          text:'iPhone XS - 2018'
        },
        {
          id:7,
          text:'iPhone XR - 2018'
        },
        {
          id:6,
          text:'iPhone X - 2017'
        },
        {
          id:5,
          text:'iPhone 8 Plus - 2017'
        },
        {
          id:4,
          text:'iPhone 8 - 2017'
        },
        {
          id:3,
          text:'iPhone 7 Plus - 2016'
        },
        {
          id:2,
          text:'iPhone 7 - 2016'
        },
        {
          id:1,
          text:'iPhone SE (1st) - 2016'
        },
      ],
      ios:[
        {
          id:10,
          text:'latest 17',
        },
        {
          id:9,
          text:'latest 16.6.1'
        },
        {
          id:8,
          text:'minor 16'
        },
        {
          id:7,
          text:'latest 15.7.9'
        },
        {
          id:6,
          text:'minor 15'
        },
        {
          id:5,
          text:'latest 14.8.1'
        },
        {
          id:4,
          text:'minor 14'
        },
        {
          id:3,
          text:'latest 13.7'
        },
        {
          id:2,
          text:'minor 13'
        },
        {
          id:1,
          text:'x13.0'
        },
      ],
      describe: '',
      form:{
        name: "",
        email:"",
        subject:"",
        phone: "",
        ios: "",
        message: "",
      },
      submitTxt: 'submit',

      nameErorStatus: false,
      nameTextError: 'Please enter your name',

      emailErorStatus: false,
      emailTextError: 'Please enter your email address in proper format: yourname@company.com',

      textErrorStatus: false,

      loadedFileWrapperStatus: false,

      btnSendLoadingStatus: false,
    }
  },

  mounted(){

  },

  validations () {
    return {
      form: {
        name: {required}, // Matches this.firstName
        email: {required, email}, // Matches this.contact.email
        // phone:{required},
        // ios: {required},
        // message: {required},
      }
    }
  },

  components:{
    component__custom_select,
    component__input,
    component__drag_and_drop_file
  },
  methods: {
       //file load script
    fileCheck(event){
      this.filesData = Array.from(event.target.files)
    },

    //remove loaded file
    removeFile(index){
      this.filesData.splice(index, 1);
    },

    //file size convert from bite to MB
    convertToMB(bytes) {
      const MB = 1024 * 1024;
      return (bytes / MB).toFixed(3);
    },

    //get custom select emit data phone
    emitSelectDataPhone(data){
      this.form.phone = data
     // console.log(this.form)
    },

    //get custom select emit data ios
    emitSelectDataIos(data){
      this.form.ios = data
     // console.log(this.form)
    },

    //get name emit input data
    getNameEmitData(data){
      this.nameErorStatus = false;
      this.form.name = data
      //console.log(this.form)
    },

    //get email emit input data
    getEmailEmitData(data){
      this.emailErorStatus = false;
      this.form.email = data
   //   console.log(this.form)
    },


    //FORM SEND SCRIPT POST QUERY
    sendMessage(){
      //button circle animation ON

      this.submitTxt = 'submit'
      this.v$.form.$touch();

      if(this.v$.form.name.$errors.length) this.nameErorStatus = true;
      if(this.v$.form.email.$errors.length) this.emailErorStatus = true;

      if(!this.v$.form.$invalid) {

        this.btnSendLoadingStatus = true
        this.submitTxt = 'submitting'

        //console.log(this.form);
        const message = `Support request from ${this.$route.query.udid ? ('udid: ' + this.$route.query.udid) : 'landing page'}.
Name: ${this.form.name}
Email: ${this.form.email}
Phone: ${this.form.phone ? this.form.phone : '----'}
IOS: ${this.form.ios ? this.form.ios : '----'}
Message: ${this.form.message ? this.form.message : '----'}`
        let bodyFormData = new FormData();

        bodyFormData.append('message', message);
        bodyFormData.append('email', this.form.email);
        this.filesData?.forEach(f => {
          bodyFormData.append('file', f);
        });

        axios({
          method: 'post',
          url: '/support-form',
          data: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
            // handle success
            // console.log(response);

            this.$emit('formSubmitStatus', true);
            this.btnSendLoadingStatus = false
           // console.log(response)
        })
        .catch((error) => {
            // handle error
            // console.log(error);
            this.$emit('formSubmitStatus', false);
            this.displayError = true;
            this.btnSendLoadingStatus = false
            console.log(error)
        });


      }
    },
  },

  computed: {

  },

  watch: {
    // filesData: function(newVal, oldVal) { // watch it
    //   console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    // }
  }


}
</script>


