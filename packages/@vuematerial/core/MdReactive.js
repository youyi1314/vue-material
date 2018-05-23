import Vue from 'vue'

export default function (data, setter) {
  const Instance = {
    reactive: null
  }

  Vue.util.defineReactive(Instance, 'reactive', data, setter)

  return Instance.reactive
}
