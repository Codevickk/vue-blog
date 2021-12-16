<template>
  <div
    class="notice"
    :class="{
      'notice--fixedTop': fixedTop,
      'notice--success': status === 'success',
      'notice--error': status === 'error',
    }"
  >
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fixedTop", "status"],
};
</script>