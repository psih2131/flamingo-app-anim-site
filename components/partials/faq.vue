<template>
  <section class="faq-sec" id="Faq">
    <div class="container">
      <h2 class="faq-sec__title">{{ $t('faq') }}</h2>
      <p class="faq-sec__subtitle">{{ $t('faq_text') }}</p>

      <!-- faq-sec__element_active -->
      <div class="faq-sec__wrapper" >
        <template v-for="(item, index) in faq" :key="index">
          <component__faq_element :faqData="item" :currentIndex="+index" @activIndexFaq="getCurrentIndex" :activIndexProps="+activeIndex"/>
        </template>

        

      </div>
    </div>
  </section>
</template>

<script>

import component__faq_element from '@/components/component__faq-element.vue'


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
        {'question': this.t('faq_q7') , 'ansver': this.t('faq_a7') },
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


  component: {
    component__faq_element,
    
  },

  methods: {
    getCurrentIndex(data) {
      this.activeIndex = data
    }
  }

}
</script>

<style scoped>

</style>
