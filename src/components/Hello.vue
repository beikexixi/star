<template>
  <div class="hello">
    <p>我是hello</p>
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
      radio3: '0',
      // nameArr: [{name: 'jiangxi'}]
      nameArr: []
    }
  },
  methods: {
    handleChange (score) {
      debugger
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(this, 'beforeRouteEnter'); // undefined
    console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
    console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
    console.log(next, '组件独享守卫beforeRouteEnter第三个参数');
    next(vm => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm);//当前组件的实例
    });
  },
  beforeRouteUpdate(to, from, next) {
    //在当前路由改变，但是该组件被复用时调用
    //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
    // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(this, 'beforeRouteUpdate'); //当前组件实例
    console.log(to, '组件独享守卫beforeRouteUpdate第一个参数');
    console.log(from, '组件独享守beforeRouteUpdate卫第二个参数');
    console.log(next, '组件独享守beforeRouteUpdate卫第三个参数');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this, 'beforeRouteLeave'); //当前组件实例
    console.log(to, '组件独享守卫beforeRouteLeave第一个参数');
    console.log(from, '组件独享守卫beforeRouteLeave第二个参数');
    console.log(next, '组件独享守卫beforeRouteLeave第三个参数');
    next();
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
