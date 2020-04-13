<template>
  <svg class="f-icon gigi">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
    import './svg'
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
