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
    import fetch from '@/fetch'
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
        created() {

        },
        mounted() {
          fetch({
            url: '/getAllMajors',
            method: 'GET',
            success: (data) => {
                console.log('data', data);
            }
          })
          console.log('111', this.seller)
        }
    }
</script>

<style lang="less">

</style>