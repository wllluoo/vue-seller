<template>
  <div class="top-warpper">
      <div class="header">
      </div>
      <div class="search"></div>
      <div class="roll"></div>
      <div class="classify">
          <allMajors />
      </div>
    </div>
</template>

<script>
import allMajors from './componets/allMajors/allMajors';

  export default {
    data () {
      return {}
    },
    components: {
      allMajors, 
    }
  }
</script>

<style lang="less" scoped>
@import './index.less';
 
</style>
