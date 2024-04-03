<template>
  <div class="badge">
    <div class="status">{{ statusText }}</div>
    <NuxtImg
      v-if="withImage"
      class="image"
      :src="`${config.public.apiBase}/storage/${imgRef}`"
      alt="urgent"
    ></NuxtImg>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
defineProps({
  statusText: {
    type: String,
    required: true,
  },
  backColor: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  imgRef: {
    type: String,
    default: '',
    required: false,
  },
  withImage: {
    type: Boolean,
  },
})
</script>

<style scoped lang="scss">
.badge {
  width: max-content;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  padding: 2px 8px;
  height: 20px;
  background: v-bind(backColor);
  & .status {
    font-weight: 600;
    font-size: 10px;
    color: v-bind(colour);
  }
  & .image {
    width: 16px;
    height: 16px;
  }
}
</style>
