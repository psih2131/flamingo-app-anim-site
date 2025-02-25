<template>

    <section class="front-apple-anim-sec" ref="containerAnim">

        
        <div class="asd">

            <video 
            src="@/assets/video/globe_g10_f30_q45.webm" 
            muted 
            playsinline 
            ref="videoPhone1"
            >
            Ваш браузер не поддерживает тег видео.
            </video>
           <div> <button @click="intervalTimerstart()">start</button></div>
        </div>
    </section>
       
</template>



<script>
import { ref, onMounted, onUnmounted } from "vue";
// Import Swiper Vue.js components
 import { Controller } from 'swiper/modules';
 import { Swiper, SwiperSlide } from 'swiper/vue';

 // Import Swiper styles
 import 'swiper/css';

 import 'swiper/css/pagination';


 // import required modules
 import { Pagination, Mousewheel, Navigation } from 'swiper/modules';


33
export default {
   data() {
       return {
        counter: 0,
        progresVideoTimer: 0,
        lastScrollTop: null,
        timer: null,

        ticking: false,
        lastKnownScrollY: 0,
       }
   },

   components: {

   },


   methods: {

    updateVideo(){
        let video = this.$refs['videoPhone1']
        let container = this.$refs['containerAnim']
        let scrollPercentage = window.scrollY  / container.scrollHeight;
       
        video.currentTime = video.duration * scrollPercentage;

        this.ticking = false;
          console.log(2)
    },

    handleScroll(){
        this.lastKnownScrollY = window.scrollY;

        if (!this.ticking) {
            window.requestAnimationFrame(this.updateVideo); // Планируем обновление
            this.ticking = true;
        }

    },


    intervalTimerstart(){
            this.counter = 0
            this.time = null
            this.$refs['videoPhone1'].currentTime = 0
      
            let allDuration = this.$refs['videoPhone1'].duration * 1000
         
            
  

            // Запускаем таймер, который обновляет currentTime



            this.timer = setInterval(() => {
            // Увеличиваем counter
            this.counter = this.counter + 33;

            // Обновляем currentTime у видео
            console.log(this.counter);
            this.$refs['videoPhone1'].currentTime = this.counter / 1000;
            // this.$refs['videoPhone1'].currentTime += 0.005;

            // Останавливаем, если counter достиг 5000
            if (this.counter >= allDuration) {
                clearInterval(this.timer); // Останавливаем таймер
            }
         
            },33); // Интервал в 16 миллисекунд

      
        
       
    },


    // intervalTimerstart() {
    // // Получаем длительность видео
    // let allDuration = this.$refs['videoPhone1'].duration;
    // console.log("allDuration", allDuration);

    // // Переменная для начала отсчета времени
    // let startTime = null;
    // let counter = 0; // Начальный счетчик

    // // Функция для обновления времени видео
    // const updateVideoTime = (time) => {
    //     // Инициализируем стартовое время
    //     if (!startTime) startTime = time;

    //     // Прогресс времени (разница от старта)
    //     const progress = time - startTime;

    //     // Обновляем счетчик на основе прогресса
    //     counter = progress;

    //     // Обновляем currentTime у видео
    //     this.$refs['videoPhone1'].currentTime = counter / 1000; // Конвертируем в секунды

    //     // Логируем прогресс
    //     console.log(counter);

    //     // Если время прошло меньше 5000 миллисекунд, продолжаем анимацию
    //     if (counter < 5000) {
    //     // Запускаем следующий кадр
    //     requestAnimationFrame(updateVideoTime);
    //     }
    // };

    // // Начинаем анимацию
    // requestAnimationFrame(updateVideoTime);
    // }

   

   },

   computed: {

   },

   watch: {

   },


   mounted(){
    window.addEventListener('scroll',this.handleScroll)
      
   },
   beforeDestroy() {
      
   },
}
</script>
