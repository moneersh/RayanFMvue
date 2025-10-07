<template>
  <AppShell>
    <!-- Hero Section - President's Message -->
    <section class="hero min-h-screen bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
      <div class="hero-content text-center max-w-5xl">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-8">{{ $t('contact.presidentTitle') }}</h1>
          
          <div class="prose prose-lg max-w-4xl mx-auto text-justify leading-relaxed space-y-6">
            <p class="text-lg">
              {{ $t('contact.presidentMessage') }}
            </p>
            
            <p class="text-lg">
              {{ $t('contact.presidentMessage2') }}
            </p>
            
            <p class="text-lg">
              {{ $t('contact.presidentMessage3') }}
            </p>
            
            <div class="text-center mt-8">
              <p class="text-lg font-semibold italic">{{ $t('contact.presidentClosing') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Let's Connect Today Section -->
    <section class="py-16 bg-primary/10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-6 text-primary">{{ $t('contact.connectToday') }}</h2>
          <p class="text-lg max-w-3xl mx-auto leading-relaxed">{{ $t('contact.connectMessage') }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('contact.reachUs') }}</h2>
          <p class="text-lg opacity-70">{{ $t('contact.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <!-- Phone -->
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="text-primary text-4xl mb-4">
                <i class="fas fa-phone"></i>
              </div>
              <h3 class="card-title justify-center mb-2">{{ $t('contact.phone') }}</h3>
              <p class="text-lg mb-3">+971507811815</p>
              <div class="space-y-2">
                <a 
                  href="tel:+971507811815" 
                  class="btn btn-outline btn-primary btn-sm"
                >
                  <i class="fas fa-phone mr-2"></i>
                  Call Now
                </a>
                <a 
                  href="https://wa.me/971507811815" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-success btn-sm ml-2"
                >
                  <i class="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="text-primary text-4xl mb-4">
                <i class="fas fa-envelope"></i>
              </div>
              <h3 class="card-title justify-center mb-2">{{ $t('contact.email') }}</h3>
              <p class="text-lg">info@rayanfm.net</p>
            </div>
          </div>

          <!-- Address -->
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="text-primary text-4xl mb-4">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3 class="card-title justify-center mb-2">{{ $t('contact.address') }}</h3>
              <p class="text-lg">السويداء، سوريا</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto mt-16">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title text-2xl mb-6 justify-center">{{ $t('contact.sendMessage') }}</h3>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">{{ $t('contact.name') }} *</span>
                  </label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    class="input input-bordered" 
                    :class="{ 'input-error': errors.name }"
                    required 
                  />
                  <span v-if="errors.name" class="text-error text-sm mt-1">{{ errors.name }}</span>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">{{ $t('contact.email') }} *</span>
                  </label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="input input-bordered" 
                    :class="{ 'input-error': errors.email }"
                    required 
                  />
                  <span v-if="errors.email" class="text-error text-sm mt-1">{{ errors.email }}</span>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">{{ $t('contact.message') }} *</span>
                  </label>
                  <textarea 
                    v-model="form.message" 
                    class="textarea textarea-bordered h-32" 
                    :class="{ 'textarea-error': errors.message }"
                    required
                  ></textarea>
                  <span v-if="errors.message" class="text-error text-sm mt-1">{{ errors.message }}</span>
                </div>

                <div class="form-control">
                  <button 
                    type="submit" 
                    class="btn btn-primary" 
                    :class="{ 'loading': isSubmitting }"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? '' : $t('contact.send') }}
                  </button>
                </div>
              </form>

              <!-- Success/Error Messages -->
              <div v-if="successMessage" class="alert alert-success mt-4">
                <i class="fas fa-check-circle"></i>
                <span>{{ $t('contact.success') }}</span>
              </div>

              <div v-if="errorMessage" class="alert alert-error mt-4">
                <i class="fas fa-exclamation-triangle"></i>
                <span>{{ $t('contact.error') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import AppShell from '@/layouts/AppShell.vue'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()

// SEO setup
useSeo({
  title: t('contact.title'),
  description: t('contact.subtitle')
})

// Form state
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref(false)
const errorMessage = ref(false)

// Form validation
const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.message = ''
  
  // Validate name
  if (!form.name.trim()) {
    errors.name = t('contact.required')
    isValid = false
  }
  
  // Validate email
  if (!form.email.trim()) {
    errors.email = t('contact.required')
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }
  
  // Validate message
  if (!form.message.trim()) {
    errors.message = t('contact.required')
    isValid = false
  }
  
  return isValid
}

// Form submission
const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  successMessage.value = false
  errorMessage.value = false
  
  try {
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    
    // Show success message
    successMessage.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.value = false
    }, 5000)
    
  } catch (error) {
    errorMessage.value = true
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      errorMessage.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>