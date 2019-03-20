<template>
  <div class="hello">
    <p>我是dev分支</p>
    <span class="iconfont icon-all" style="color: red; font-size: 20px;"></span>
    <!-- symbol引入 -->
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-all"></use>
    </svg> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // this.asyncCall()
    // this.sequentialStart()
    // let that = this
    // setTimeout(that.concurrentStart, 4000)
    // setTimeout(that.stillSerial, 7000)
    // setTimeout(that.parallel, 10000)
  },
  methods: {
    // resolveAfter2Seconds () {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve('resolved')
    //     }, 2000)
    //   })
    // },
    // async asyncCall () {
    //   console.log('calling')
    //   let result = await this.resolveAfter2Seconds()
    //   console.log(result)
    // },

    resolveAfter2Seconds () {
      console.log('starting slow promise')
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
          console.log('slow promise is done')
        }, 2000)
      })
    },
    resolveAfter1Seconds () {
      console.log('starting fast promise')
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(10)
          console.log('fast promise is done')
        }, 1000)
      })
    },
    async sequentialStart () {
      console.log('==sequential start==')
      // 如果await操作符后的表达式不是一个Promise对象，则它会被转换成一个resolved状态的Promise对象
      const slow = await this.resolveAfter2Seconds()
      const fast = await this.resolveAfter1Seconds()
      console.log(slow)
      console.log(fast)
    },
    async concurrentStart () {
      console.log('==concurrent start with await==')
      const slow = this.resolveAfter2Seconds() // 立即启动计时器
      const fast = this.resolveAfter1Seconds()
      console.log(await slow)
      console.log(await fast) // 等待slow完成，fast也已经完成
    },
    stillSerial () {
      console.log('==concurrent start with Promise.all==')
      Promise.all([this.resolveAfter2Seconds(), this.resolveAfter1Seconds()]).then(([slow, fast]) => {
        console.log(slow)
        console.log(fast)
      })
    },
    parallel () {
      console.log('==parallel with Promise.then==')
      this.resolveAfter2Seconds().then((msg) => {
        console.log(msg)
      })
      this.resolveAfter1Seconds().then((msg) => {
        console.log(msg)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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
