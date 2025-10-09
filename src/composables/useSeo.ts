import { useHead } from "@unhead/vue";
import { computed } from "vue";
import { getImagePath } from "../utils/assets";
import { useI18n } from "vue-i18n";

interface SeoOptions {
  title?: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  keywordsEn?: string[];
}

export function useSeo(options: SeoOptions = {}) {
  const { locale } = useI18n();

  const isArabic = computed(() => locale.value === "ar");
  const baseUrl = "https://rayanfm.net";

  const seoTitle = computed(() => {
    const baseTitle = isArabic.value ? "إذاعة الریّان" : "Rayan Radio";
    const currentTitle = isArabic.value
      ? options.title
      : options.titleEn || options.title;
    return currentTitle ? `${currentTitle} | ${baseTitle}` : baseTitle;
  });

  const seoDescription = computed(() => {
    const defaultDesc = isArabic.value
      ? "أول راديو خاص سوري متخصص في إحياء التراث والموروث الشعبي ونشر الشعر النبطي من السويداء"
      : "Syria's first private radio specializing in heritage revival, folk traditions and Nabati poetry from As-Suwayda";

    return isArabic.value
      ? options.description || defaultDesc
      : options.descriptionEn || options.description || defaultDesc;
  });

  const seoKeywords = computed(() => {
    const defaultKeywords = isArabic.value
      ? [
          "إذاعة الريان",
          "راديو سوري",
          "تراث سوري",
          "شعر نبطي",
          "موروث شعبي",
          "السويداء",
          "جبل العرب",
          "حوران",
          "بادية الشام",
          "إذاعة تراثية",
          "برامج ثقافية",
          "FM 90.2",
        ]
      : [
          "Rayan Radio",
          "Syrian Radio",
          "Syrian Heritage",
          "Nabati Poetry",
          "Folk Traditions",
          "As-Suwayda",
          "Jabal al-Arab",
          "Hauran",
          "Heritage Radio",
          "Cultural Programs",
          "FM 90.2",
        ];

    const currentKeywords = isArabic.value
      ? options.keywords || defaultKeywords
      : options.keywordsEn || options.keywords || defaultKeywords;

    return currentKeywords.join(", ");
  });

  const seoImage = computed(
    () => options.image || `${baseUrl}${getImagePath("images/og-image.jpg")}`
  );

  const seoUrl = computed(
    () =>
      options.url ||
      (typeof window !== "undefined" ? window.location.href : baseUrl)
  );

  useHead({
    title: seoTitle.value,
    meta: [
      { name: "description", content: seoDescription },
      { name: "keywords", content: seoKeywords },
      { name: "author", content: "إذاعة الریّان - Rayan Radio" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: isArabic.value ? "Arabic" : "English" },
      { name: "geo.region", content: "SY-SW" },
      { name: "geo.placename", content: "As-Suwayda, Syria" },

      // Open Graph
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { property: "og:image", content: seoImage },
      { property: "og:url", content: seoUrl },
      { property: "og:type", content: options.type || "website" },
      { property: "og:locale", content: isArabic.value ? "ar_SY" : "en_US" },
      { property: "og:site_name", content: "إذاعة الریّان - Rayan Radio" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
      { name: "twitter:image", content: seoImage },
      { name: "twitter:site", content: "@RayanRadio" },

      // Additional meta
      { name: "theme-color", content: "#F97316" },
    ],

    link: [
      { rel: "canonical", href: seoUrl },
      { rel: "alternate", hreflang: "ar", href: `${baseUrl}/?lang=ar` },
      { rel: "alternate", hreflang: "en", href: `${baseUrl}/?lang=en` },
      { rel: "alternate", hreflang: "x-default", href: baseUrl },
    ],
  });

  return {
    setSeoTitle: (title: string) => (options.title = title),
    setSeoDescription: (description: string) =>
      (options.description = description),
    setSeoImage: (image: string) => (options.image = image),
  };
}
