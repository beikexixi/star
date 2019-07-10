<template>
  <div>
    <el-button @click="handleAddDiv">新增一个div</el-button>
    <div id="wrapper">
      <anchored-heading>aiya</anchored-heading>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
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
            'h1',
            this.$slots.default
          )
        }
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
