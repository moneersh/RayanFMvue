<template>
  <div class="max-w-md mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="form-control">
        <div class="input-group">
          <input 
            v-model="email"
            type="email" 
            :placeholder="$t('newsletter.emailPlaceholder')" 
            class="input input-bordered flex-1"
            required
            :disabled="newsletter.isLoading.value"
          >
          <button 
            type="submit" 
            class="btn btn-accent"
            :class="{ 'loading': newsletter.isLoading.value }"
            :disabled="newsletter.isLoading.value"
          >
            {{ $t('newsletter.subscribe') }}
          </button>
        </div>
      </div>
      
      <!-- Success/Error Messages -->
      <div v-if="newsletter.message" 
           class="alert"
           :class="{ 'alert-success': newsletter.isSuccess, 'alert-error': !newsletter.isSuccess }">
        <span>{{ newsletter.message }}</span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNewsletter } from '@/composables/useNewsletter'

const email = ref('')
const newsletter = useNewsletter()

const handleSubmit = async () => {
  if (!email.value) return
  
  const success = await newsletter.subscribe({
    email: email.value
  })
  
  if (success) {
    email.value = ''
    // Clear success message after 3 seconds
    setTimeout(() => {
      newsletter.clearMessage()
    }, 3000)
  }
}
</script>