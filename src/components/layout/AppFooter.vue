<template>
  <!-- Footer -->
  <footer
    class="relative bg-gradient-to-br from-rayan-dark via-rayan-purple to-rayan-dark text-white overflow-hidden"
  >
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-rayan-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse"
      />
      <div
        class="absolute top-0 right-0 w-72 h-72 bg-rayan-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"
      />
      <div
        class="absolute bottom-0 left-1/3 w-72 h-72 bg-rayan-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"
      />
    </div>

    <div
      class="relative container mx-auto px-6 py-24"
      :class="{ 'rtl-container': locale === 'ar' }"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto"
        :class="{ 'rtl-grid': locale === 'ar' }"
      >
        <!-- About Section -->
        <div class="space-y-8">
          <div class="flex items-center mb-10">
            <div
              class="w-3 h-16 bg-gradient-to-b from-rayan-orange to-rayan-purple rounded-full mr-5 shadow-lg"
            />
            <h3
              class="font-bold text-4xl bg-gradient-to-r from-white via-rayan-orange to-rayan-purple bg-clip-text text-transparent"
            >
              {{ $t("footer.about") }}
            </h3>
          </div>
          <p
            class="text-lg leading-relaxed text-white/90 mb-10 max-w-2xl font-medium"
          >
            {{ $t("footer.description") }}
          </p>

          <!-- Enhanced Social Media Section -->
          <div class="space-y-6">
            <h4 class="font-bold text-2xl text-white mb-6 flex items-center">
              <svg
                class="w-6 h-6 mr-3 text-rayan-orange"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
              {{ $t("footer.followUs") }}
            </h4>
            <div class="flex gap-4 flex-wrap">
              <!-- Facebook -->
              <a
                v-if="siteStore.settings.socialMedia.facebook"
                :href="siteStore.settings.socialMedia.facebook"
                class="group relative bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:-rotate-3"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <svg
                  class="w-7 h-7 text-white group-hover:text-rayan-orange transition-all duration-300 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>

              <!-- Instagram -->
              <a
                v-if="siteStore.settings.socialMedia.instagram"
                :href="siteStore.settings.socialMedia.instagram"
                class="group relative bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:rotate-3"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <svg
                  class="w-7 h-7 text-white group-hover:text-rayan-orange transition-all duration-300 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.537-2.03-4.537-4.538s2.029-4.537 4.537-4.537 4.538 2.029 4.538 4.537-2.03 4.538-4.538 4.538zm7.424 0c-2.508 0-4.537-2.03-4.537-4.538s2.029-4.537 4.537-4.537 4.538 2.029 4.538 4.537-2.03 4.538-4.538 4.538z"
                  />
                </svg>
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>

              <!-- YouTube -->
              <a
                v-if="siteStore.settings.socialMedia.youtube"
                :href="siteStore.settings.socialMedia.youtube"
                class="group relative bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:-rotate-3"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <svg
                  class="w-7 h-7 text-white group-hover:text-rayan-orange transition-all duration-300 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400/30 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>

              <!-- Telegram -->
              <a
                v-if="siteStore.settings.socialMedia.telegram"
                :href="siteStore.settings.socialMedia.telegram"
                class="group relative bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:rotate-3"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <svg
                  class="w-7 h-7 text-white group-hover:text-rayan-orange transition-all duration-300 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.944 0C5.348 0 0 5.348 0 11.944s5.348 11.944 11.944 11.944 11.944-5.348 11.944-11.944S18.54 0 11.944 0zm4.618 7.703l-1.73 8.165c-.13.596-.469.744-.95.463l-2.625-1.934-1.267 1.22c-.14.14-.259.259-.532.259l.19-2.683 4.87-4.4c.212-.188-.046-.293-.329-.106l-6.026 3.796-2.596-.811c-.564-.177-.576-.564.118-.834l10.15-3.914c.469-.177.881.106.727.835z"
                  />
                </svg>
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>

              <!-- WhatsApp -->
              <a
                v-if="siteStore.settings.socialMedia.whatsapp"
                :href="siteStore.settings.socialMedia.whatsapp"
                class="group relative bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:-rotate-3"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <svg
                  class="w-7 h-7 text-white group-hover:text-rayan-orange transition-all duration-300 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"
                  />
                </svg>
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/30 to-green-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Enhanced Quick Links -->
        <div class="space-y-8">
          <div class="flex items-center mb-10">
            <div
              class="w-3 h-16 bg-gradient-to-b from-rayan-purple to-rayan-orange rounded-full mr-5 shadow-lg"
            />
            <h3 class="font-bold text-4xl text-white flex items-center">
              <svg
                class="w-8 h-8 mr-3 text-rayan-orange"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              {{ $t("footer.quickLinks") }}
            </h3>
          </div>
          <nav class="space-y-4">
            <router-link
              to="/"
              class="group flex items-center p-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <span
                class="text-xl font-semibold text-white/90 group-hover:text-rayan-orange transition-colors duration-300"
              >
                {{ $t("nav.home") }}
              </span>
            </router-link>

            <router-link
              to="/about"
              class="group flex items-center p-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-rayan-purple to-rayan-orange rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <span
                class="text-xl font-semibold text-white/90 group-hover:text-rayan-orange transition-colors duration-300"
              >
                {{ $t("nav.about") }}
              </span>
            </router-link>

            <router-link
              to="/programs#programs"
              class="group flex items-center p-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                  />
                </svg>
              </div>
              <span
                class="text-xl font-semibold text-white/90 group-hover:text-rayan-orange transition-colors duration-300"
              >
                {{ locale === "ar" ? "البرامج" : "Programs" }}
              </span>
            </router-link>

            <router-link
              to="/programs#team"
              class="group flex items-center p-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span
                class="text-xl font-semibold text-white/90 group-hover:text-rayan-orange transition-colors duration-300"
              >
                {{ locale === "ar" ? "فريق العمل" : "Our Team" }}
              </span>
            </router-link>

            <router-link
              to="/contact"
              class="group flex items-center p-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </div>
              <span
                class="text-xl font-semibold text-white/90 group-hover:text-rayan-orange transition-colors duration-300"
              >
                {{ $t("nav.contact") }}
              </span>
            </router-link>

            <router-link
              to="/privacy-policy"
              class="group flex items-center p-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                  />
                </svg>
              </div>
              <span
                class="text-xl font-semibold text-white/90 group-hover:text-rayan-orange transition-colors duration-300"
              >
                {{ $t("privacy.title") }}
              </span>
            </router-link>
          </nav>

          <!-- Quick Access Section -->
          <div class="mt-12">
            <h4 class="font-bold text-2xl text-white mb-6 flex items-center">
              <svg
                class="w-6 h-6 mr-3 text-rayan-orange"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                <path
                  d="M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6"
                />
              </svg>
              {{ locale === "ar" ? "الوصول السريع" : "Quick Access" }}
            </h4>
            <div class="grid grid-cols-2 gap-3">
              <a
                href="/about#statistics"
                class="group flex items-center p-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div class="text-xl mr-2">📊</div>
                <span
                  class="text-sm font-semibold text-white/90 group-hover:text-rayan-orange"
                >
                  {{ locale === "ar" ? "الإحصائيات" : "Statistics" }}
                </span>
              </a>
              <a
                href="/about#goals"
                class="group flex items-center p-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div class="text-xl mr-2">🎯</div>
                <span
                  class="text-sm font-semibold text-white/90 group-hover:text-rayan-orange"
                >
                  {{ locale === "ar" ? "أهدافنا" : "Our Goals" }}
                </span>
              </a>
              <a
                href="/programs#programs"
                class="group flex items-center p-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div class="text-xl mr-2">📻</div>
                <span
                  class="text-sm font-semibold text-white/90 group-hover:text-rayan-orange"
                >
                  {{ locale === "ar" ? "البرامج" : "Programs" }}
                </span>
              </a>
              <a
                href="/programs#team"
                class="group flex items-center p-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div class="text-xl mr-2">👥</div>
                <span
                  class="text-sm font-semibold text-white/90 group-hover:text-rayan-orange"
                >
                  {{ locale === "ar" ? "الفريق" : "Team" }}
                </span>
              </a>
            </div>
          </div>

          <!-- Broadcasting Location -->
          <div
            class="mt-12 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 hover:border-rayan-orange/50 transition-all duration-500 hover:shadow-2xl group"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-all duration-500"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 class="text-2xl font-bold text-white">
                {{ locale === "en" ? "Broadcasting From" : "نبث من" }}
              </h4>
            </div>
            <a
              href="https://share.google/XATAK6syzX2yLxIml"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-start gap-3 text-lg text-white/90 font-semibold hover:text-rayan-orange transition-colors duration-300 group-hover:scale-105"
            >
              <svg
                class="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span>{{
                locale === "en" ? "As Suwayda, Syria" : "السويداء، سوريا"
              }}</span>
            </a>
            <p class="text-sm text-white/70 mt-2 ml-8">
              {{
                locale === "ar"
                  ? "انقر لعرض الموقع على الخريطة"
                  : "Click to view location on map"
              }}
            </p>
          </div>
        </div>
      </div>

      <!-- Enhanced Bottom Section -->
      <div class="relative mt-16 pt-8">
        <div
          class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div class="text-center md:text-left">
            <p class="text-white/80 text-sm font-medium">
              {{ $t("footer.rights", { year: currentYear }) }}
            </p>
          </div>

          <div class="flex items-center justify-center md:justify-end">
            <div class="text-rayan-orange text-sm font-medium">
              ✨
              {{ locale === "en" ? "Rayan FM Radio" : "إذاعة راديو الريان" }} ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useSiteStore } from "../../store/useSiteStore";

