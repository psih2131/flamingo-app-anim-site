<template>
  <section class="help-list-sec">
    <div class="container">
      <div class="help-list-sec__title-wrapper">
        <h2 class="help-list-sec__title">{{ $t('help_you') }}</h2>
        <div class="help-list-sec__icon-wrapper">
          <svg width="244" height="241" viewBox="0 0 244 241" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.96094 125.984C13.1068 91.247 45.9455 26.5432 96.1329 45.6255C158.867 69.4783 99.736 206.092 61.3309 189.25C24.6401 173.16 48.2835 64.1416 115.186 45.6255C180.76 27.4768 195.579 99.887 188.028 141.819C180.477 183.751 154.723 225.339 127.941 210.216C90.9576 189.332 134.465 62.0355 240.561 50.0497M240.561 50.0497L215.567 82.0426M240.561 50.0497L201.681 37.23" stroke="white" stroke-width="3.45" stroke-linecap="square"/>
          </svg>
        </div>
      </div>
      <div class="help-list-sec__list-wrapper">
        <div class="help-list-sec__element" v-for="item in helpListArray" :key="item">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74967 14.7502L12.2497 18.2502L19.2497 11.2502M25.6663 14.7502C25.6663 21.1935 20.443 26.4168 13.9997 26.4168C7.55635 26.4168 2.33301 21.1935 2.33301 14.7502C2.33301 8.30684 7.55635 3.0835 13.9997 3.0835C20.443 3.0835 25.6663 8.30684 25.6663 14.7502Z" stroke="#0E9384" stroke-width="2.33333" stroke-linecap="square"/>
          </svg>
          <p class="help-list-sec__element-text">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "howhelp",
  data() {
    return {
      helpListArray: [
          this.t('help1'),
          this.t('help2'),
          this.t('help3'),
          this.t('help4'),
          this.t('help5'),
          this.t('help6'),
          this.t('help7'),
          this.t('help8'),
          this.t('help9'),
          this.t('help10'),
          this.t('help11'),
          this.t('help12'),
          this.t('help13'),
          this.t('help14'),
      ],
    }
  },
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  },
}
</script>

<style scoped>

</style>
