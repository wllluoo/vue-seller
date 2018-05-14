<template>
  <div>
    <div class="search">
      <div class="content-wrapper">
        <input :placeholder="placeholderWord" v-model="searchWords" @keyup.enter="inputType"></input>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        data() {
            return {
              searchWords: '',
            }
        },
        methods: {
          inputType(e) {
            console.log('e', e, searchWords);
            const val = e.target
          }
        },
        props: {
            placeholderWord: {
              type: String,
            },
            
        },
        updated: () => {
          console.log('searchWords', this.searchWords);
        },
        computed: {
          blabla: function() {
            // return seller
            // return this.seller.minPrice.toFixed(2)
          }
        },
        mounted() {
          // console.log('22', this.placeholderWord)
        }
    }
</script>

<style lang="less">

</style>