<template>

  <section class="reasons-sec" id="Features">
    <div class="container">
      <div class="who-needs-sec__subtitle-row">
        <p class="who-needs-sec__subtitle">{{ $t('features_title') }}</p>
      </div>
      <h2 class="who-needs-sec__title">{{ $t('features_10reasons') }}</h2>
      <p class="reasons-sec__subtitle">{{ $t('features_10reason_text') }}</p>

      <div class="reasons-sec__wrapper">

        <div class="reasons-sec__big-wrapper">
          <div class="reasons-sec__big-element reason-element r-big r-big_x1">
            <div class="r-big__text">
              <p class="r-big__title">{{ $t('features_auto') }}<br>{{ $t('features_record') }}</p>
              <p class="r-big__subtitle">{{ $t('features_record_text') }}</p>
            </div>

            <div class="r-big__img-wrapper">
              <img src="@/assets/images/reasons-pages/r1.jpg" alt="" class="r-big__img">
            </div>
          </div>



          <div class="reasons-sec__small-element reason-element r-small r-small-x1 reason-element-active reasons-sec__dropdown" @click="openPopupInfo('smal-anim',$event)">

            <div class="reasons-sec__dropdown-container">
              <div class="reason-element-active__content-wrapper ">

                <div class="reason-element-active__content-wrapper-text">
                  <p class="r-small__title">{{ $t('features_plan') }}</p>
                  <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
                </div>
                

                
                <div class="r-small__svg-wrapper">
                  <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_6171)">
                      <mask id="mask0_1_6171" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="73">
                        <path d="M72 0.5H0V72.5H72V0.5Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_1_6171)">
                        <path d="M15.6387 13.2268L26.0449 23.6331M26.0449 13.2268L15.6387 23.6331" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M43.6367 48.0874L54.043 58.4937M54.043 48.0874L43.6367 58.4937" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M17.2695 49.634V43.798C17.2695 39.1434 21.0523 35.3605 25.707 35.3605H44.6211C49.2758 35.3605 53.0586 31.5777 53.0586 26.923V24.4199" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M17.2703 49.8026C18.812 49.8026 20.2077 50.4275 21.2179 51.4378C22.2282 52.448 22.8531 53.8438 22.8531 55.3854C22.8531 56.9271 22.2282 58.3228 21.2179 59.3331C20.2077 60.3433 18.812 60.9682 17.2703 60.9682C14.187 60.9682 11.6875 58.4688 11.6875 55.3854C11.6875 52.3021 14.187 49.8026 17.2703 49.8026Z" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M52.5808 12.5795C53.0167 11.8342 54.0995 11.8342 54.5355 12.5795L60.1745 22.3389C60.6105 23.0842 60.062 24.0264 59.2042 24.0264H47.9261C47.0542 24.0264 46.5198 23.0842 46.9558 22.3389L52.5808 12.5795Z" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_6171">
                        <rect width="72" height="72" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
  
              <div class="reason-element-active__border-wrapper">
                <div class="reason-element-active__border-1"></div>
                <div class="reason-element-active__border-2"></div>
                <div class="reason-element-active__box-shadow"></div>
                <div class="reason-element__border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                  </svg>
                </div>
  
                <div class="reason-element__link-btn-wrapper">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                  </svg>
                </div>
              </div>
            </div>

            

          </div>


          <div class="reasons-sec__small-element reason-element r-small r-small-x2  reason-element-active reasons-sec__dropdown reasons-sec__dropdown_right" @click="openPopupInfo('smal-anim',$event)">

            <div class="reasons-sec__dropdown-container">
              <div class="reason-element-active__content-wrapper">

                <div class="reason-element-active__content-wrapper-text">
                  <p class="r-small__title">{{ $t('features_store') }}</p>
                  <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
                </div>
                
  
                <div class="r-small__svg-wrapper">
                  <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.1399 29.5575L56.8631 32.1126L58.0165 32.7606C60.4735 34.141 60.4735 37.6998 58.0165 39.0802L42.3695 47.8711C38.7407 49.9098 34.3216 49.9098 30.6928 47.8711L15.0458 39.0802C12.5889 37.6998 12.5889 34.141 15.0458 32.7606L16.1991 32.1126L20.796 29.48" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M52.3395 42.2657L57.5569 44.9188C60.1394 46.2188 60.222 49.8986 57.7009 51.3153L42.3666 59.9305C38.7378 61.9693 34.3187 61.9693 30.6899 59.9305L15.5791 51.4408C13.0146 50 13.1559 46.2387 15.8212 44.9971L21.077 42.4679" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M30.6928 11.1526L15.0458 19.9436C12.5889 21.3239 12.5889 24.8828 15.0458 26.2632L30.6928 35.054C34.3216 37.0928 38.7407 37.0928 42.3695 35.054L58.0165 26.2632C60.4735 24.8828 60.4735 21.3239 58.0165 19.9436L42.3695 11.1526C38.7407 9.11384 34.3216 9.11384 30.6928 11.1526Z" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
  
  
              <div class="reason-element-active__border-wrapper">
                <div class="reason-element-active__border-1"></div>
                <div class="reason-element-active__border-2"></div>
                <div class="reason-element-active__box-shadow"></div>
                <div class="reason-element__border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                  </svg>
                </div>
  
                <div class="reason-element__link-btn-wrapper">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                  </svg>
                </div>
              </div>
            </div>
           

          </div>
        </div>

        <div class="reasons-sec__big-element reason-element r-big r-big_40 r-big_x2">
          <div class="r-big__text">
            <p class="r-big__title">{{ $t('features_residency') }}<br>& {{ $t('features_dom_status') }}</p>
            <p class="r-big__subtitle">{{ $t('features_dom_text') }}</p>
          </div>

          <div class="r-big__img-wrapper">
            <img src="@/assets/images/reasons-pages/r2.jpg" alt="" class="r-big__img">
          </div>
        </div>

        <div class="reasons-sec__tax-element reason-element r-tax r_soon  reason-element-active reasons-sec__dropdown reasons-sec__dropdown_right" @click="openPopupInfo('midle-anim',$event)">

          <div class="reasons-sec__dropdown-container">
            <div class="reason-element-active__content-wrapper">
              <div class="r-tax__text-wrapper">

                <div class="reason-element-active__content-wrapper-text">
                  <p class="r-small__title">{{ $t('features_tax') }} <span><br></span>{{ $t('features_residency') }}<span><br></span>{{ $t('features_assessment') }}</p>
                  <p class="r-small__teg">{{ $t('features_coming_soon') }}</p>
                  <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
                </div>
                
              </div>
  
              <img src="@/assets/images/reasons-pages/r3.png" alt="" class="r-tax__img r-tax__img-pc">
              <img src="@/assets/images/reasons-pages/r3-mob.png" alt="" class="r-tax__img r-tax__img-mob">
  
  
              <div class="r-small__svg-wrapper">
                <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_6418)">
                    <mask id="mask0_1_6418" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="73">
                      <path d="M72 0.5H0V72.5H72V0.5Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_6418)">
                      <path d="M52.1578 60.8565V60.8706M52.1578 54.4722C52.1297 52.1378 54.2391 51.1534 55.8141 50.2534C57.7406 49.1987 59.0344 47.5112 59.0344 45.1769C59.0344 41.7175 56.2359 38.9331 52.7906 38.9331C49.3312 38.9331 46.5469 41.7175 46.5469 45.1769" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                      <path d="M32.1475 38.9329H25.6647C18.6616 38.9329 12.9944 44.6 12.9944 51.6032C12.9944 53.4594 12.8678 55.3579 13.1772 57.2" stroke="#6172F3" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                      <path d="M31.6555 11.8486C39.1346 11.8486 45.1977 17.9117 45.1977 25.3908C45.1977 32.87 39.1346 38.933 31.6555 38.933C24.1763 38.933 18.1133 32.87 18.1133 25.3908C18.1133 17.9117 24.1763 11.8486 31.6555 11.8486Z" stroke="#6172F3" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6418">
                      <rect width="72" height="72" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
  
  
            <div class="reason-element-active__border-wrapper">
              <div class="reason-element-active__border-1"></div>
              <div class="reason-element-active__border-2"></div>
              <div class="reason-element-active__box-shadow"></div>
              <div class="reason-element__border">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                </svg>
              </div>
  
              <div class="reason-element__link-btn-wrapper">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                </svg>
              </div>
            </div>
          </div>

          
        </div>

        <div class="reasons-sec__big-element reason-element r-big r-big_50 r-big_x3 ">
          <div class="r-big__text">
            <p class="r-big__title">{{ $t('features_usa') }}<br> {{ $t('features_day_count') }}</p>
            <p class="r-big__subtitle"> {{ $t('features_usa_text') }}</p>
          </div>

          <div class="r-big__img-wrapper">
            <img src="@/assets/images/reasons-pages/r4.jpg" alt="" class="r-big__img">
          </div>
        </div>

        <div class="reasons-sec__big-element reason-element r-big r-big_50 r-big_x4">
          <div class="r-big__text">
            <p class="r-big__title">{{ $t('features_schengen') }}<br>{{ $t('features_calculator') }}</p>
            <p class="r-big__subtitle"> {{ $t('features_calculator_text') }}</p>
          </div>

          <div class="r-big__img-wrapper">
            <img src="@/assets/images/reasons-pages/r5.jpg" alt="" class="r-big__img">
          </div>
        </div>

        <div class="reasons-sec__small-element reason-element  r-small r-small-x3 r_soon reason-element-active reasons-sec__dropdown reason-element__large-anim"  @click="openPopupInfo('large-anim',$event)">
          <div class="reasons-sec__dropdown-container">
            <div class="reason-element-active__content-wrapper">

              <div class="reason-element-active__content-wrapper-text">
                <p class="r-small__title">{{ $t('features_short_term') }}</p>
                <p class="r-small__teg"> {{ $t('features_coming_soon') }}</p>
                <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
              </div>

             
              <div class="r-small__svg-wrapper">
                <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.5544 25.7897L36.5625 34.7815" stroke="#6172F3" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M12.9609 38.1534L22.1222 47.3147C22.6502 47.8426 23.5021 47.8426 24.0302 47.3147L29.8187 41.5259" stroke="#6172F3" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M25.3203 37.0281L35.6048 47.3128C36.133 47.8407 36.9872 47.8407 37.5128 47.3128L59.0385 25.7896" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
  
              </div>
            </div>
  
  
            <div class="reason-element-active__border-wrapper">
              <div class="reason-element-active__border-1"></div>
              <div class="reason-element-active__border-2"></div>
              <div class="reason-element-active__box-shadow"></div>
              <div class="reason-element__border">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                </svg>
              </div>
  
              <div class="reason-element__link-btn-wrapper">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                </svg>
              </div>
            </div>
          </div>
      
        </div>

        <div class="reasons-sec__small-element reason-element r-small r-small-x4 reason-element-active reasons-sec__dropdown reason-element__large-anim "  @click="openPopupInfo('large-anim',$event)">
          
          <div class="reasons-sec__dropdown-container">
            <div class="reason-element-active__content-wrapper">

              <div class="reason-element-active__content-wrapper-text">
                <p class="r-small__title">{{ $t('features_new_york') }}</p>
                <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
              </div>

              
              <!-- <p class="r-small__teg">Coming soon</p> -->
              <div class="r-small__svg-wrapper">
                <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.2516 25.6667V20.7015C40.2516 18.7447 38.6653 17.1584 36.7084 17.1584H35.2912C33.3344 17.1584 31.748 18.7447 31.748 20.7015V25.6619" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M35.9993 11.4893V17.1583" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M33.1654 17.1668L30.332 14.3335" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M38.832 17.1668L41.6654 14.3335" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M44.5547 28.3202L49.3416 23.6362C50.4519 22.5495 52.23 22.5591 53.3285 23.6576L57.845 28.174C58.9519 29.281 58.9519 31.0757 57.845 32.1826L45.3386 44.6889" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M24.6621 62.5106V56.8416L43.7479 36.6407" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M44.5039 51.1724H50.1729C51.7384 51.1724 53.0075 49.9033 53.0075 48.3379V38.4165" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M44.5033 62.5106V31.331C44.5033 28.2 41.9652 25.6619 38.8343 25.6619H27.4963L18.9927 17.1584H16.1582V25.6619L27.4963 37V52.5833" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M64.346 62.5106H10.4902" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.569 8.82704L17.5754 5.82058L20.5819 8.82704C22.2423 10.4875 22.2423 13.1795 20.5819 14.84V14.84C18.9214 16.5004 16.2294 16.5004 14.569 14.84V14.84C12.9085 13.1795 12.9085 10.4875 14.569 8.82704V8.82704Z" stroke="#233457" stroke-width="3.45" stroke-linecap="square"/>
                </svg>
  
              </div>
            </div>
  
  
            <div class="reason-element-active__border-wrapper">
              <div class="reason-element-active__border-1"></div>
              <div class="reason-element-active__border-2"></div>
              <div class="reason-element-active__box-shadow"></div>
              <div class="reason-element__border">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                </svg>
              </div>
  
              <div class="reason-element__link-btn-wrapper">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                </svg>
              </div>
            </div>
          </div>
          

        </div>

        <div class="reasons-sec__small-element reason-element r-small r-small-x5 r-small_black reason-element-active reasons-sec__dropdown reason-element__large-anim reasons-sec__dropdown_right"  @click="openPopupInfo('large-anim',$event)">
          
          <div class="reasons-sec__dropdown-container">
            <div class="reason-element-active__content-wrapper">

              <div class="reason-element-active__content-wrapper-text">
                <p class="r-small__title">{{ $t('features_build_in') }}</p>
                <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
              </div>
              
              <!-- <p class="r-small__teg">Coming soon</p> -->
              <div class="r-small__svg-wrapper">
                <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.3591 42.9351H14.4079C12.0167 42.9351 10.0801 44.8745 10.0801 47.2628V58.0502C10.0801 60.4325 12.0285 62.3808 14.4079 62.3808H57.5891C59.9718 62.3808 61.9201 60.4325 61.9201 58.0502V53.0225C61.9201 50.6342 59.9804 48.6948 57.5891 48.6948H44.6409" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5209 10.625H30.477C28.7528 10.625 27.3594 12.0214 27.3594 13.7425V19.2955C27.3594 21.0166 28.7528 22.413 30.477 22.413H41.5209C43.242 22.413 44.6385 21.0166 44.6385 19.2955V13.7425C44.6385 12.0214 43.242 10.625 41.5209 10.625Z" stroke="#F1F3F6" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M44.6385 62.3764V37.903C44.6385 35.5117 42.6988 33.5752 40.3104 33.5752H31.6872C29.3077 33.5752 27.3594 35.5235 27.3594 37.903V62.3764" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
  
  
            <div class="reason-element-active__border-wrapper">
              <div class="reason-element-active__border-1"></div>
              <div class="reason-element-active__border-2"></div>
              <div class="reason-element-active__box-shadow"></div>
              <div class="reason-element__border">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                </svg>
              </div>
  
              <div class="reason-element__link-btn-wrapper">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                </svg>
              </div>
            </div>
          </div>
          
          

        </div>

        <div class="reasons-sec__small-element reason-element r-small r-small-x6 reason-element-active reasons-sec__dropdown reason-element__large-anim reasons-sec__dropdown_right"  @click="openPopupInfo('large-anim',$event)">

          <div class="reasons-sec__dropdown-container">
            <div class="reason-element-active__content-wrapper">

              <div class="reason-element-active__content-wrapper-text">
                <p class="r-small__title">{{ $t('features_export') }}<br>{{ $t('features_reports') }}</p>
                <div class="reason-element__text">Flamingo will automatically record and count how many days you spend in each state to determine your physical presence for domicile and state residency.</div>
              </div>

              
              <!-- <p class="r-small__teg">Coming soon</p> -->
              <div class="r-small__svg-wrapper">
                <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.975 11.2832C16.6878 11.2832 11.4922 17.1707 11.4922 25.5025V47.9847C11.4922 56.3165 16.6631 62.2041 24.975 62.2041H48.753C57.0675 62.2041 62.2412 56.3165 62.2412 47.9847V25.5025C62.2412 17.1707 57.0675 11.2832 48.7556 11.2832" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M45.324 23.3825L37.4127 31.0398L29.5039 23.3825" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M37.4121 30.0306V10.1862" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
  
  
            <div class="reason-element-active__border-wrapper">
              <div class="reason-element-active__border-1"></div>
              <div class="reason-element-active__border-2"></div>
              <div class="reason-element-active__box-shadow"></div>
              <div class="reason-element__border">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                </svg>
              </div>
  
              <div class="reason-element__link-btn-wrapper">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                </svg>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "features",

  data() {
      return {
          animCounter: 0,
          pastAnimCounter: null,
          popupStatus: false,
      }
  },
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  },
  methods: {
    openPopupInfo(typeAnim, event){
      let allAnimElement = document.querySelectorAll('.reasons-sec__dropdown')
      let elementOpen = event.target.closest('.reason-element')
      console.log(typeAnim)
      console.log(elementOpen)

      

      if(elementOpen.classList.contains('reason-element__dropdown-active')){

        for(let i = 0; i < allAnimElement.length; i++){
          allAnimElement[i].classList.remove('reason-element__dropdown-active')
          allAnimElement[i].classList.add('reason-element__dropdown-revers')
        }

        elementOpen.classList.remove('reason-element__dropdown-active')
        elementOpen.classList.add('reason-element__dropdown-revers')
      }
      else{
        for(let i = 0; i < allAnimElement.length; i++){
          allAnimElement[i].classList.remove('reason-element__dropdown-active')
          allAnimElement[i].classList.add('reason-element__dropdown-revers')
        }
        elementOpen.classList.add('reason-element__dropdown-active')
        elementOpen.classList.remove('reason-element__dropdown-revers')
      }
      

      // let title = this.t('features_'+tag+'_title')
      // let subtitle = this.t('features_'+tag+'_subtitle')
      // let text = this.t('features_'+tag+'_text')
      // let popupData = {
      //   'popup_title': title,
      //   'popup_subtitle': subtitle,
      //   'popup_text': text,
      // }
      // this.$emit('openPopup', popupData)
    }
  }

}
</script>

<style scoped>

</style>
