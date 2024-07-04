<template>
    <div v-if="!formSubmitted" class="contact-us-sec__form-wrapper form" >
        <div class="form__inp-wrapper">
            <p class="form__inp-title">{{ $t('contact_name') }}*</p>
            <input type="text" class="form__inp"
                   :placeholder="$t('contact_name')"
                    v-model="form.name"
            >
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">{{ $t('contact_email') }}*</p>
            <input type="text" class="form__inp"
                   placeholder="you@company.com"
                   v-model="form.email"
                   error-text="Please enter your email address in proper format"
            >
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">{{ $t('contact_model') }}</p>
            <select class="form__select" name="select_model" id="select_model" v-model="form.phone">
                <option value="0">{{ $t('contact_select_model') }}</option>
                <option :value="item.text" v-for="(item, index) in phone" :key="index">{{item.text}}</option>
            </select>
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">{{ $t('contact_version') }}</p>
            <select class="form__select" name="select_version" id="select_version" v-model="form.ios">
                <option value="0">{{ $t('contact_select_version') }}</option>
                <option :value="item.text" value="" v-for="(item, index) in ios" :key="index">{{item.text}}</option>
            </select>
        </div>
        <div class="form__inp-wrapper">
            <p class="form__inp-title">{{ $t('contact_message') }}</p>
            <textarea class="form__textarea"  v-model="form.message" :placeholder="$t('contact_message_placeholder')"></textarea>
        </div>

        <div class="form__inp-wrapper-btn">
            <button class="form__btn-send" @click="sendMessage">{{ $t('contact_submit') }}</button>
        </div>

    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      isOpen: this.show || false,
      formSubmitted: false,
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
      submitTxt: 'submit'
    }
  },
  validations () {
    return {
      name: { required }, // Matches this.firstName
      email: { required, email } // Matches this.contact.email
    }
  },
  methods: {
    sendMessage(){
      this.submitTxt = 'submitting'
      this.submitTxt = 'submit'
      this.v$.$touch()
      if(this.v$.$invalid) {
        // console.log(this.form);
        const message = `Support request from ${this.$route.query.udid ? ('udid: ' + this.$route.query.udid) : 'landing page'}.
  Name: ${this.form.name}
  Email: ${this.form.email}
  Phone: ${this.form.phone ? this.form.phone : '----'}
  IOS: ${this.form.ios ? this.form.ios : '----'}
  Message: ${this.form.message ? this.form.message : '----'}`
        let bodyFormData = new FormData();

        bodyFormData.append('message', message);
        bodyFormData.append('email', this.form.email);
        axios({
          method: 'post',
          url: '/support-form',
          data: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(function (response) {
              //handle success
              // console.log(response);
            })
            .catch(function (response) {
              //handle error
              // console.log(response);
            });
        this.formSubmitted = true
      }
    },
  },

  computed: {

  },

  watch: {

  },

  mounted(){

  },

}
</script>


<!--<div v-if="!formSubmitted" class="custom-popup__wrapper">-->
<!--<div class="custom-popup__body">-->
<!--  <div class="custom-popup__title">Use this form to complete a support request or send us your feedback.</div>-->
<!--  <div class="custom-popup__form form">-->
<!--    <div class="form__inputs">-->
<!--      <ui-input-->
<!--          v-model="form.name"-->
<!--          width="412px"-->
<!--          height="48px"-->
<!--          placeholder="Name"-->
<!--          error-text="Please enter your name"-->
<!--          :error="$v.form.name.$anyError"-->
<!--      ></ui-input>-->
<!--      <ui-input-->
<!--          v-model="form.email"-->
<!--          height="48px"-->
<!--          placeholder="Email"-->
<!--          error-text="Please enter your email address in proper format"-->
<!--          :error="$v.form.email.$anyError"-->
<!--      ></ui-input>-->
<!--    </div>-->
<!--    <div class="form__inputs">-->
<!--      <ui-select-->
<!--          v-model="form.phone"-->
<!--          class="planer-page__select"-->
<!--          height="48px"-->
<!--          placeholder="iPhone Model"-->
<!--          :options="phone"-->
<!--          error-text="The iphone model is incorrect"-->
<!--      ></ui-select>-->
<!--      <ui-select-->
<!--          v-model="form.ios"-->
<!--          class="planer-page__select"-->
<!--          height="48px"-->
<!--          :options="ios"-->
<!--          placeholder="iOS version"-->
<!--          error-text="The ios version is incorrect"-->
<!--      ></ui-select>-->
<!--    </div>-->
<!--    <div class="form__inputs">-->
<!--      <div class="form__payment-column">-->
<!--        <ui-input-->
<!--            v-model="form.message"-->
<!--            width="412px"-->
<!--            height="48px"-->
<!--            placeholder="Message"-->
<!--            error-text="Please enter your message"-->
<!--            :error="$v.form.message.$anyError"-->
<!--        ></ui-input>-->
<!--        <img src="~/static/images/payment.svg" alt="" class="form__payment-image">-->
<!--        &lt;!&ndash;              <div class="form__payment-download">&ndash;&gt;-->
<!--        &lt;!&ndash;                <div class="form__payment-download__text">&ndash;&gt;-->
<!--        &lt;!&ndash;                  <p>studio-3194524.jpg</p>&ndash;&gt;-->
<!--        &lt;!&ndash;                  <span>300 KB</span>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                <img src="~/static/images/payment-delete.svg" alt="">&ndash;&gt;-->
<!--        &lt;!&ndash;              </div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="form__button" @click="sendMessage">-->
<!--    {{ submitTxt }}-->
<!--  </div>-->
<!--  &lt;!&ndash;        <div class="form__error-button">&ndash;&gt;-->
<!--  &lt;!&ndash;          Opps! Seems like connection with the server failed. Please, try again later&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->
<!--</div>-->
<!--</div>-->
