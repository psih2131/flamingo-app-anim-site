<template>

  <section class="security-sec" id="Security">
    <div class="container">
      <div class="who-needs-sec__subtitle-row">
        <p class="who-needs-sec__subtitle">{{ $t('how_security') }}</p>
      </div>
      <h2 class="who-needs-sec__title">{{ $t('how_text') }}</h2>

      <div class="security-sec__wrapper">
        <div class="security-sec__element security-sec__el1">
          <h3 class="security-sec__element-title">{{ $t('how_important') }}<br>{{ $t('how_notifications') }}</h3>
          <p class="security-sec__element-subtitle">{{ $t('how_notify_text') }}</p>

          <div class="security-sec__icon-wrapper security-sec__icon-wrapper-1">
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.4317 12.5769H23.2319C15.1132 12.5769 10.0801 18.3275 10.0801 26.4433V48.2323C10.0801 56.3507 15.0152 62.0761 23.2319 62.0761H46.4165C54.5349 62.0761 59.5709 56.3507 59.5709 48.2323V34.6516" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1382 10.9259C58.8848 10.9259 61.9226 13.9637 61.9226 17.7106C61.9226 21.4574 58.8848 24.4953 55.1382 24.4953C51.3913 24.4953 48.3535 21.4574 48.3535 17.7106C48.3535 13.9637 51.3913 10.9259 55.1382 10.9259Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div class="security-sec__icon-wrapper security-sec__icon-wrapper-2">
            <svg width="194" height="195" viewBox="0 0 194 195" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_6938)">
                <path d="M73.1211 73.3555L84.8274 85.0618" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M109.197 109.433L120.904 121.139" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M133.105 133.341L144.812 145.048" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M181.355 181.592L193.062 193.298" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M120.932 73.3554L109.225 85.0616" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M144.846 49.4459L133.139 61.1521" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M168.746 25.5385L157.04 37.2448" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M192.66 1.63034L180.954 13.3366" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M84.3906 109.898L72.6844 121.605" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M65.2949 97.6978H48.7398" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M115.719 41.187L121.067 25.5196" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M137.453 16.8447L144.863 2.04015" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M96.5918 145.513V128.958" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M120.496 169.42L115.688 153.578" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M144.41 193.329L137.098 178.476" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M192.66 145.077L177.807 137.764" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M168.746 121.17L153.085 115.803" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M144.846 97.2617H128.291" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M168.746 73.3555L152.96 78.3436" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M192.66 49.4459L177.745 56.6303" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M192.66 97.2617L176.106 97.4643" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M61.1719 61.35L49.4656 49.6438" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M37.2656 37.4428L25.5594 25.7366" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M12.9258 13.0995L1.21951 1.39324" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M49.4355 145.245L61.1418 133.539" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M25.5312 169.154L37.2375 157.448" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M1.625 193.061L13.3313 181.355" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M78.5625 153.504L73.214 169.172" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M57.0156 178.109L49.6062 192.913" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M97.6855 49.1797V65.7349" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M73.7812 25.2706L78.5897 41.112" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M49.8711 1.36311L57.1834 16.2159" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M1.625 49.6138L16.4777 56.9261" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M25.5312 73.522L41.1923 78.889" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M25.5312 121.338L41.3171 116.35" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M1.625 97.4295L18.1789 97.2269" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M97.4082 1.64259L97.2056 18.1965" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M156.857 157.405L168.564 169.111" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M16.457 137.844L1.6525 145.253" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M96.873 193.049L97.0757 176.495" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_6938">
                  <rect width="193" height="194" fill="white" transform="translate(0.5 0.5)"/>
                </clipPath>
              </defs>
            </svg>

          </div>
        </div>


        <div class="security-sec__element security-sec__el2">
          <h3 class="security-sec__element-title">{{ $t('how_complete') }}<br>{{ $t('how_privacy') }}</h3>
          <p class="security-sec__element-subtitle">{{ $t('how_complete_text') }}
            <br><br>{{ $t('how_complete_text2') }}</p>

          <div class="security-sec__icon-wrapper security-sec__icon-wrapper-1">
            <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.4509 96.58H44.7705C39.0162 96.58 34.3535 101.245 34.3535 107L34.3563 138C34.3563 143.751 39.0191 148.417 44.7733 148.417H60.6566C66.4108 148.417 71.0764 143.751 71.0764 137.997L71.0735 125.141" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M67.2097 118.16H58.2731C55.8251 118.16 53.8379 116.175 53.8379 113.724V108.71C53.8379 106.259 55.8251 104.275 58.2731 104.275H67.2097C69.6577 104.275 71.6449 106.259 71.6449 108.71V113.724C71.6449 116.175 69.6577 118.16 67.2097 118.16Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M68.0751 104.362V101.848C68.0405 98.9046 65.6213 96.543 62.678 96.5804C59.7922 96.6178 57.4565 98.9392 57.4102 101.825V104.362" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M52.9528 137.929V137.684M51.959 137.876C51.959 137.323 52.4081 136.878 52.9609 136.878C53.5137 136.878 53.959 137.323 53.959 137.876C53.959 138.432 53.5137 138.878 52.9609 138.878C52.4081 138.878 51.959 138.432 51.959 137.876Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.7802 241.28C51.1066 241.954 51.1066 243.046 51.7802 243.72L62.7581 254.698C63.4317 255.371 64.5239 255.371 65.1976 254.698C65.8712 254.024 65.8712 252.932 65.1976 252.258L55.4395 242.5L65.1976 232.742C65.8712 232.068 65.8712 230.976 65.1976 230.302C64.5239 229.629 63.4317 229.629 62.7581 230.302L51.7802 241.28ZM-65.7802 121.28C-66.4539 120.607 -67.5461 120.607 -68.2198 121.28L-79.1976 132.258C-79.8712 132.932 -79.8712 134.024 -79.1976 134.698C-78.5239 135.371 -77.4317 135.371 -76.7581 134.698L-67 124.94L-57.2419 134.698C-56.5683 135.371 -55.4761 135.371 -54.8024 134.698C-54.1288 134.024 -54.1288 132.932 -54.8024 132.258L-65.7802 121.28ZM136.814 36.6206V38.3456H138.539V36.6206H136.814ZM171.275 122.5C171.275 187.821 118.321 240.775 53 240.775V244.225C120.227 244.225 174.725 189.727 174.725 122.5H171.275ZM53 4.225C85.1436 4.225 114.289 17.0451 135.609 37.855L138.019 35.3862C116.081 13.9727 86.0799 0.775 53 0.775V4.225ZM11.6956 233.363C-33.2604 216.607 -65.275 173.29 -65.275 122.5H-68.725C-68.725 174.777 -35.7712 219.353 10.4907 236.596L11.6956 233.363ZM-61.3954 92.34C-48.0614 41.6263 -1.8963 4.225 53 4.225V0.775C-3.50245 0.775 -51.0093 39.2708 -64.732 91.4627L-61.3954 92.34ZM138.539 36.6206V21.5H135.089V36.6206H138.539ZM136.814 34.8956H123V38.3456H136.814V34.8956Z" fill="#B5F3D1"/>
            </svg>

          </div>

          <div class="security-sec__icon-wrapper security-sec__icon-wrapper-2">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.4509 10.0801H27.7705C22.0162 10.0801 17.3535 14.7456 17.3535 20.4999L17.3563 51.5002C17.3563 57.2516 22.0191 61.9172 27.7733 61.9172H43.6566C49.4108 61.9172 54.0764 57.2516 54.0764 51.4974L54.0735 38.641" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50.2097 31.6599H41.2731C38.8251 31.6599 36.8379 29.6755 36.8379 27.2247V22.2106C36.8379 19.7597 38.8251 17.7754 41.2731 17.7754H50.2097C52.6577 17.7754 54.6449 19.7597 54.6449 22.2106V27.2247C54.6449 29.6755 52.6577 31.6599 50.2097 31.6599Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.0751 17.8623V15.3481C51.0405 12.4047 48.6213 10.0431 45.678 10.0805C42.7922 10.118 40.4565 12.4393 40.4102 15.3251V17.8623" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M35.9528 51.4288V51.1831M34.959 51.375C34.959 50.8222 35.4081 50.377 35.9609 50.377C36.5137 50.377 36.959 50.8222 36.959 51.375C36.959 51.9316 36.5137 52.377 35.9609 52.377C35.4081 52.377 34.959 51.9316 34.959 51.375Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>


        </div>


        <div class="security-sec__element security-sec__el3">
          <h3 class="security-sec__element-title">{{ $t('how_bank_level') }}<br>{{ $t('how_data_security') }}</h3>
          <p class="security-sec__element-subtitle">{{ $t('how_bank_text') }}</p>

          <div class="security-sec__icon-wrapper security-sec__icon-wrapper-1">
            <svg width="244" height="143" viewBox="0 0 244 143" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_7054)">
                <path d="M37.9668 3.49915L37.9668 20.0812" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M37.9668 54.8588L37.9668 71.4408" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M37.9668 88.9389L37.9668 105.521" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M37.9668 88.9389L37.9668 105.521" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M37.9668 122.539L37.9668 139.121" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M72.1055 37.5546L55.5235 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M105.691 37.5546L89.1094 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M139.785 37.5546L123.203 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M173.863 37.5546L157.281 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M207.939 37.5546L191.357 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M241.545 37.5546L224.963 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M20.2617 37.5546L3.6797 37.5546" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M14.9785 15.019L3.25326 3.29373" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M60.582 15.019L72.3073 3.29373" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M90.8223 10.6994L105.707 3.39098" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M123.941 8.7794L139.675 3.54178" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M157.541 7.33922L173.662 3.45464" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M191.621 6.3788L207.957 3.53334" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M225.221 6.3788L241.557 3.53334" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M3.46289 71.6591L15.1881 59.9339" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M3.46289 105.739L11.277 91.1132" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M3.46289 139.339L8.80346 123.64" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M72.1055 139.339L66.7649 123.64" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M72.1055 105.739L64.8146 90.8454" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M72.1055 71.6591L60.3802 59.9339" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M105.691 71.6591L90.9782 64.0116" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M139.785 71.6591L124.133 66.1839" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M173.863 71.6591L157.881 67.2399" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M207.939 71.6591L191.599 68.8363" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M241.545 71.6591L225.215 68.7797" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M241.545 105.739L225.963 100.067" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M207.939 105.739L192.555 99.5507" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M173.863 105.739L159.123 98.1435" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M139.785 105.739L126.28 96.1173" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M105.691 105.739L93.8235 94.1577" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M105.691 139.339L96.7455 125.377" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M139.785 139.339L128.216 127.459" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M173.863 139.339L160.841 129.074" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M207.939 139.339L193.892 130.527" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
                <path d="M241.545 139.339L227.184 131.048" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_7054">
                  <rect width="244" height="142" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>

          </div>

          <div class="security-sec__icon-wrapper security-sec__icon-wrapper-2">
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.0939 38.4282C57.0939 56.0342 36.0019 62.4203 36.0019 62.4203C36.0019 62.4203 14.9101 56.0371 14.9101 38.4282C14.9101 20.8193 14.1423 19.4435 15.8348 17.7509C17.5301 16.0558 33.2363 10.5803 36.0019 10.5803C38.7676 10.5803 54.4765 16.0417 56.1691 17.7509C57.8588 19.4576 57.0939 20.8222 57.0939 38.4282Z" stroke="#B5F3D1" stroke-width="3.45" stroke-linejoin="round"/>
              <path d="M28.8516 35.6671L34.0523 40.8762L44.7705 30.155" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>


          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
name: "how-it-works"
}
</script>

<style scoped>

</style>
