<template>
  <section class="faq-sec">
    <div class="container">
      <h2 class="faq-sec__title">Frequently Asked Questions</h2>
      <p class="faq-sec__subtitle">Everything you need to know.</p>

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
        {'question': 'What is Flamingo Tracker 1?' , 'ansver': 'Flamingo automatically keeps Flamingo automatically keeps Flamingo automatically keeps Flamingo automatically keepsFlamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
        {'question': 'What is Flamingo Tracker 2?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
        {'question': 'What is Flamingo Tracker 3?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
        {'question': 'What is Flamingo Tracker 4?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
        {'question': 'What is Flamingo Tracker 5?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
        {'question': 'What is Flamingo Tracker 6?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
      ],

      activeIndex: null,
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
