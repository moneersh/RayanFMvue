<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="text-center max-w-4xl mx-auto px-4">
      <h1 class="text-2xl font-bold mb-8">المعايير التحريرية</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">الصدق والأمانة</h2>
            <p>نلتزم بنقل الحقائق كما هي دون تحريف أو تضليل</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">الموضوعية</h2>
            <p>نحرص على تقديم وجهات النظر المختلفة بعدالة وتوازن</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">احترام الخصوصية</h2>
            <p>نحترم خصوصية الأفراد وحقوقهم الشخصية</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">المسؤولية الاجتماعية</h2>
            <p>نساهم في بناء مجتمع أفضل من خلال محتوانا الهادف</p>
          </div>
        </div>
      </div>
      <router-link to="/" class="btn btn-primary">العودة للرئيسية</router-link>
    </div>
  </div>
</template>