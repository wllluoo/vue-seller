<template>
  <div>
    <div class="header">
      <div class="content-wrapper">
        电商商城
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            seller: {
              type: Object,
            }
        },
        computed: {
          blabla: function() {
            // return seller
            return this.seller.minPrice.toFixed(2)
          }
        },
        mounted() {
          console.log('111', this.seller)
        }
    }
</script>

<style lang="less">

</style>