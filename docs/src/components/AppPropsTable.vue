<template>
  <div />
</template>

<script>
  const props = {}

  function camelCaseToDash (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

  function getPropTypeName (constructor) {
    return constructor ? constructor.name : 'null'
  }

  function getPropType (type) {
    if (Array.isArray(type)) {
      return type.map((t) => getPropTypeName(t)).join(' | ')
    }

    return getPropTypeName(type)
  }

  function getDefaultPropValue (defaultValue) {
    if (!defaultValue) {
      return '\'\''
    }

    return defaultValue.toString()
  }

  function getPropDescription (description) {
    if (!description) {
      return 'This prop has no description yet!'
    }

    return description
  }

  function getExpectedValues (accepts) {
    return accepts && accepts.join(' | ')
  }

  Object.keys(props).forEach((prop) => {
    const rawProp = props[prop]
    const normalizedPropName = camelCaseToDash(prop)
    const propType = getPropType(rawProp.type)
    const defaultValue = getDefaultPropValue(rawProp.default)
    const description = getPropDescription(rawProp.description)
    const accepts = getExpectedValues(rawProp.accepts)

    console.log('Name:        ', normalizedPropName)
    console.log('Type:        ', propType)
    console.log('Default:     ', defaultValue)
    console.log('Description: ', description)
    console.log('Accepts:     ', accepts)
    console.log('__________________________________________________')
  })

  export default {

  }
</script>
