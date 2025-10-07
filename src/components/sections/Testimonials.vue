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

// Real testimonials from the website
const testimonials = ref<Testimonial[]>([
  {
    id: '1',
    name: 'أحمد',
    nameEn: 'Ahmad',
    role: 'دمشق',
    roleEn: 'Damascus',
    content: 'البودكاست الخاص بإذاعة الريان هو مصدر أساسي لي في تعزيز معرفتي بالتراث الشعبي السوري. أنا ممتن للمحتوى القيم والمتنوع الذي يقدمه البودكاست، والذي ساعدني في فهم عميق لتاريخ وثقافة بلدي.',
    contentEn: 'Rayan Radio\'s podcast is a main source for me in enhancing my knowledge of Syrian folk heritage. I am grateful for the valuable and diverse content provided by the podcast, which helped me gain a deep understanding of my country\'s history and culture.',
    avatar: '/images/testimonials/ahmad.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'لينا',
    nameEn: 'Lina',
    role: 'دمشق',
    roleEn: 'Damascus',
    content: 'بفضل البودكاست، وجدت نفسي على مقربة من تراث بلدي ومعالمه الثقافية. يعتبر البودكاست رفيقاً ممتازاً في رحلة استكشاف التاريخ والتراث السوري، وأنصح به بشدة لكل من يهتم بالثقافة والتراث.',
    contentEn: 'Thanks to the podcast, I found myself close to my country\'s heritage and cultural landmarks. The podcast is an excellent companion in the journey of exploring Syrian history and heritage, and I highly recommend it to anyone interested in culture and heritage.',
    avatar: '/images/testimonials/lina.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'شادي',
    nameEn: 'Shadi',
    role: 'السويداء',
    roleEn: 'As-Suwayda',
    content: 'لا يمكنني تقديم الشكر الكافي لفريق إذاعة الريان على الجهود الرائعة التي يبذلونها في تقديم محتوى ذو جودة عالية ومتنوعة. البودكاست أضاف الكثير لمعرفتي بتراث بلدي وأسلوب الحياة السوري التقليدي.',
    contentEn: 'I cannot thank the Rayan Radio team enough for the wonderful efforts they make in providing high-quality and diverse content. The podcast has added a lot to my knowledge of my country\'s heritage and traditional Syrian lifestyle.',
    avatar: '/images/testimonials/shadi.jpg',
    rating: 5
  }
])
</script>