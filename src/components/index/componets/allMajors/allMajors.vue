<template>
    <div class="content-wrapper">
        <div class="categoryBlock" v-for="item in allMajors">
            <div class="category">{{item.categoryName}}</div>
        </div>
    </div>
</template>


<script>
    import fetch from '@/fetch'
    import majorBlock from './components/majorBlock'
    export default {
        data() {
            return {
                allMajors: []
            }
        },
        props: {
            // allMajors: {
            //   type: Object,
            // }
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
            url: '/75610',
            method: 'GET',
            success: (data) => {
                console.log('data', data);
                this.allMajors = data.items || [];
            }
          })
        }
    }
</script>

<style lang="less">
@import './allMajors.less';
</style>