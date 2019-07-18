<template>
  <div class="hello">
    <el-form>
      <!-- <el-select :placeholder="item.name" v-for="(item, index) in t" value-key="id" :key="item.id" v-model="form.select[index]" multiple>
        <el-option v-for="subItem in item.taskTypeDtos" :key="subItem.id" :label="subItem.name" :value="subItem"></el-option>
      </el-select> -->
      <el-select :placeholder="item.name" v-for="(item, index) in t" :key="item.id" v-model="form.select[index]" multiple>
        <el-option v-for="subItem in item.taskTypeDtos" :key="subItem.id" :label="subItem.name" :value="subItem.id"></el-option>
      </el-select>
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
          "name": "类型_0",
          "taskTypeDtos": [
            { "id": 1,
              "name": "类型_0"
            },
            {
              "id": 10,
              "code": null,
              "name": "技能_10",
              "skillName": null,
              "pid": null,
              "pcode": null
            },
            {
              "id": 11,
              "code": null,
              "name": "技能_11",
              "skillName": null,
              "pid": null,
              "pcode": null
            }
          ]
        },
        {
          "id": 2,
          "name": "类型_1",
          "taskTypeDtos": [
            {
              "id": 2,
              "name": "类型_1",
            },
            {
              "id": 20,
              "code": null,
              "name": "技能_20",
              "skillName": null,
              "pid": null,
              "pcode": null
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
