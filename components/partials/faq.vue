<template>
  <section class="faq-sec">
    <div class="container">
      <h2 class="faq-sec__title">{{ $t('faq') }}</h2>
      <p class="faq-sec__subtitle">{{ $t('faq_text') }}</p>

      <!-- faq-sec__element_active -->
      <div class="faq-sec__wrapper" >

        <div v-for="(item, index) in faq" :key="index"
             :class="['faq-sec__element', { 'faq-sec__element_active ': activeIndex === index }]"
             @click="toggleActive(index)">
          <div class="faq-sec__element-header">
            <div class="faq-sec__element-header-icon-wrapper">
              <div class="faq-l faq-X"></div>
              <div class="faq-l faq-Y"></div>
            </div>
            <p class="faq-sec__element-header-title">{{ item.question }}</p>
          </div>
          <div class="faq-sec__element-body">
            {{ item.ansver }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "faq",
  data() {
    return {
      faq: [
        {'question': this.t('faq_q1'), 'ansver': this.t('faq_a1') },
        {'question': this.t('faq_q2'), 'ansver': this.t('faq_a2') },
        {'question': this.t('faq_q3'), 'ansver': this.t('faq_a3') },
        {'question': this.t('faq_q4') , 'ansver': this.t('faq_a4') },
        {'question': this.t('faq_q5') , 'ansver': this.t('faq_a5') },
        {'question': this.t('faq_q6') , 'ansver': this.t('faq_a6') },
      ],
      activeIndex: null,
    }
  },
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  },
  methods: {
    toggleActive(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
  }

}
</script>

<style scoped>

</style>
