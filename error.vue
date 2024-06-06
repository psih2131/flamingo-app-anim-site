<template>
    <header class="error-header">
      <div class="container">
        <a @click="goBack" class="error-header__logo-wrapper">
          <img src="@/assets/images/logo.svg" alt="" class="error-header__error-img">
        </a>
      </div>
    </header>
  
    <main class="main main-error">
      <section class="error-page-sec">
        <div class="container">
          <h2 class="error-page-sec__title">Error: {{ error.statusCode }} We can’t find that page</h2>
          <p class="error-page-sec__subtitle">Sorry, the page you are looking for doesn't exist or has been moved.</p>
          <div class="error-page-sec__btn-row">
            
            <button @click="goBack" class="error-page-sec__prev-link-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#FCFCFD" stroke-width="2" stroke-linecap="square"/>
              </svg>                            
              Go back
            </button>

            <nuxt-link no-prefetch to="/" class="error-page-sec__home-btn">Take me home</nuxt-link>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
    import type { NuxtError } from '#app'
    import { useRouter } from 'vue-router'
  
    const props = defineProps({
      error: Object as () => NuxtError
    })
  
    const router = useRouter()
  
    const goBack = () => {
      router.go(-1)
    }
  </script>