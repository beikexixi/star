<template>
  <transition name="fade">
    <div
      id="vk-activity-calendar"
      v-show="show"
    > 
    <i class="icon close" @click="$store.commit('hideActivityCalendar')"></i>
    <div class="calendar-wrapper">
      <header id="activity_calendar_header">
        <h1>近期活动</h1>
        <div class="functions">
          <div class="filter-condition">
            <el-date-picker
              v-model="filterParams.startTimeBegin"
              type="date"
              size="small"
              placeholder="活动开始-起"
              @change="doFilterStart">
            </el-date-picker>
            <el-date-picker
              v-model="filterParams.startTimeStop"
              type="date"
              size="small"
              placeholder="活动开始-止"
              @change="doFilterStop">
            </el-date-picker>
            <el-select v-model="filterParams.activityType" multiple clearable size="small" placeholder="活动类型">
              <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="filterParams.status" clearable size="small" placeholder="活动状态">
              <el-option
                v-for="item in statusList"
                :key="item.status"
                :label="item.name"
                :value="item.status">
              </el-option>
            </el-select>
            <el-button type="primary" size="small" @click="getActivities">搜索</el-button>
            <el-button type="primary" size="small" @click="emptyConditions">重置</el-button>
          </div>
          <div class="notice">*系统默认展示近两周的活动列表</div>
        </div>
      </header>
      <el-table
        :data="activityList"
        border
        v-loading="activityLoading"
        style="width: 100%">
        <el-table-column
          label="活动名称">
          <template scope="scope">
            <a :href="scope.row.activityUrl" @click="saClickLog(scope.row.name, 'CC_PC_activity_calendar_name_entry')" target="_blank">{{ scope.row.name }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="startTime" 
          label="活动开始时间">
        </el-table-column>
        <el-table-column
          prop="endTime"
          label="活动结束时间">
        </el-table-column>
        <el-table-column
          label="活动状态"
          width="110">
          <template scope="scope">
            <el-tag :type="{'1': 'danger', '0': 'primary', '-1': 'gray'}[scope.row.statusCode]">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="活动类型">
          <template scope="scope">
            <span v-for="(item, idx) in scope.row.activityType" :key="idx">{{ item }} {{idx === scope.row.activityType.length - 1 ? '' : '、'}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="活动规则"
          width="100">
          <template scope="scope">
            <el-popover
              placement="right"
              width="200"
              popper-class="vk-activity-calendar-popper-style"
              trigger="click"
              :visible-arrow="true">
              <a slot="reference" @click="saClickLog(scope.row.name, 'CC_PC_activity_calendar_rule_entry')">活动规则</a>
              <div class="title">{{scope.row.name}}</div>
              <div class="content" v-html="scope.row.ruleInfo"></div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="contactUser"
          label="活动联系人">
        </el-table-column>
        <el-table-column
          label="活动FAQ"
          width="100">
          <template scope="scope">
            <a :href="scope.row.activityFaq" target="_blank" @click="saClickLog(scope.row.name, 'CC_PC_activity_calendar_faq_entry')">FAQ</a>
          </template> 
        </el-table-column>
      </el-table>

      <el-pagination
        class="activity-pagenation"
        @current-change="handleCurrentChange"
        :current-page.sync="filterParams.pageNum"
        :page-size="filterParams.pageSize"
        layout="prev, pager, next, jumper, total"
        :total="activityTotal">
      </el-pagination>
    </div>
    </div>
  </transition>
</template>

<script>
import vkhttp from 'http-vkm'
import userUtil from 'user-util-vkm'

export default {
  components: {
  },

  props: {
    show: Boolean
  },

  data () {
    let typeList = [
      { value: 'LX', name: '拉新' },
      { value: 'ZH', name: '转化' },
      { value: 'KX', name: '课消' },
      { value: 'XF', name: '续费' },
      { value: 'MYD', name: '满意度' }
    ]

    let typeObj = {}
    typeList.forEach(res => {
      typeObj[res.value] = res.name
    })

    let statusList = [
      { status: 1, name: '活动进行中' },
      { status: 0, name: '活动未开始' },
      { status: -1, name: '活动已结束' }
    ]
    let defaultSearchData = {
      startTimeBegin: '',
      startTimeStop: '',
      activityType: [],
      status: '',
      pageSize: 10,
      pageNum: 1
    }
    return {
      activityList: [],
      activityTotal: 0,
      typeList: typeList,
      typeObj: typeObj,
      statusList: statusList,
      filterParams: this.initFilterParams(),
      activityLoading: false
    }
  },

  created () {

  },

  mounted () {
  },

  methods: {
    // ---- 业务
    handleCurrentChange (val) {
      this.getActivities()
    },
    doFilterStart (time) {
      this.filterParams.startTimeBegin = time
    },
    doFilterStop (time) {
      this.filterParams.startTimeStop = time
    },
    emptyConditions () {
      this.filterParams = this.initFilterParams()
      this.getActivities()
    },
    getActivities () {
      const requestParams = this.generateSearchData(this.filterParams)
      if (this.validateParams(requestParams)) {
        this.loadActivities(requestParams)
      } 
    },
    // ---- 功能
    initFilterParams () {
      return {
        startTimeBegin: '',
        startTimeStop: '',
        activityType: [],
        status: '',
        pageSize: 10,
        pageNum: 1
      }
    },
    generateSearchData (params) {
      let resultParams = Object.assign({}, this.defaultSearchData)
      resultParams.activityType = ''
      params.activityType.forEach((res, idx, list) => {
        resultParams.activityType += `${res}${idx === list.length - 1 ? `` : `,`}`
      })
      return resultParams
    },
    validateParams (params) {
      if (params.startTimeBegin !== '' && params.startTimeStop !== '') {
        if (new Date(params.startTimeBegin) > new Date(params.startTimeStop)) {
          this.$message.error('截止日期不得早于开始日期!')
          return false
        }
      } else {
        return true 
      }
    },
    loadActivities (params) {
      this.activityLoading = true
      vkhttp.xhr.get(`${ENV.gw}/cc-crm/api/activityCalendar/list`, {
        params: params
      })
      .then((res) => {
        this.activityLoading = false
        if (!res.code) {
          this.activityList = res.data.list
          this.activityTotal = res.data.total
          // 将活动类型的字母转成汉字 涉及到字符串数组之间的转化 'LX,KX' => '拉新，课消'
          this.activityList.forEach(act => {
            act.activityType = act.activityType.split(',').map(type => {
              return this.typeObj[type]
            })
          })
        } else {
          this.$message.error(res.message)
        }
      })
      .catch((err) => {
        this.activityLoading = false
        this.$message.error(err.toString())
        console.warn(err)
      })
    }
    // 埋点信息
    saClickLog (name, clickId) {
      sa.track('page_click', {
        'click_id': clickId,
        'name': name,
        'Staff_id': userUtil.getEntity().id,
        'message': name
      })
    }
  },

  watch: {
    show (val) {
      if (val) {
        this.filterParams = this.initFilterParams()
        this.getActivities()
      }
      val ? this.$emit('open') : this.$emit('close')
    }
  },

  computed: {
  }
}
</script>
