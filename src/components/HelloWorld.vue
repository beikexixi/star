<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
    }
  },
  mounted () {
    let arr = [2, 6, 13, 4, 88, 5, 100, 1]
    //-- 冒泡排序
    // let result = this.bubbleSort([2, 6, 13, 4, 88, 5, 100, 1])
    // console.log(result)
    //-- 选择排序
    // let result = this.selectionSort([2, 6, 13, 4, 88, 5, 100, 1])
    // console.log(result)
    //-- 插入排序
    // let result = this.insertionSort([2, 6, 13, 4, 88, 5, 100, 1])
    // console.log(result)
    //-- 快速排序
    // let result = this.quickSort([2, 6, 13, 4, 88, 5, 100, 1])
    // console.log(result)
    let result = this.quickSortNew(arr, 0, arr.length - 1)
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
    },
    quickSort (arr) { // 用递归实现快排
      if (arr.length <= 1) {
        return arr
      } else {
        // debugger
        let len = arr.length
        let left = []
        let right = []
        let pivot = arr.splice(Math.floor(len / 2), 1)[0]
        for (let i = 0; i < len - 1; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i])
          } else {
            right.push(arr[i])
          }
        }
        return this.quickSort(left).concat(pivot, this.quickSort(right))
      }
    },
    quickSortNew (num, left, right) { // 用动态规划实现快排
    debugger
      var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
      while (list.length > 0) { // 若list不为空，循环弹出list最后一个数组进行快排
        var now = list.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
        if (now[0] >= now[1]) { // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
          continue;
        }
        var i = now[0], j = now[1], flag = now[0]; // 以下与递归方法相同，请参考上面的递归详解
        while (i < j) {
          while (num[j] >= num[flag] && j > flag) j--;
          if (i >= j) {
            break;
          }
          while (num[i] <= num[flag] && i < j) i++;
          let temp = num[flag];
          num[flag] = num[j];
          num[j] = num[i];
          num[i] = temp;
          flag = i;
        }
        list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
        list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
      }
      return num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
