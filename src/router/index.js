import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RenderFunc from '@/page/RenderFunc'
import MultipleSelect from '@/components/动态生成多个选择器'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/RenderFunc',
      name: 'RenderFunc',
      component: RenderFunc
    },
    {
      path: '/multipleSelect',
      name: 'multipleSelect',
      component: MultipleSelect
    }
  ]
})




