<template>
  <!-- Hero Section -->
  <section
    class="hero py-20 bg-cover bg-center bg-no-repeat relative"
    :style="{ backgroundImage: `url('${currentBackground}')` }"
  >
    <!-- Background overlay -->
    <div class="absolute inset-0" />
    <div class="hero-content text-center text-white relative z-10">
      <div class="max-w-4xl">
        <h1
          class="mb-8 text-6xl font-black leading-loose bg-gradient-to-r from-rayan-orange to-white bg-clip-text text-transparent"
        >
          {{ $t("hero.title") }}
        </h1>
        <p class="mb-5 text-2xl font-semibold text-rayan-light">
          {{ $t("hero.subtitle") }}
        </p>
        <p class="mb-8 text-lg text-rayan-gray">
          {{ $t("hero.description") }}
        </p>
        <div
          class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <!-- Enhanced Live Stream Button -->
          <button
            class="group relative bg-gradient-to-r from-rayan-orange via-rayan-orange to-rayan-purple text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
            @click="playLive"
          >
            <!-- Animated background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-rayan-purple via-rayan-orange to-rayan-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <!-- Live indicator -->
            <div class="absolute top-2 right-2 flex items-center">
              <div
                class="w-3 h-3 bg-rayan-orange rounded-full animate-pulse mr-2"
              />
              <span class="text-xs font-medium">{{
                $t("hero.title") === "إذاعة الريان" ? "مباشر" : "LIVE"
              }}</span>
            </div>

            <!-- Button content -->
            <div class="relative flex items-center justify-center">
              <div class="text-3xl mr-3 group-hover:animate-bounce">🎧</div>
              <div>
                <div class="text-xl font-bold">
                  {{ $t("hero.listenLive") }}
                </div>
                <div class="text-sm opacity-90">
                  {{
                    $t("hero.title") === "إذاعة الريان"
                      ? "اضغط للاستماع"
                      : "Click to Listen"
                  }}
                </div>
              </div>
            </div>

            <!-- Ripple effect -->
            <div
              class="absolute inset-0 rounded-2xl opacity-30 group-hover:animate-ping bg-white"
            />
          </button>

          <!-- Explore Programs Button -->
          <router-link
            to="/programs"
            class="group bg-white/20 hover:bg-white/30 text-white px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
          >
            <div class="flex items-center justify-center">
              <div class="text-2xl mr-3 group-hover:animate-bounce">📻</div>
              <div>
                <div class="font-bold">
                  {{ $t("hero.explorePrograms") }}
                </div>
                <div class="text-sm opacity-90">
                  {{
                    $t("hero.title") === "إذاعة الريان"
                      ? "استكشف المزيد"
                      : "Discover More"
                  }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced About Section -->
  <section
    class="py-20 bg-gradient-to-br from-base-100 via-primary/3 to-secondary/5 relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-full blur-3xl animate-pulse"
      />
      <div
        class="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl animate-pulse"
        style="animation-delay: 1s"
      />
      <div
        class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary to-rayan-orange rounded-full blur-xl animate-pulse"
        style="animation-delay: 2s"
      />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Enhanced Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center mb-6">
          <div
            class="w-16 h-1 bg-gradient-to-r from-transparent via-rayan-orange to-transparent mr-4"
          />
          <div class="text-4xl animate-bounce">📻</div>
          <div
            class="w-16 h-1 bg-gradient-to-r from-transparent via-rayan-orange to-transparent ml-4"
          />
        </div>

        <h2
          class="text-5xl font-black mb-6 bg-gradient-to-r from-rayan-orange via-primary to-rayan-purple bg-clip-text text-transparent leading-tight"
        >
          {{ $t("hero.welcome") }}
        </h2>
        <h3 class="text-3xl font-bold mb-8 text-primary/80">
          {{ $t("hero.title") }}
        </h3>

        <!-- Decorative divider -->
        <div class="flex items-center justify-center mb-12">
          <div
            class="w-24 h-1 bg-gradient-to-r from-transparent via-rayan-orange to-rayan-purple rounded-full"
          />
          <div
            class="mx-4 w-3 h-3 bg-rayan-orange rounded-full animate-pulse"
          />
          <div
            class="w-24 h-1 bg-gradient-to-r from-rayan-purple via-rayan-orange to-transparent rounded-full"
          />
        </div>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Enhanced Content Cards -->
        <div class="grid md:grid-cols-1 gap-8 mb-12">
          <!-- About Card -->
          <div
            class="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95"
          >
            <div class="flex items-start mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-2xl flex items-center justify-center text-white text-2xl mr-6 group-hover:scale-110 transition-transform duration-300"
              >
                🎙️
              </div>
              <div class="flex-1">
                <h4
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300"
                >
                  {{
                    $t("hero.title") === "إذاعة الريان"
                      ? "عن الإذاعة"
                      : "About the Radio"
                  }}
                </h4>
                <p
                  class="text-lg leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                >
                  {{ $t("hero.aboutText") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Mission Card -->
          <div
            class="group bg-gradient-to-br from-white/90 to-primary/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-12 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:from-white/95 hover:to-primary/10"
          >
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mr-6 group-hover:scale-110 transition-transform duration-300"
              >
                🎯
              </div>
              <div class="flex-1">
                <h4
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-secondary transition-colors duration-300"
                >
                  {{
                    $t("hero.title") === "إذاعة الريان"
                      ? "رسالتنا"
                      : "Our Mission"
                  }}
                </h4>
                <p
                  class="text-lg leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                >
                  {{ $t("hero.missionText") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Call-to-Action -->
        <div class="text-center">
          <div
            class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl"
          >
            <router-link
              to="/about"
              class="group inline-flex items-center bg-gradient-to-r from-rayan-orange via-primary to-rayan-purple text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
            >
              <div class="text-2xl mr-4 group-hover:animate-bounce">📖</div>
              <div>
                <div>{{ $t("hero.learnMore") }}</div>
                <div class="text-sm opacity-90">
                  {{
                    $t("hero.title") === "إذاعة الريان"
                      ? "اكتشف المزيد عنا"
                      : "Discover More About Us"
                  }}
                </div>
              </div>
              <svg
                class="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced Programs List Section -->
  <section
    class="py-20 bg-gradient-to-br from-gray-50 via-base-200 to-primary/5 relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full blur-xl"
      />
      <div
        class="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full blur-xl"
      />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {{ $t("programs.title") }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t("programs.subtitle") }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div
          class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12"
        >
          <div class="space-y-6">
            <div
              v-for="(program, index) in allPrograms"
              :key="program.id"
              class="group flex items-center justify-between p-6 rounded-2xl border-2 border-transparent hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <!-- Program Number Badge -->
              <div class="flex items-center flex-1">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {{ index + 1 }}
                </div>

                <div class="flex-1">
                  <h3
                    class="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300"
                  >
                    {{
                      $t("hero.title") === "إذاعة الريان"
                        ? program.title
                        : program.titleEn || program.title
                    }}
                  </h3>
                  <p class="text-sm text-gray-600 mb-2 flex items-center">
                    <svg
                      class="w-4 h-4 mr-2 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{ $t("programs.host") }}:
                    {{
                      $t("hero.title") === "إذاعة الريان"
                        ? program.host
                        : program.hostEn || program.host
                    }}
                  </p>
                  <p class="text-sm text-gray-500 flex items-center">
                    <svg
                      class="w-4 h-4 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{
                      $t("hero.title") === "إذاعة الريان"
                        ? program.schedule
                        : program.scheduleEn || program.schedule
                    }}
                  </p>
                </div>
              </div>

              <!-- Status Indicator -->
              <div
                class="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full group-hover:bg-green-200 transition-colors duration-300"
              >
                <div
                  class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"
                />
                <span class="text-sm font-semibold">
                  {{ $t("hero.title") === "إذاعة الريان" ? "نشط" : "Active" }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Display All Programs Button -->
        <div class="text-center mt-16">
          <router-link
            to="/programs"
            class="group inline-flex items-center bg-gradient-to-r from-primary via-primary-focus to-secondary text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-2"
          >
            <div class="text-2xl mr-4 group-hover:animate-bounce">📻</div>
            <div>
              <div>
                {{
                  $t("hero.title") === "إذاعة الريان"
                    ? "عرض جميع البرامج"
                    : "Display All Programs"
                }}
              </div>
              <div class="text-sm opacity-90">
                {{
                  $t("hero.title") === "إذاعة الريان"
                    ? "مع الصور والتفاصيل"
                    : "With Images & Details"
                }}
              </div>
            </div>
            <svg
              class="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useProgramsStore } from "../store/useProgramsStore";
import { usePlayerStore } from "../store/usePlayerStore";
import { useSeo } from "../composables/useSeo";
import { useRandomBackground } from "../composables/useRandomBackground";

const programsStore = useProgramsStore();
const playerStore = usePlayerStore();

// Random background
const { currentBackground } = useRandomBackground();

// SEO
useSeo({
  title: "الرئيسية",
  description: "إذاعة الريّان - صوت الحق والإسلام",
});

const allPrograms = computed(() =>
  programsStore.programs.filter((p) => p.isActive)
);

const playLive = () => {
  playerStore.playLiveStream();
};

onMounted(() => {
  programsStore.fetchPrograms();
});
</script>
