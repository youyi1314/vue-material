import Vue from 'vue'

export default function (data: any, setter?: Function): any {
  const Instance = {
    reactive: null
  }

  Vue.util.defineReactive(Instance, 'reactive', data, setter)

  return Instance.reactive
}
