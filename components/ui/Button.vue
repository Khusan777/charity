<template>
  <button
    v-ripple.500="'rgba(255, 255, 255, 0.35)'"
    :disabled="withDisabled"
    :class="withDisabled ? 'btn-without-background' : 'btn-help-background'"
  >
    {{ textBtn }}
  </button>
</template>

<script setup>
defineProps({
  textBtn: {
    type: String,
    default: 'Хочу помочь',
  },
  withDisabled: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.btn-help-background {
  all: unset;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0;
  background: linear-gradient(
    0deg,
    rgb(0, 115, 255) -1.25%,
    rgb(0, 194, 255) 100%
  );
  border-radius: 10px;
}
.btn-without-background {
  all: unset;
  line-height: 17px;
  letter-spacing: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cccfde;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #575965;
}
</style>
