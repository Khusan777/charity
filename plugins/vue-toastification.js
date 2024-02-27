import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification'
export default defineNuxtPlugin(() => {
  const toast = useToast({
    type: 'error',
    dismissible: true,
    duration: 5000,
    position: 'bottom',
  })
  return {
    provide: {
      toast,
    },
  }
})
