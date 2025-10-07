<template>
  <!-- Hero Section -->
  <section class="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
    <div class="hero-content text-center max-w-4xl">
      <div>
        <h1 class="text-5xl font-bold mb-6">{{ $t('about.heroTitle') }}</h1>
        <p class="text-lg leading-relaxed mb-8">
          {{ $t('about.heroDescription1') }}
        </p>
        <p class="text-lg leading-relaxed">
          {{ $t('about.heroDescription2') }}
        </p>
      </div>
    </div>
  </section>

    <!-- Enhanced Statistics Section -->
    <StatisticsSection />

    <!-- Mechanisms Section -->
    <section class="py-16 bg-gradient-to-br from-base-300 via-base-200 to-base-100 relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Enhanced Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {{ $t('about.mechanisms.title') }}
            </h2>
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div class="w-3 h-3 bg-accent rounded-full mx-2"></div>
              <div class="w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
            </div>
            <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            </p>
          </div>

          <!-- Mechanisms Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Mechanism 1 -->
            <div class="group transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/40 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl shadow-lg mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-300">
                      {{ $t('about.mechanisms.item1') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mechanism 2 -->
            <div class="group transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-secondary/20 hover:border-secondary/40 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl shadow-lg mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-300">
                      {{ $t('about.mechanisms.item2') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mechanism 3 -->
            <div class="group transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-accent/20 hover:border-accent/40 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl shadow-lg mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-300">
                      {{ $t('about.mechanisms.item3') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mechanism 4 -->
            <div class="group transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/40 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl shadow-lg mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-300">
                      {{ $t('about.mechanisms.item4') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mechanism 5 - Spanning 2 columns -->
            <div class="group transform transition-all duration-500 hover:scale-105 lg:col-span-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-secondary/20 hover:border-secondary/40 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex flex-col md:flex-row items-start gap-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-300">
                        {{ $t('about.mechanisms.item5') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-16">
          </div>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="py-20 bg-gradient-to-br from-base-100 via-primary/5 to-secondary/5 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-16 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-32 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-8 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-7xl mx-auto">
          <!-- Enhanced Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 class="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {{ $t('about.goals.title') }}
            </h2>
            <div class="flex items-center justify-center mb-8">
              <div class="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div class="w-4 h-4 bg-accent rounded-full mx-3 animate-pulse"></div>
              <div class="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
            </div>
            <p class="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            </p>
          </div>

          <!-- Goals Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <!-- Goal 1: Heritage -->
            <div class="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-primary/30 hover:border-primary/60 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center mb-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl group-hover:rotate-12 transition-all duration-500">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <div class="w-12 h-0.5 bg-primary/50 group-hover:bg-primary transition-colors duration-500"></div>
                    </div>
                  </div>
                  <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-500">
                    {{ $t('about.goals.item1') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Goal 2: Service Issues -->
            <div class="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-secondary/30 hover:border-secondary/60 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center mb-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-xl group-hover:rotate-12 transition-all duration-500">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <div class="w-12 h-0.5 bg-secondary/50 group-hover:bg-secondary transition-colors duration-500"></div>
                    </div>
                  </div>
                  <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-500">
                    {{ $t('about.goals.item2') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Goal 3: Dialogue Culture -->
            <div class="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-accent/30 hover:border-accent/60 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center mb-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-xl group-hover:rotate-12 transition-all duration-500">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <div class="w-12 h-0.5 bg-accent/50 group-hover:bg-accent transition-colors duration-500"></div>
                    </div>
                  </div>
                  <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-500">
                    {{ $t('about.goals.item3') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Goal 4: Listener Focus -->
            <div class="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-primary/30 hover:border-primary/60 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center mb-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl group-hover:rotate-12 transition-all duration-500">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <div class="w-12 h-0.5 bg-primary/50 group-hover:bg-primary transition-colors duration-500"></div>
                    </div>
                  </div>
                  <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-500">
                    {{ $t('about.goals.item4') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Goal 5: Media Role - Spanning 2 columns -->
            <div class="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 lg:col-span-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-secondary/30 hover:border-secondary/60 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex flex-col md:flex-row items-start gap-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-xl group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="w-16 h-0.5 bg-secondary/50 group-hover:bg-secondary transition-colors duration-500 mb-4"></div>
                      <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-500">
                        {{ $t('about.goals.item5') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Goal 6: Local Issues - Single column to balance the layout -->
            <div class="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div class="card bg-gradient-to-br from-base-100 to-base-100/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-accent/30 hover:border-accent/60 h-full relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div class="card-body p-8 relative z-10">
                  <div class="flex items-center mb-6">
                    <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-xl group-hover:rotate-12 transition-all duration-500">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <div class="w-12 h-0.5 bg-accent/50 group-hover:bg-accent transition-colors duration-500"></div>
                    </div>
                  </div>
                  <p class="text-base leading-relaxed text-base-content/90 group-hover:text-base-content transition-colors duration-500">
                    {{ $t('about.goals.item6') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

 
        </div>
      </div>
    </section>

  

    <!-- Editorial Standards Section -->
    <section class="py-16 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <div class="mb-12">
            <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {{ $t('about.editorialStandards.title') }}
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p class="text-lg leading-relaxed text-base-content/80 max-w-3xl mx-auto">
              {{ $t('about.editorialStandards.description') }}
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {{ $t('about.editorialStandards.accuracy') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-secondary/20 hover:border-secondary/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                    {{ $t('about.editorialStandards.neutrality') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-accent/20 hover:border-accent/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                    {{ $t('about.editorialStandards.credibility') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {{ $t('about.editorialStandards.objectivity') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-secondary/20 hover:border-secondary/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                    {{ $t('about.editorialStandards.privacy') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-accent/20 hover:border-accent/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                    {{ $t('about.editorialStandards.transparency') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {{ $t('about.editorialStandards.integrity') }}
                  </h3>
                </div>
              </div>
            </div>

            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="card bg-base-100 shadow-lg hover:shadow-xl border border-secondary/20 hover:border-secondary/40 h-full">
                <div class="card-body p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                    {{ $t('about.editorialStandards.responsibility') }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script setup lang="ts">
import StatisticsSection from '@/components/about/StatisticsSection.vue'
import { useSeo } from '@/composables/useSeo'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useSeo({
  title: t('about.title'),
  description: t('about.heroDescription1')
})
</script>