import { ref } from 'vue'
import type { ApiResponse, NewsletterSubscription } from '@/types/api'

export function useNewsletter() {
  const isLoading = ref(false)
  const message = ref('')
  const isSuccess = ref(false)

  const subscribe = async (data: NewsletterSubscription): Promise<boolean> => {
    isLoading.value = true
    message.value = ''
    isSuccess.value = false

    try {
      // Mock API call - replace with actual endpoint
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result: ApiResponse<any> = await response.json()

      if (result.success) {
        message.value = 'تم الاشتراك بنجاح!'
        isSuccess.value = true
        return true
      } else {
        message.value = result.message || 'حدث خطأ في الاشتراك'
        return false
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      message.value = 'حدث خطأ في الاتصال'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const clearMessage = () => {
    message.value = ''
    isSuccess.value = false
  }

  return {
    isLoading,
    message,
    isSuccess,
    subscribe,
    clearMessage
  }
}