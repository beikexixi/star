<template>
  <div class="hello">
    <p>我是master分支</p>
    <h1>冲突了吧</h1>
    <h1>哎哟喂</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-radio-group v-model="radio3">
      <el-radio-button label="0"><i class="el-icon-star-on" style="font-size: 18px;">差</i></el-radio-button>
      <el-radio-button label="1"><i class="el-icon-star-on" style="font-size: 18px;">中</i></el-radio-button>
      <el-radio-button label="2"><i class="el-icon-star-on" style="font-size: 18px;">好</i></el-radio-button>
    </el-radio-group>
    <p>天下之大，无奇不有</p>
    <h1>世间万物，必有始终</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value3: null,
      texts: ['差', '较差', '一般', '满意', '非常满意'],
      radio3: '0'
    }
  },
  methods: {
    handleChange (score) {
      debugger
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-radio-button__inner {
  border: none!important;
  padding: 10px;
}
.el-radio-button__inner:hover {
    color: #F7BA2A;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #F7BA2A;
    background-color: #fff;
    border-color: #fff;
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
}
</style>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
