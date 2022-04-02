<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps<{ icon: string }>();
</script>

<style lang="scss" scoped>
.icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
