<template>
  <div class="checkboxes__item">
    <label class="checkbox style-c">
      <input
        type="checkbox"
        :checked="checked"
        @input="(event) => $emit('update:checked', event.target.checked)"
      />
      <div class="checkbox__checkmark"></div>
    </label>
    <div class="checkbox__body" v-html="label"></div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['update:checked'])
</script>

<style scoped lang="scss">
.checkboxes__item {
  padding-bottom: 15px;
}
.checkbox.style-c {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox.style-c input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox.style-c input:checked ~ .checkbox__checkmark {
  border: 1px solid #0073ff;
  background-color: #ffffff;
}
.checkbox.style-c input:checked ~ .checkbox__checkmark:after {
  opacity: 1;
}
.checkbox.style-c:hover input ~ .checkbox__checkmark {
  background-color: #eee;
}
.checkbox.style-c:hover input:checked ~ .checkbox__checkmark {
  border: 1px solid #0073ff;
  background-color: #ffffff;
}
.checkbox.style-c .checkbox__checkmark {
  position: absolute;
  top: 19px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  transition: background-color 0.25s ease;
  border: 1px solid #9395a5;
  border-radius: 5px;
}
.checkbox.style-c .checkbox__checkmark:after {
  content: '';
  position: absolute;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #0073ff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.checkbox__body {
  padding-left: 30px;
  margin-top: 10px;
  line-height: 14px;
  font-weight: 500;
  font-size: 12px;
  color: #2c2d35;
}
span {
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #0073ff;
}
</style>
