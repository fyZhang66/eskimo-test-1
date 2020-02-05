<template>
  <svg class="f-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
    export default{
        props: ['name']
    }
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
</style>