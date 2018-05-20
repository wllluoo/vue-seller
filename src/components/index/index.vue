<template>
  <div class="top-warpper">
      <div class="main">
          <div class="main-slogan">未来，由我掌握</div>
          <div class="main-test">
              <Button class="main-test-Button">少侠，做个性格测验吧~</Button>
          </div>
      </div>
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
