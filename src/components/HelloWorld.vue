<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {}
  },
  mounted () {
    //-- 冒泡排序
    // let result = this.bubbleSort([2, 6, 13, 4, 88, 5, 100, 1])
    // console.log(result)
    //-- 选择排序
    // let result = this.selectionSort([2, 6, 13, 4, 88, 5, 100, 1])
    // console.log(result)
    //-- 插入排序
    let result = this.insertionSort([2, 6, 13, 4, 88, 5, 100, 1])
    console.log(result)
  },
  methods: {
    insertionSort (arr) { // 插入排序
      let len = arr.length
      let insertIndex = 1
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < insertIndex; j++) {
          if (arr[j] > arr[insertIndex]) {
            let insertNum = arr[insertIndex]
            arr.splice(insertIndex, 1)
            arr.splice(j, 0, insertNum)
            break
          }
        }
        if (insertIndex <= len) {
          insertIndex++
        }
        console.log(arr)
      }
    },
    selectionSort (arr) { // 选择排序
      let len = arr.length
      let newArr = []
      for (let i = 0; i < len; i++) {
        let minIndex = 0
        for (let j = 1; j < len - i; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j
          }
        }
        newArr.push(arr[minIndex])
        arr.splice(minIndex, 1)
        console.log(arr, newArr)
      }
      return arr
    },
    bubbleSort (arr) { // 冒泡排序
      let len = arr.length
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
          }
        }
        console.log(arr)
      }
      return arr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
