<template>
    <div class="contact-us-sec__form-wrapper form">
        <div class="form__inp-wrapper">
            <p class="form__inp-title">First name</p>
            <input type="text" class="form__inp" placeholder="First name">
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">Email</p>
            <input type="text" class="form__inp" placeholder="you@company.com">
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">Your iPhone</p>
            <select class="form__select" name="" id="">
                <option value="">Select Model</option>
                <option value="">Select Model 2</option>
                <option value="">Select Model 3</option>
            </select>
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">iOS</p>
            <select class="form__select" name="" id="">
                <option value="">Select Version</option>
                <option value="">Select Version 2</option>
                <option value="">Select Version 3</option>
            </select>
        </div>

        <div class="form__inp-wrapper">
            <p class="form__inp-title">Message</p>
            <textarea class="form__textarea" placeholder="Leave us a message..."></textarea>
        </div>

        <div class="form__inp-wrapper-btn">
            <button class="form__btn-send">Submit</button>
        </div>

    </div>
</template>