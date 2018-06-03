<template>
  <div id="app">
    <!-- <v-header :seller="seller" /> -->
    <!-- <v-search :placeholderWord="placeholderWord" /> -->
    <div class="tab">
        <div class="tab-item" v-for="item in lists">
            <router-link :to="item.url">
                <div class="tab-item-block">
                    <span>{{item.name}}</span>
                </div>
            </router-link>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header';
import search from './components/search/search';

const ERR_OK = 0;

export default {
    name: 'App',
    components: {
      'vHeader': header,
      'vSearch': search
    },
    data() {
      return {
        seller: {},
        placeholderWord: '搜索商品',
        lists: [{
          name: '首页',
          url: '/index',
          id: 0,
        }, {
          name: '帖子',
          url: '/essay',
          id: 1,
        }, {
          name: '跳蚤市场',
          url: '/market',
          id: 2,
        }, {
          name: '我的',
          url: '/personal',
          id: 3,
        }]
      }
    },
    created() {
      // this.$http.get('/api/seller').then(response => {
      //   // get body data
      //   response = response.body;
      //   if (response.errno === ERR_OK) {
      //     console.log(response.data)
      //       this.seller = response.data;
      //   }
        
      // }, response => {
      //   // error callback
      // });
    }
}
</script>

<style lang="less" scoped>
@import './App.less';
</style>
