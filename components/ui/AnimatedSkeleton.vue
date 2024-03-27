<template>
  <div class="skeleton-wrapper"></div>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  borderRadius: {
    type: String,
    default: null,
  },
})
</script>

<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
.skeleton-wrapper {
  height: v-bind(height);
  width: v-bind(width);
  border-radius: v-bind(borderRadius);
  background: linear-gradient(304deg, #ededed 0%, #d6d7d9 100%);
  background-size: 200% 100%;
  animation: bgAnimate 1.2s linear infinite;
}
</style>
