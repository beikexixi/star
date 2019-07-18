<template>
  <div>
    <el-button @click="handleAddDiv">新增一个div</el-button>
    <div id="wrapper">
      <anchored-heading :level="2">Hello World</anchored-heading>
      <my-el-table></my-el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RenderFunc',
  data () {
    return {}
  },
  mounted () {
  },
  components: {
    'anchored-heading': {
      render: function (createElement) {
        return createElement(
          'h' + this.level,
          this.$slots.default
        )
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    },
    'my-el-table': {
      template: '<table v-if="true" border><tr><th>我是第一列</th></tr></table>'
    }
  },
  methods: {
    handleAddDiv () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
