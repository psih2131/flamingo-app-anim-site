<template>
    <main class="main home-main">
        <section class="who-needs-sec">
            <div class="container">
                <div class="who-needs-sec__subtitle-row">
                    <p class="who-needs-sec__subtitle">For Whom</p>
                </div>
                <h2 class="who-needs-sec__title">Who needs Flamingo?</h2>

                <div class="who-needs-sec__wrapper">

                    <div class="who-needs-sec__element needs-anim-element n-amin-1" @click="activHoverAnim('x1', $event)" >
                        
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">Expats</h3>
                                <p class="needs-anim-element__subtitle">Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.</p>
                            </div>
                            
                            <img src="@/assets/images/who-needs-image/x1.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-2" @click="activHoverAnim('x2', $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">Tax<br>Residents</h3>
                                <p class="needs-anim-element__subtitle">Flamingo helps you establish your country of residence by automatically counting your days and nights in and out of the country.</p>
                            </div>
                            
                            <img src="@/assets/images/who-needs-image/x2.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-3" @click="activHoverAnim('x3', $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">Frequent Travelers</h3>
                                <p class="needs-anim-element__subtitle">Flamingo flies with you and automatically records when you cross the border to enter another country. You can view your trip history and see the number of days you’ve spent in a country. The app automatically calculates how many more days you have left based on your visa or passport details.</p>
                            </div>
                            
                            <img src="@/assets/images/who-needs-image/x3.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                    <div class="who-needs-sec__element needs-anim-element n-amin-4" @click="activHoverAnim('x4', $event)" >
                        <div class="needs-anim-element__wrapper">
                            <div class="needs-anim-element__header">
                                <h3 class="needs-anim-elemen__title">International<br>Students</h3>
                                <p class="needs-anim-element__subtitle">Use Flamingo to maintain your student status and comply with your visa regulations.</p>    
                            </div>
                            
                            <img src="@/assets/images/who-needs-image/x4.png" alt="" class="needs-anim-elemen__image">
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="reasons-sec">
            <div class="container">
                <div class="who-needs-sec__subtitle-row">
                    <p class="who-needs-sec__subtitle">Features</p>
                </div>
                <h2 class="who-needs-sec__title">10 reasons to Use Flamingo</h2>
                <p class="reasons-sec__subtitle">An essential tool for global expats, permanent residents, overseas homeowners and frequent travelers.</p>

                <div class="reasons-sec__wrapper">

                    <div class="reasons-sec__big-wrapper">
                        <div class="reasons-sec__big-element reason-element r-big">
                            <div class="r-big__text">
                                <p class="r-big__title">Auto<br>Trip Recordingt</p>
                                <p class="r-big__subtitle">Flamingo automatically determines if you have left your residence country or state and accurately records your trip details.</p>
                            </div>
                            
                            <div class="r-big__img-wrapper">
                                <img src="@/assets/images/reasons-pages/r1.jpg" alt="" class="r-big__img">
                            </div>
                        </div>

                        <div class="reasons-sec__small-element reason-element r-small  reason-element-active" @click="openPopupInfo">
                            <p class="r-small__title">Plan future trips</p>
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
    
                            <div class="reason-element__link-btn-container">
                                
                            </div>
                            <div class="reason-element__link-btn-wrapper">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                                </svg>                                
                            </div>
                            
    
                            <div class="reason-element__border">
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                                </svg>
                            </div>
    
                        </div>

                        <div class="reasons-sec__small-element reason-element r-small  reason-element-active" @click="openPopupInfo">
                            <p class="r-small__title">Store documents and trip details</p>
     
                            <div class="r-small__svg-wrapper">
                                <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M52.1399 29.5575L56.8631 32.1126L58.0165 32.7606C60.4735 34.141 60.4735 37.6998 58.0165 39.0802L42.3695 47.8711C38.7407 49.9098 34.3216 49.9098 30.6928 47.8711L15.0458 39.0802C12.5889 37.6998 12.5889 34.141 15.0458 32.7606L16.1991 32.1126L20.796 29.48" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                    <path d="M52.3395 42.2657L57.5569 44.9188C60.1394 46.2188 60.222 49.8986 57.7009 51.3153L42.3666 59.9305C38.7378 61.9693 34.3187 61.9693 30.6899 59.9305L15.5791 51.4408C13.0146 50 13.1559 46.2387 15.8212 44.9971L21.077 42.4679" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                    <path d="M30.6928 11.1526L15.0458 19.9436C12.5889 21.3239 12.5889 24.8828 15.0458 26.2632L30.6928 35.054C34.3216 37.0928 38.7407 37.0928 42.3695 35.054L58.0165 26.2632C60.4735 24.8828 60.4735 21.3239 58.0165 19.9436L42.3695 11.1526C38.7407 9.11384 34.3216 9.11384 30.6928 11.1526Z" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                </svg>    
                            </div>
    
                            <div class="reason-element__link-btn-container">
                                
                            </div>
                            <div class="reason-element__link-btn-wrapper">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                                </svg>                                
                            </div>
                            
    
                            <div class="reason-element__border">
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                                </svg>
                            </div>
    
                        </div>
                    </div>

                    <div class="reasons-sec__big-element reason-element r-big r-big_40">
                        <div class="r-big__text">
                            <p class="r-big__title">Residency <br>& Domicile Status</p>
                            <p class="r-big__subtitle">Flamingo helps you establish your country of residence and domicile by automatically counting your days and nights in and out of the country.</p>
                        </div>
                        
                        <div class="r-big__img-wrapper">
                            <img src="@/assets/images/reasons-pages/r2.jpg" alt="" class="r-big__img">
                        </div>
                    </div>

                    <div class="reasons-sec__tax-element reason-element r-tax r_soon reason-element-active" @click="openPopupInfo">
                        <p class="r-small__title">Tax<br>Residency<br>Assessment</p>
                        <p class="r-small__teg">Coming soon</p>
                        <img src="@/assets/images/reasons-pages/r3.png" alt="" class="r-tax__img">


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

                        <div class="reason-element__link-btn-container">
                            
                        </div>
                        <div class="reason-element__link-btn-wrapper">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                        </div>
                        

                        <div class="reason-element__border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                            </svg>
                        </div>
                    </div>

                    <div class="reasons-sec__big-element reason-element r-big">
                        <div class="r-big__text">
                            <p class="r-big__title">USA States<br>Day Count</p>
                            <p class="r-big__subtitle">Flamingo shows how many combined days you’ve already spent in Schengen countries and how many more you have left in the 180-day period.</p>
                        </div>
                        
                        <div class="r-big__img-wrapper">
                            <img src="@/assets/images/reasons-pages/r4.jpg" alt="" class="r-big__img">
                        </div>
                    </div>

                    <div class="reasons-sec__big-element reason-element r-big">
                        <div class="r-big__text">
                            <p class="r-big__title">Schengen Area<br>Calculator</p>
                            <p class="r-big__subtitle">Flamingo shows how many combined days you’ve already spent in Schengen countries and how many more you have left in the 180-day period.</p>
                        </div>
                        
                        <div class="r-big__img-wrapper">
                            <img src="@/assets/images/reasons-pages/r5.jpg" alt="" class="r-big__img">
                        </div>
                    </div>

                    <div class="reasons-sec__small-element reason-element r-small r_soon reason-element-active" @click="openPopupInfo">
                        <p class="r-small__title">Short-Term Visa Tracking</p>
                        <p class="r-small__teg">Coming soon</p>
                        <div class="r-small__svg-wrapper">
                            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.5544 25.7897L36.5625 34.7815" stroke="#6172F3" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M12.9609 38.1534L22.1222 47.3147C22.6502 47.8426 23.5021 47.8426 24.0302 47.3147L29.8187 41.5259" stroke="#6172F3" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M25.3203 37.0281L35.6048 47.3128C36.133 47.8407 36.9872 47.8407 37.5128 47.3128L59.0385 25.7896" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                            </svg>
                                
                        </div>

                        <div class="reason-element__link-btn-container">
                            
                        </div>
                        <div class="reason-element__link-btn-wrapper">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                        </div>
                        

                        <div class="reason-element__border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                            </svg>
                        </div>

                    </div>

                    <div class="reasons-sec__small-element reason-element r-small reason-element-active" @click="openPopupInfo">
                        <p class="r-small__title">New York City Day Count </p>
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

                        <div class="reason-element__link-btn-container">
                            
                        </div>
                        <div class="reason-element__link-btn-wrapper">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                        </div>
                        

                        <div class="reason-element__border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                            </svg>
                        </div>

                    </div>

                    <div class="reasons-sec__small-element reason-element r-small reason-element-active" @click="openPopupInfo">
                        <p class="r-small__title">Built-In Passport Index</p>
                        <!-- <p class="r-small__teg">Coming soon</p> -->
                        <div class="r-small__svg-wrapper">
                            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.3591 42.9351H14.4079C12.0167 42.9351 10.0801 44.8745 10.0801 47.2628V58.0502C10.0801 60.4325 12.0285 62.3808 14.4079 62.3808H57.5891C59.9718 62.3808 61.9201 60.4325 61.9201 58.0502V53.0225C61.9201 50.6342 59.9804 48.6948 57.5891 48.6948H44.6409" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5209 10.625H30.477C28.7528 10.625 27.3594 12.0214 27.3594 13.7425V19.2955C27.3594 21.0166 28.7528 22.413 30.477 22.413H41.5209C43.242 22.413 44.6385 21.0166 44.6385 19.2955V13.7425C44.6385 12.0214 43.242 10.625 41.5209 10.625Z" stroke="#F1F3F6" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M44.6385 62.3764V37.903C44.6385 35.5117 42.6988 33.5752 40.3104 33.5752H31.6872C29.3077 33.5752 27.3594 35.5235 27.3594 37.903V62.3764" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                            </svg>    
                        </div>

                        <div class="reason-element__link-btn-container">
                            
                        </div>
                        <div class="reason-element__link-btn-wrapper">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                        </div>
                        

                        <div class="reason-element__border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                            </svg>
                        </div>

                    </div>

                    <div class="reasons-sec__small-element reason-element r-small reason-element-active" @click="openPopupInfo">
                        <p class="r-small__title">Export<br>Reports</p>
                        <!-- <p class="r-small__teg">Coming soon</p> -->
                        <div class="r-small__svg-wrapper">
                            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.975 11.2832C16.6878 11.2832 11.4922 17.1707 11.4922 25.5025V47.9847C11.4922 56.3165 16.6631 62.2041 24.975 62.2041H48.753C57.0675 62.2041 62.2412 56.3165 62.2412 47.9847V25.5025C62.2412 17.1707 57.0675 11.2832 48.7556 11.2832" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M45.324 23.3825L37.4127 31.0398L29.5039 23.3825" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M37.4121 30.0306V10.1862" stroke="#233457" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                            </svg>                                    
                        </div>

                        <div class="reason-element__link-btn-container">
                            
                        </div>
                        <div class="reason-element__link-btn-wrapper">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83203 14.9168L14.1654 6.5835M14.1654 6.5835H5.83203M14.1654 6.5835V14.9168" stroke="black" stroke-width="2" stroke-linecap="square"/>
                            </svg>                                
                        </div>
                        

                        <div class="reason-element__border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75H72V12.75C72 19.3774 66.6274 24.75 60 24.75H48C34.7452 24.75 24 35.4952 24 48.75V60.7499C24 67.3774 18.6274 72.7499 12 72.7499H0V24.75V20.7499V0.75Z" fill="#F8FAFC"/>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section class="security-sec">
            <div class="container">
                <div class="who-needs-sec__subtitle-row">
                    <p class="who-needs-sec__subtitle">Security</p>
                </div>
                <h2 class="who-needs-sec__title">Your Safety is Our Priority</h2>

                <div class="security-sec__wrapper">
                    <div class="security-sec__element security-sec__el1">
                        <h3 class="security-sec__element-title">Important<br>Notifications</h3>
                        <p class="security-sec__element-subtitle">Flamingo notifies you when you are reaching your stay limits or your visa is about to expire, so that you don’t get in trouble with authorities. </p>
                        
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
                        <h3 class="security-sec__element-title">Complete<br>Privacy</h3>
                        <p class="security-sec__element-subtitle">Your travel, residency and visa data is stored locally only on your device. We do not collect, nor store, your information on our servers.
                            <br><br>With Flamingo PRO you can sync your data via iCloud across all your devices.</p>
                        
                        <div class="security-sec__icon-wrapper security-sec__icon-wrapper-1">
                            <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.4509 96.58H44.7705C39.0162 96.58 34.3535 101.245 34.3535 107L34.3563 138C34.3563 143.751 39.0191 148.417 44.7733 148.417H60.6566C66.4108 148.417 71.0764 143.751 71.0764 137.997L71.0735 125.141" stroke="#B5F3D1" stroke-width="3.45" stroke-linecap="square" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M67.2097 118.16H58.2731C55.8251 118.16 53.8379 116.175 53.8379 113.724V108.71C53.8379 106.259 55.8251 104.275 58.2731 104.275H67.2097C69.6577 104.275 71.6449 106.259 71.6449 108.71V113.724C71.6449 116.175 69.6577 118.16 67.2097 118.16Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M68.0751 104.362V101.848C68.0405 98.9046 65.6213 96.543 62.678 96.5804C59.7922 96.6178 57.4565 98.9392 57.4102 101.825V104.362" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M52.9528 137.929V137.684M51.959 137.876C51.959 137.323 52.4081 136.878 52.9609 136.878C53.5137 136.878 53.959 137.323 53.959 137.876C53.959 138.432 53.5137 138.878 52.9609 138.878C52.4081 138.878 51.959 138.432 51.959 137.876Z" stroke="#233457" stroke-width="3.45" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M51.7802 241.28C51.1066 241.954 51.1066 243.046 51.7802 243.72L62.7581 254.698C63.4317 255.371 64.5239 255.371 65.1976 254.698C65.8712 254.024 65.8712 252.932 65.1976 252.258L55.4395 242.5L65.1976 232.742C65.8712 232.068 65.8712 230.976 65.1976 230.302C64.5239 229.629 63.4317 229.629 62.7581 230.302L51.7802 241.28ZM-65.7802 121.28C-66.4539 120.607 -67.5461 120.607 -68.2198 121.28L-79.1976 132.258C-79.8712 132.932 -79.8712 134.024 -79.1976 134.698C-78.5239 135.371 -77.4317 135.371 -76.7581 134.698L-67 124.94L-57.2419 134.698C-56.5683 135.371 -55.4761 135.371 -54.8024 134.698C-54.1288 134.024 -54.1288 132.932 -54.8024 132.258L-65.7802 121.28ZM136.814 36.6206V38.3456H138.539V36.6206H136.814ZM171.275 122.5C171.275 187.821 118.321 240.775 53 240.775V244.225C120.227 244.225 174.725 189.727 174.725 122.5H171.275ZM53 4.225C85.1436 4.225 114.289 17.0451 135.609 37.855L138.019 35.3862C116.081 13.9727 86.0799 0.775 53 0.775V4.225ZM11.6956 233.363C-33.2604 216.607 -65.275 173.29 -65.275 122.5H-68.725C-68.725 174.777 -35.7712 219.353 10.4907 236.596L11.6956 233.363ZM-61.3954 92.34C-48.0614 41.6263 -1.8963 4.225 53 4.225V0.775C-3.50245 0.775 -51.0093 39.2708 -64.732 91.4627L-61.3954 92.34ZM138.539 36.6206V21.5H135.089V36.6206H138.539ZM136.814 34.8956H123V38.3456H136.814V34.8956Z" fill="#B5F3D1"/>
                                </svg>
                                
                        </div>

                        
                    </div>


                    <div class="security-sec__element security-sec__el3">
                        <h3 class="security-sec__element-title">Bank-Level<br>Data Security</h3>
                        <p class="security-sec__element-subtitle">Flamingo employs multiple layers of data backups, guaranteeing peace of mind for your valuable travel information.</p>
                        
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

        <section class="blog-home-sec">
            <div class="container">
                <div class="related-posts__header">
                    <div class="related-posts__header-text">
                        <h2 class="related-posts__title">Blog</h2>
                        <p class="related-posts__subtitle">The latest news, travel directions, tips and tricks from our team.</p>
                    </div>

                    <div class="related-posts__btn-wrapper">
                        <nuxt-link no-prefetch to="/blog" class="btnV1">
                            View all posts
                        </nuxt-link>
                        
                    </div>
                </div>
            </div>

            <div class="related-posts__slider posts-slider">

                <swiper
                    :slidesPerView="'auto'"
                    :spaceBetween="4"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="posts-slider__swiper"
                >   
                    <swiper-slide v-for="item in posts" :key="item" >
                        <component__news_box :postId="item"/>
                    </swiper-slide>

                    <swiper-slide v-for="item in posts" :key="item" >
                        <component__news_box :postId="item"/>
                    </swiper-slide>

                </swiper>

            </div>
        </section>

        <section class="help-list-sec">
            <div class="container">
                <div class="help-list-sec__title-wrapper">
                    <h2 class="help-list-sec__title">Flamingo Helps You with</h2>
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


        <section class="download-sec">
            <div class="container">
                <div class="download-sec__info">
                    <h2 class="download-sec__title">Download<br>Flamingo Now</h2>
                    <p class="download-sec__subtitle">An essential tool for global expats, permanent residents, overseas homeowners and frequent travelers.</p>
                    <div class="download-sec__row">

                        <a href="" class="header__download-ios">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_16227)">
                                <path d="M20.8418 17.6447C20.5091 18.4133 20.1153 19.1208 19.659 19.7713C19.0371 20.658 18.5278 21.2719 18.1354 21.6127C17.527 22.1722 16.8752 22.4587 16.1772 22.475C15.6761 22.475 15.0718 22.3324 14.3683 22.0432C13.6626 21.7553 13.014 21.6127 12.421 21.6127C11.7991 21.6127 11.132 21.7553 10.4185 22.0432C9.70396 22.3324 9.12831 22.4832 8.68819 22.4981C8.01884 22.5266 7.35166 22.2319 6.68571 21.6127C6.26066 21.242 5.72901 20.6064 5.09212 19.7061C4.40878 18.7446 3.84698 17.6297 3.40686 16.3587C2.93551 14.9857 2.69922 13.6563 2.69922 12.3692C2.69922 10.8948 3.0178 9.62321 3.65592 8.5576C4.15742 7.70166 4.82459 7.02647 5.65962 6.53081C6.49464 6.03514 7.39688 5.78256 8.36852 5.7664C8.90017 5.7664 9.59736 5.93085 10.4637 6.25405C11.3277 6.57834 11.8824 6.74279 12.1256 6.74279C12.3075 6.74279 12.9237 6.5505 13.9684 6.16714C14.9564 5.81162 15.7902 5.66441 16.4732 5.7224C18.3241 5.87178 19.7147 6.60142 20.6395 7.91595C18.9841 8.91896 18.1653 10.3238 18.1816 12.126C18.1965 13.5297 18.7057 14.6979 19.7066 15.6254C20.1601 16.0558 20.6667 16.3885 21.2302 16.6248C21.108 16.9793 20.979 17.3188 20.8418 17.6447ZM16.5968 0.940125C16.5968 2.04038 16.1948 3.06768 15.3936 4.01854C14.4267 5.14892 13.2572 5.80211 11.989 5.69904C11.9729 5.56705 11.9635 5.42812 11.9635 5.28214C11.9635 4.2259 12.4233 3.09552 13.2399 2.17127C13.6475 1.70331 14.166 1.31421 14.7948 1.00381C15.4221 0.69805 16.0156 0.528957 16.5737 0.5C16.59 0.647086 16.5968 0.794182 16.5968 0.940111V0.940125Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_16227">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            Download    
                        </a>

                        <svg width="178" height="67" viewBox="0 0 178 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 57.0616C3 57.0616 20.6382 -3.89489 54.2235 5.34457C87.8088 14.584 71.0277 68.9085 54.1679 64.7761C37.3127 60.6378 52.2405 4.37581 87.4011 7.79052C122.562 11.2052 113.471 63.1974 95.0086 62.1149C76.5411 61.0385 99.2495 15.5311 116.59 4.09473C138.79 -10.547 116.59 57.0616 175 37.3418M175 37.3418C166.381 31.9384 152.93 23.5054 152.93 23.5054M175 37.3418C167.295 45.0429 162.976 49.3606 155.271 57.0616" stroke="white" stroke-width="3.45" stroke-linecap="square"/>
                        </svg> 
                        
                        <div class="download-sec__qr">
                            <img src="@/assets/images/qr.png" alt="" class="download-sec__qr-img">
                        </div>
                    </div>
                </div>
                <div class="download-sec__phone-wrapper">
                    <img src="@/assets/images/phone.png" alt="" class="download-sec__phone">
                    <img src="@/assets/images/green-buble.png" alt="" class="download-sec__bable">
                </div>
            </div>
        </section>


        <component__reason_popup v-if="popupStatus"  @closePopup="closePopup" />


    </main>
