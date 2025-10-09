<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6">
          {{ teamTitle || $t("about.meetOurTeam") }}
        </h2>
        <p class="text-lg max-w-4xl mx-auto leading-relaxed">
          {{ teamDescription || $t("about.teamIntro") }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-16">
        <div class="loading loading-spinner loading-lg text-primary" />
      </div>

      <!-- Team Members Grid -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
        >
          <!-- Large Image Section -->
          <figure class="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
              loading="lazy"
              @error="handleImageError"
            />
            <!-- Gradient overlay for better text readability -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <!-- Hover text overlay -->
            <div
              class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <h3 class="text-lg sm:text-xl font-bold mb-1 drop-shadow-lg">
                {{ member.name }}
              </h3>
              <p class="text-sm opacity-90 drop-shadow-md">
                {{ member.position }}
              </p>
            </div>
          </figure>

          <!-- Card Content -->
          <div class="card-body p-6 text-center">
            <h3
              class="card-title text-lg justify-center mb-2 group-hover:text-primary transition-colors duration-300"
            >
              {{ member.name }}
            </h3>
            <p
              class="text-sm opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            >
              {{ member.position }}
            </p>

            <!-- Decorative elements -->
            <div class="flex justify-center mt-4">
              <div
                class="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { getAssetPath, getImagePath } from "../../utils/assets";

const { locale } = useI18n();

// Staff data types
interface StaffMember {
  id: string;
  nameAr: string;
  nameEn: string;
  positionAr: string;
  positionEn: string;
  image: string;
  speciality: string;
  experience: string;
  programs?: string[];
  bio: {
    ar: string;
    en: string;
  };
}

interface StaffData {
  teamInfo: {
    titleAr: string;
    titleEn: string;
    descriptionAr: string;
    descriptionEn: string;
  };
  members: StaffMember[];
}

const staffData = ref<StaffData | null>(null);
const loading = ref(true);

// Computed properties for localized content
const teamTitle = computed(() => {
  return staffData.value
    ? locale.value === "ar"
      ? staffData.value.teamInfo.titleAr
      : staffData.value.teamInfo.titleEn
    : "";
});

const teamDescription = computed(() => {
  return staffData.value
    ? locale.value === "ar"
      ? staffData.value.teamInfo.descriptionAr
      : staffData.value.teamInfo.descriptionEn
    : "";
});

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  experience: string;
  programs: string[];
}

const teamMembers = computed(() => {
  if (!staffData.value) return [];

  return staffData.value.members.map(
    (member: StaffMember): TeamMember => ({
      name: locale.value === "ar" ? member.nameAr : member.nameEn,
      position: locale.value === "ar" ? member.positionAr : member.positionEn,
      image: getImagePath(member.image),
      bio: locale.value === "ar" ? member.bio.ar : member.bio.en,
      experience: member.experience,
      programs: member.programs || [],
    })
  );
});

// Load staff data from JSON
onMounted(async () => {
  try {
    const response = await fetch(getAssetPath("data/staff.json"));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    staffData.value = data;
  } catch {
    // Fallback to empty data
    staffData.value = {
      teamInfo: {
        titleAr: "فريق العمل",
        titleEn: "Our Team",
        descriptionAr: "فريق عمل متميز",
        descriptionEn: "Distinguished team",
      },
      members: [],
    };
  } finally {
    loading.value = false;
  }
});

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("");
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  // Fallback to initials if image fails to load
  const member = teamMembers.value.find(
    (m: TeamMember) => target.alt === m.name
  );
  if (member && target.parentElement) {
    target.parentElement.innerHTML = `
      <div class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
        ${getInitials(member.name)}
      </div>
    `;
  }
};
</script>
