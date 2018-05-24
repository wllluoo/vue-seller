<template>
  <div class="subject">
    <div class="subject-top">
      <span class="subject-top-title">{{data.subjectName}}</span>
      <span class="subject-top-heat">{{data.heatLevel}}</span>
    </div>
    <div class="subject-content">
      {{data.detail}}
    </div>
    <div class="subject-bottom">
      <div class="subject-bottom-future">前景</div>
      <div class="subject-bottom-comment">评论</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>
@import './index.less';
 
</style>
