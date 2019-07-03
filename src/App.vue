<template>
  <div id="app">
    <div id="container" class="vfx"></div>
    <router-view/>
  </div>
</template>

<script>
import Highcharts from 'highcharts'

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.chart = Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        minPointLength: 100,
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: [
            '今日成单数', '今日约课数', '有效通次', '通话时长'
          ],
          crosshair: true
        },
        yAxis: [{
          min: 0,
          title: {
            text: ''
          }
        },{
          min: 100,
          title: {
            text: ''
          }
        }],
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.2f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [{
          name: '大区平均',
          data: [1,2,300,400],
          yAxis: 0,
          minPointLength: 100
        }, {
          name: '全国平均',
          data: [0,3,400,500],
          yAxis: 0,
          minPointLength: 100
        }, {
          name: '全国Top',
          data: [7,9,200,300],
          yAxis: 0,
          minPointLength: 100
        }, {
          name: '本人',
          data: [3,6,100,203],
          yAxis: 0,
          minPointLength: 100
        }]
        // colors: ['red', 'yellow', 'blue', 'green'] // 可自定义设置柱状图的颜色
      })
  }
}
</script>

<style lang="stylus">

@import 'util/font-icon/iconfont.css'

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
