<template>
    <div class="form__inp-wrapper-select form-custom-select">

        <div class="form-custom-select__wrapper">
          <div class="form-custom-select__current-value" @click="openStatusSelect = !openStatusSelect" >
            <input type="text" readonly placeholder="Recent" :value="currentValueInputText" >
            <div class="form-custom-select__ar-wrapper" :class="{'form-custom-select__ar-wrapper_activ': openStatusSelect}">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#697586" stroke-width="1.66667" stroke-linecap="square"/>
              </svg>                    
            </div>
          </div>
          
          <SlideUpDown :active="openStatusSelect" :duration="500">
            <div class="form-custom-select__value-list" >
                <ul class="form-custom-select__ul-value-list">
                  <li class="form-custom-select__vvalue-list-element" :key="-1" 
                    @click="selectValueDefault(-1), openStatusSelect = false"
                    :class="{'form-custom-select__vvalue-list-element_active': activeIndex == -1}">
                    Recent
                  </li>
                  <li class="form-custom-select__vvalue-list-element" v-for="(item, index) in optionList" :key="index" 
                    @click="selectValue(item, item.id), openStatusSelect = false"
                    :class="{'form-custom-select__vvalue-list-element_active': activeIndex == item.id}">
                    {{ item.title }}
                  </li>
                </ul>
            </div>
          </SlideUpDown>
          
         
        </div>
        
    </div>
</template>


<script>
import SlideUpDown from 'vue-slide-up-down'



export default {
    data() {
        return {
            activeIndex: null,
            currentValue: '',
            currentValueInputText: '',
            openStatusSelect: false,
            open: false,
            selectedTag: null,
        }
    },

    props:{
        optionList: Object
    },

    components: {
        SlideUpDown
    },

    methods: {
        selectValue(item, index){
            this.currentValueInputText = item.title
            this.currentValue = item
            this.activeIndex = index
            let currntId = item.id

            this.goTo(currntId)
        },

        selectValueDefault(dataId){
            this.currentValueInputText = 'Recent'
            let currntId = dataId

            this.goTo(currntId)
        },


        goTo(currentId) {
        const router = useRouter();
        if (+currentId > -1) {
            router.push({ path: `/blog/tag/${+currentId}` });
        } else {
            router.push({ path: `/blog` });
        }
        return {}
        },


        getRoutData(){
            const route = useRoute();
            this.selectedTag = route.name.includes('blog-tag-tag') ? route.params.tag : -1;

            this.currentValueInputText = this.selectedTag 

            if(this.selectedTag == -1){
                this.activeIndex = -1
                this.currentValueInputText = 'Recent'
            }
            else{
                let currentValue = ''
                for(let i = 0; i < this.optionList.length; i++){
                    if(this.optionList[i].id == this.selectedTag ){
                        currentValue = this.optionList[i]
                    }
                }
                this.activeIndex = currentValue.id
                this.currentValueInputText = currentValue.title
            }
        }

    },



    computed: {

    },

    watch: {

    },

    mounted(){
        this.getRoutData()
    },

}
</script>