</template>



<script>

import component__news_box from '@/components/component__news-box.vue'
import component__reason_popup from '@/components/component__reason-popup.vue'
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




// import required modules
import {Navigation, FreeMode, Pagination } from 'swiper/modules';

export default {
    data() {
        return {
            posts: [1,2,3,4,5,6],
            helpListArray: [
                'USA Substantial Presence Test and Physical Presence Test',
                'USA Substantial Presence Test and Physical Presence Test',
                'UK Statutory Residence Test',
                'UK Statutory Residence Test',
                'EU Schengen Area tracking, 90 in 180 days rule',
                'Cyprus residency day counting',
                'Canada residence / physical presence requirements',
                'Israel residency',
                'Puerto Rico Act 60 (act 20/22) day counting',
                'The international 183-day rule',
                'India residence status day counting',
                'Tracking of permitted visa stay time and expiration date to prevent overstays',
                'International health insurance for expats',
                'US & UK tax residency requirements',
            ],

            faq: [
                {'question': 'What is Flamingo Tracker 1?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 2?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 3?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 4?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 5?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
                {'question': 'What is Flamingo Tracker 6?' , 'ansver': 'Flamingo automatically keeps tabs on the number of nights/days spent in your country of residence and away. A useful tool for global expats, overseas homeowners, digital nomads and permanent residents.'},
            ],
            activeIndex: null,


            animCounter: 0,
            pastAnimCounter: null,

            popupStatus: false,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        component__news_box,
        component__reason_popup,
    },

    setup() {
      return {
        modules: [Navigation, FreeMode, Pagination],
        
      };
    },

    methods: {
        toggleActive(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },

        activHoverAnim(element, event){
            let element1 = document.querySelector('.n-amin-1')
            let element2 = document.querySelector('.n-amin-2')
            let element3 = document.querySelector('.n-amin-3')
            let element4 = document.querySelector('.n-amin-4')

            this.animCounter = this.animCounter + 1;

            if(this.pastAnimCounter == element){
                this.offHoverAnim()
                this.pastAnimCounter = null
            }
            else{

                this.offHoverAnim()
                if(element == 'x1'){
        
                    element1.classList.add('active-hover-anim')
                    element2.classList.add('activ-hover-anim-small')
                    element3.classList.add('activ-hover-anim-small')
                    element4.classList.add('activ-hover-anim-small')
                }

                if(element == 'x2'){

                    element2.classList.add('active-hover-anim')
                    element1.classList.add('activ-hover-anim-small')
                    element3.classList.add('activ-hover-anim-small')
                    element4.classList.add('activ-hover-anim-small')
                }

                if(element == 'x3'){

                    element3.classList.add('active-hover-anim')
                    element1.classList.add('activ-hover-anim-small')
                    element2.classList.add('activ-hover-anim-small')
                    element4.classList.add('activ-hover-anim-small')
                }

                if(element == 'x4'){

                    element4.classList.add('active-hover-anim')
                    element1.classList.add('activ-hover-anim-small')
                    element2.classList.add('activ-hover-anim-small')
                    element3.classList.add('activ-hover-anim-small')
                }

                this.pastAnimCounter = element
            }

            console.log(element)
            console.log(event)
            console.log(this.pastAnimCounter)

        },

        offHoverAnim(element, event){
            let element1 = document.querySelector('.n-amin-1')
            let element2 = document.querySelector('.n-amin-2')
            let element3 = document.querySelector('.n-amin-3')
            let element4 = document.querySelector('.n-amin-4')

            element1.classList.remove('active-hover-anim')
            element2.classList.remove('active-hover-anim')
            element3.classList.remove('active-hover-anim')
            element4.classList.remove('active-hover-anim')

            element1.classList.remove('activ-hover-anim-small')
            element2.classList.remove('activ-hover-anim-small')
            element3.classList.remove('activ-hover-anim-small')
            element4.classList.remove('activ-hover-anim-small')
        },



        openPopupInfo(){
            this.popupStatus = true
        },
        closePopup(data){
            this.popupStatus = data
        }
    },

    computed: {

    },

    watch: {

    },


    mounted(){

    },

}
</script>
