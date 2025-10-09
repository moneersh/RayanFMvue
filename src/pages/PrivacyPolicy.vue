<template>
  <div
    class="min-h-screen bg-gradient-to-br from-base-100 via-primary/3 to-secondary/5 relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-full blur-3xl animate-pulse"
      />
      <div
        class="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl animate-pulse"
      />
      <div
        class="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-primary to-rayan-orange rounded-full blur-xl animate-pulse"
      />
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center mb-6">
          <div
            class="w-16 h-1 bg-gradient-to-r from-transparent via-rayan-orange to-transparent mr-4"
          />
          <div class="text-4xl">🔒</div>
          <div
            class="w-16 h-1 bg-gradient-to-r from-transparent via-rayan-orange to-transparent ml-4"
          />
        </div>

        <h1
          class="text-5xl font-black mb-6 bg-gradient-to-r from-rayan-orange via-primary to-rayan-purple bg-clip-text text-transparent leading-tight"
        >
          {{ $t("privacy.title") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {{ $t("privacy.subtitle") }}
        </p>

        <!-- Last Updated Badge -->
        <div
          class="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20"
        >
          <div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
          <span class="text-sm font-semibold text-gray-700">
            {{ $t("privacy.lastUpdated") }}: {{ $t("privacy.updateDate") }}
          </span>
        </div>
      </div>

      <!-- Privacy Policy Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Introduction Section -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              📋
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.introduction.title") }}
              </h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">
                {{ $t("privacy.introduction.content1") }}
              </p>
              <p class="text-lg leading-relaxed text-gray-700">
                {{ $t("privacy.introduction.content2") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Information Collection Section -->
        <div
          class="bg-gradient-to-br from-white/90 to-primary/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              📊
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.infoCollection.title") }}
              </h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-6">
                {{ $t("privacy.infoCollection.intro") }}
              </p>
              <div class="space-y-4">
                <div
                  class="bg-white/50 rounded-2xl p-6 border border-primary/10"
                >
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <div class="w-2 h-2 bg-rayan-orange rounded-full mr-3" />
                    {{ $t("privacy.infoCollection.personal.title") }}
                  </h3>
                  <p class="text-gray-700">
                    {{ $t("privacy.infoCollection.personal.content") }}
                  </p>
                </div>
                <div
                  class="bg-white/50 rounded-2xl p-6 border border-primary/10"
                >
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <div class="w-2 h-2 bg-secondary rounded-full mr-3" />
                    {{ $t("privacy.infoCollection.technical.title") }}
                  </h3>
                  <p class="text-gray-700">
                    {{ $t("privacy.infoCollection.technical.content") }}
                  </p>
                </div>
                <div
                  class="bg-white/50 rounded-2xl p-6 border border-primary/10"
                >
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <div class="w-2 h-2 bg-accent rounded-full mr-3" />
                    {{ $t("privacy.infoCollection.interaction.title") }}
                  </h3>
                  <p class="text-gray-700">
                    {{ $t("privacy.infoCollection.interaction.content") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- How We Use Information Section -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary to-rayan-purple rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              🎯
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.usage.title") }}
              </h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-6">
                {{ $t("privacy.usage.intro") }}
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  class="bg-gradient-to-br from-rayan-orange/10 to-rayan-purple/10 rounded-2xl p-6 border border-rayan-orange/20"
                >
                  <div class="flex items-center mb-3">
                    <div class="text-2xl mr-3">📻</div>
                    <p class="text-gray-700 font-medium">
                      {{ $t("privacy.usage.point1") }}
                    </p>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 border border-secondary/20"
                >
                  <div class="flex items-center mb-3">
                    <div class="text-2xl mr-3">📬</div>
                    <p class="text-gray-700 font-medium">
                      {{ $t("privacy.usage.point2") }}
                    </p>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20"
                >
                  <div class="flex items-center mb-3">
                    <div class="text-2xl mr-3">📈</div>
                    <p class="text-gray-700 font-medium">
                      {{ $t("privacy.usage.point3") }}
                    </p>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-br from-accent/10 to-rayan-orange/10 rounded-2xl p-6 border border-accent/20"
                >
                  <div class="flex items-center mb-3">
                    <div class="text-2xl mr-3">⚖️</div>
                    <p class="text-gray-700 font-medium">
                      {{ $t("privacy.usage.point4") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Sharing Section -->
        <div
          class="bg-gradient-to-br from-white/90 to-red/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              🚫
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.sharing.title") }}
              </h2>
              <div class="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                <p class="text-lg font-semibold text-red-800 mb-2">
                  {{ $t("privacy.sharing.guarantee") }}
                </p>
              </div>
              <p class="text-lg leading-relaxed text-gray-700 mb-6">
                {{ $t("privacy.sharing.intro") }}
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-4 flex-shrink-0 mt-1"
                  >
                    🔧
                  </div>
                  <p class="text-gray-700">
                    {{ $t("privacy.sharing.providers") }}
                  </p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white text-sm mr-4 flex-shrink-0 mt-1"
                  >
                    ⚖️
                  </div>
                  <p class="text-gray-700">
                    {{ $t("privacy.sharing.legal") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cookies Section -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              🍪
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.cookies.title") }}
              </h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">
                {{ $t("privacy.cookies.content1") }}
              </p>
              <p class="text-lg leading-relaxed text-gray-700">
                {{ $t("privacy.cookies.content2") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Your Rights Section -->
        <div
          class="bg-gradient-to-br from-white/90 to-green/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              ✅
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.rights.title") }}
              </h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-6">
                {{ $t("privacy.rights.intro") }}
              </p>
              <div class="grid md:grid-cols-1 gap-4">
                <div
                  class="flex items-center bg-green-50 rounded-2xl p-4 border border-green-200"
                >
                  <div class="text-2xl mr-4">🔍</div>
                  <p class="text-gray-700 font-medium">
                    {{ $t("privacy.rights.access") }}
                  </p>
                </div>
                <div
                  class="flex items-center bg-blue-50 rounded-2xl p-4 border border-blue-200"
                >
                  <div class="text-2xl mr-4">✏️</div>
                  <p class="text-gray-700 font-medium">
                    {{ $t("privacy.rights.correction") }}
                  </p>
                </div>
                <div
                  class="flex items-center bg-purple-50 rounded-2xl p-4 border border-purple-200"
                >
                  <div class="text-2xl mr-4">🚫</div>
                  <p class="text-gray-700 font-medium">
                    {{ $t("privacy.rights.withdraw") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div
          class="bg-gradient-to-br from-white/90 to-primary/10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-2xl flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0"
            >
              📞
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                {{ $t("privacy.contact.title") }}
              </h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-6">
                {{ $t("privacy.contact.intro") }}
              </p>
              <div class="grid md:grid-cols-1 gap-4">
                <div
                  class="flex items-center bg-gradient-to-r from-rayan-orange/10 to-rayan-purple/10 rounded-2xl p-6 border border-rayan-orange/20"
                >
                  <div class="text-3xl mr-4">📧</div>
                  <div>
                    <p class="text-gray-600 text-sm font-medium mb-1">
                      {{ $t("privacy.contact.email") }}
                    </p>
                    <a
                      href="mailto:privacy@rayanfm.net"
                      class="text-xl font-bold text-rayan-orange hover:text-rayan-purple transition-colors duration-300"
                    >
                      privacy@rayanfm.net
                    </a>
                  </div>
                </div>
                <div
                  class="flex items-center bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-6 border border-secondary/20"
                >
                  <div class="text-3xl mr-4">📍</div>
                  <div>
                    <p class="text-gray-600 text-sm font-medium mb-1">
                      {{ $t("privacy.contact.address") }}
                    </p>
                    <p class="text-lg font-semibold text-gray-800">
                      {{ $t("privacy.contact.location") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Note -->
        <div class="text-center mt-16">
          <div
            class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
          >
            <div class="text-3xl mr-4">🔒</div>
            <div class="text-left">
              <p class="text-lg font-semibold text-gray-800 mb-1">
                © 2025 {{ $t("hero.title") }} -
                {{ $t("footer.rights", { year: new Date().getFullYear() }) }}
              </p>
              <p class="text-gray-600">
                {{ $t("privacy.footer.commitment") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from "@/composables/useSeo";

// SEO
useSeo({
  title: "سياسة الخصوصية - Privacy Policy",
  description:
    "سياسة الخصوصية الخاصة بإذاعة الريان - Privacy Policy for Rayan FM",
});
</script>
