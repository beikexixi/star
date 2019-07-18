<template>
  <div class="hello">
    <el-form>
      <el-select :placeholder="item.name" v-for="(item, index) in t" value-key="id" :key="item.id" v-model="form.select[index]" multiple>
        <el-option v-for="subItem in item.taskTypeDtos" :key="subItem.id" :label="subItem.name" :value="subItem"></el-option>
      </el-select>
      <!-- <el-select :placeholder="item.name" v-for="(item, index) in t" :key="item.id" v-model="form.select[index]" multiple>
        <el-option v-for="subItem in item.taskTypeDtos" :key="subItem.id" :label="subItem.name" :value="subItem.id"></el-option>
      </el-select> -->
      <el-button @click="handleSubmit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        select: []
      },
      t: [
        {
          "id": 1,
          "name": "选项0",
          "taskTypeDtos": [
            {
              "id": 10,
              "name": "香蕉",
            },
            {
              "id": 11,
              "name": "葡萄",
            }
          ]
        },
        {
          "id": 2,
          "name": "选项1",
          "taskTypeDtos": [
            {
              "id": 20,
              "name": "白菜",
            }
          ]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