const { locale } = useI18n();
const siteStore = useSiteStore();

// Dynamic year for copyright
const currentYear = new Date().getFullYear();
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 255, 255, 0.1);
  }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom hover effects */
.group:hover .backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Enhanced social media hover effects */
.group:hover svg {
  filter: drop-shadow(0 0 8px currentColor);
}

/* Floating animation for decorative elements */
.absolute.top-0.left-0 {
  animation: float 6s ease-in-out infinite;
}

.absolute.top-0.right-0 {
  animation: float 8s ease-in-out infinite reverse;
}

.absolute.bottom-0.left-1\/3 {
  animation: float 10s ease-in-out infinite;
}

/* Enhanced Arabic text spacing and styling */
[dir="rtl"] {
  font-family: "Cairo", "Noto Sans Arabic", sans-serif;
}

[dir="rtl"] .space-y-3 > * + * {
  margin-top: 1.25rem;
  margin-right: 0.75rem;
}

[dir="rtl"] .space-y-4 > * + * {
  margin-top: 1.5rem;
  margin-right: 1rem;
}

[dir="rtl"] .space-y-5 > * + * {
  margin-top: 1.75rem;
  margin-right: 1.25rem;
}

[dir="rtl"] .space-y-6 > * + * {
  margin-top: 2.25rem;
  margin-right: 1.5rem;
}

