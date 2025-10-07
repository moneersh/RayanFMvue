<template>
  <div class="carousel w-full">
    <div v-for="(testimonial, index) in testimonials" 
         :key="testimonial.id"
         :id="`slide${index}`"
         class="carousel-item relative w-full">
      <div class="card bg-base-100 shadow-xl mx-auto max-w-2xl">
        <div class="card-body text-center">
          <div class="avatar mb-4">
            <div class="w-16 rounded-full">
              <img :src="testimonial.avatar || '/images/avatar-placeholder.png'" :alt="testimonial.name">
            </div>
          </div>
          <div class="rating mb-4">
            <input v-for="i in 5" 
                   :key="i"
                   type="radio" 
                   name="rating" 
                   class="mask mask-star-2 bg-orange-400" 
                   :checked="i <= testimonial.rating"
                   disabled>
          </div>
          <p class="text-lg mb-4">"{{ testimonial.content }}"</p>
          <h3 class="font-bold">{{ testimonial.name }}</h3>
          <p class="text-sm opacity-70">{{ testimonial.role }}</p>
        </div>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a :href="`#slide${index === 0 ? testimonials.length - 1 : index - 1}`" class="btn btn-circle">❮</a> 
        <a :href="`#slide${index === testimonials.length - 1 ? 0 : index + 1}`" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Testimonial } from '@/types/content'

// Mock testimonials data
const testimonials = ref<Testimonial[]>([
  {
    id: '1',
    name: 'أحمد محمد',
    nameEn: 'Ahmed Mohammed',
    role: 'مستمع مخلص',
    roleEn: 'Loyal Listener',
    content: 'إذاعة الריّان تقدم محتوى رائع ومفيد، أستمع إليها يومياً',
    contentEn: 'Rayan Radio provides excellent and useful content, I listen to it daily',
    avatar: '/images/testimonials/user1.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'فاطمة علي',
    nameEn: 'Fatima Ali',
    role: 'أم وربة منزل',
    roleEn: 'Mother and Housewife',
    content: 'البرامج الدينية في الإذاعة تساعدني في تربية أطفالي تربية إسلامية صحيحة',
    contentEn: 'The religious programs on the radio help me raise my children with proper Islamic upbringing',
    avatar: '/images/testimonials/user2.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'عبد الله السعيد',
    nameEn: 'Abdullah Al-Saeed',
    role: 'طالب جامعي',
    roleEn: 'University Student',
    content: 'أحب البرامج الثقافية والتعليمية، تزيد من معرفتي وثقافتي',
    contentEn: 'I love the cultural and educational programs, they increase my knowledge and culture',
    avatar: '/images/testimonials/user3.jpg',
    rating: 4
  }
])
</script>