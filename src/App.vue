<template>
  <div id="app">
    <!-- <v-header :seller="seller" /> -->

    <div class="tab border-1px">
        <div class="tab-item"><router-link to="/index">首页</router-link></div>
        <div class="tab-item"><router-link to="/classify">分类</router-link></div>
        <div class="tab-item"><router-link to="/seller">购物车</router-link></div>
        <div class="tab-item"><router-link to="/personal">我的</router-link></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header';

const ERR_OK = 0;

export default {
    name: 'App',
    components: {
      'vHeader': header
    },
    data() {
      return {
        seller: {},
      }
    },
    created() {
      this.$http.get('/api/seller').then(response => {
        // get body data
        response = response.body;
        if (response.errno === ERR_OK) {
          console.log(response.data)
            this.seller = response.data;
        }
        
      }, response => {
        // error callback
      });
    }
}
</script>

<style lang="less" scoped>
@import './App.less';
</style>
