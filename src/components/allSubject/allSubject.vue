<template>
  <div class="subjectContent">
      <div class="subjectBlock" v-for="item in allSubject.items">
          <subjectBlock :data='item' />
      </div>
  </div>
</template>

<script>
  import fetch from '@/fetch'
  import subjectBlock from './subject/index.vue'
  export default {
    data () {
      return {
          allSubject: {}
      }
    },
    components: {
      subjectBlock,
    },
    mounted() {
        const url = window.location.href
        let id
        const param = url.split('?')
        if (param.length) {
            id = param[1].split('=')
            if (id.length) {
              id = id[1];
            }
        }
        if (id) {
            console.log('id', id)
            fetch({
                url: '/100695',
                method: 'GET',
                data: {
                    id,
                },
                success: (data) => {
                    console.log('data', data);
                    this.allSubject = data;
                }
            })
        }
        
      }
  }
</script>

<style lang="less" scoped>
@import './allSubject.less';
 
</style>