/* Enhanced Arabic text rendering with better spacing */
[dir="rtl"] p,
[dir="rtl"] span,
[dir="rtl"] a,
[dir="rtl"] div {
  letter-spacing: 0.03em;
  word-spacing: 0.15em;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

[dir="rtl"] h1,
[dir="rtl"] h2,
[dir="rtl"] h3,
[dir="rtl"] h4 {
  letter-spacing: 0.06em;
  word-spacing: 0.2em;
  line-height: 1.6;
  margin-bottom: 1rem;
  margin-top: 0.75rem;
}

/* Arabic-specific grid and flex spacing */
[dir="rtl"] .grid {
  gap: 2.5rem;
}

[dir="rtl"] .flex {
  gap: 1rem;
}

[dir="rtl"] .flex-col {
  gap: 1.25rem;
}

/* Enhanced padding and margins for Arabic cards */
[dir="rtl"] .bg-white\/5,
[dir="rtl"] .bg-white\/10,
[dir="rtl"] .backdrop-blur-sm {
  padding: 1.25rem;
  margin: 0.5rem 0;
}

/* Better Arabic link styling */
[dir="rtl"] a {
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}

[dir="rtl"] a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-0.25rem);
}

/* Arabic navigation improvements */
[dir="rtl"] nav {
  padding-right: 1rem;
}

[dir="rtl"] nav a {
  margin: 0.5rem 0;
  padding-right: 1rem;
}

/* Copyright and bottom section Arabic styling */
[dir="rtl"] .text-center {
  text-align: right;
  padding-right: 1rem;
}

[dir="rtl"] .justify-between {
  justify-content: space-between;
  padding: 0 1.5rem;
}

/* Arabic container and grid enhancements */
.rtl-container {
  padding-left: 2rem;
  padding-right: 2rem;
  direction: rtl;
}

.rtl-grid {
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

@media (min-width: 768px) {
  .rtl-grid {
    gap: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .rtl-grid {
    gap: 4rem;
  }
}

/* Arabic section spacing */
[dir="rtl"] .lg\:col-span-2 {
  padding-left: 2rem;
  margin-bottom: 2rem;
}

/* Enhanced Arabic social media section */
[dir="rtl"] .flex.gap-3 {
  gap: 1.25rem;
  justify-content: flex-start;
  margin-top: 1rem;
}

/* Arabic quick links styling */
[dir="rtl"] nav.space-y-3 {
  padding-right: 1.5rem;
}

[dir="rtl"] nav.space-y-3 a {
  display: block;
  padding: 0.75rem 1rem;
  margin: 0.75rem 0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

[dir="rtl"] nav.space-y-3 a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateX(-0.5rem);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
