# VFull - Starter Kit Vue 3 + Vite

![VFullLogo](./public/vfull.png)

# Rayan Radio - إذاعة الریّان

<small>Vue 3 + TypeScript + Vite + Tailwind CSS + DaisyUI + i18n + RTL Support</small>

A comprehensive Syrian heritage radio station website built with Vue 3, featuring full Arabic language and RTL support. This platform provides live streaming, podcasts, and interactive content specializing in Syrian heritage, folk traditions, and Nabati poetry.

## 🎯 Features

- ✅ **Full Arabic language and RTL support**
- ✅ **Internationalization (i18n)** - Arabic/English
- ✅ **Advanced audio player** for live streaming and podcasts
- ✅ **Responsive design** with DaisyUI and Tailwind CSS
- ✅ **Optimized SEO** with Unhead
- ✅ **State management** with Pinia
- ✅ **TypeScript** for type-safe development
- ✅ **GitHub Pages** ready for deployment

## 🗂️ Project Structure

```ini
src/
├── components/          # Reusable components
│   ├── cards/          # Program and news cards
│   ├── nav/            # Navigation components
│   ├── podcast/        # Audio player
│   └── sections/       # Page sections
├── pages/              # Website pages
│   ├── News/           # News pages
│   ├── Programs/       # Programs pages
│   ├── Events/         # Events pages
│   ├── Blog/           # Blog pages
│   └── Podcast/        # Podcast pages
├── layouts/            # Page layouts
├── store/              # State management (Pinia)
├── i18n/               # Translation files
├── composables/        # Vue composables
├── types/              # TypeScript types
└── content/            # Data content
```

## 🚀 Development & Deployment

### System Requirements

- Node.js 18+
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📱 Available Pages

- **Home** (`/`) - Main page with featured programs and news
- **About** (`/about`) - Information about the radio station
- **Programs** (`/programs`) - Programs list and details
- **News** (`/news`) - Latest news and updates
- **Events** (`/events`) - Events and conferences
- **Blog** (`/blog`) - Blog articles
- **Podcast** (`/podcast`) - Podcast episodes
- **Editorial Standards** (`/editorial-standards`) - Content guidelines
- **Contact** (`/contact`) - Contact information

## 🎨 Design & Colors

The project uses an Islamic color scheme:

- **Islamic Green** (`#2d5a27`) - Primary color
- **Gold** (`#d4af37`) - Secondary color
- **Islamic Blue** (`#1e3a8a`) - Accent color

## 🔧 Configuration

### Content Customization

Site settings can be modified in:

- `src/store/useSiteStore.ts` - General settings
- `src/i18n/ar.json` & `src/i18n/en.json` - Text content

### Adding New Programs

- Add data to `src/content/programs/programs.json`
- Or use external API in `src/store/useProgramsStore.ts`

## 🌐 Live Demo

Website available at: [https://moneersh.github.io/RayanFMvue/](https://moneersh.github.io/RayanFMvue/)

## 🛠️ Technologies Used

### Main Dependencies

- [Vue 3.3.4](https://vuejs.org/) - Progressive JavaScript framework
- [Vue Router 4.2.2](https://router.vuejs.org/) - Official router for Vue.js
- [Vue i18n 9](https://vue-i18n.intlify.dev/) - Internationalization plugin
- [Pinia 2.1.4](https://pinia.vuejs.org/) - State management library
- [Unhead 1.1.29](https://github.com/unjs/unhead) - Document head management
- [VueUse 10.2.1](https://vueuse.org/) - Collection of Vue composition utilities
- [Axios 1.4.0](https://axios-http.com/) - Promise-based HTTP client

### Development Dependencies

- [TypeScript ~5.0.4](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite 4.3.9](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS 3.3.2](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI 3.2.1](https://daisyui.com/) - Component library for Tailwind CSS
- [Vitest 0.32.0](https://vitest.dev/) - Unit testing framework

## 📞 Contact

- **Email**: info@rayanradio.com
- **Phone**: +966501234567

## 📄 License

This project is licensed under the MIT License.

---

**Developed with ❤️ to serve Syrian heritage and cultural preservation**

## Features

- 💚[Vue](https://vuejs.org/)
- 🍍[Pinia](https://pinia.esm.dev/)
- 🔄[Vue Router](https://router.vuejs.org/)
- 👨🏽‍💻[VueUse](https://vueuse.org/)
- 🤯[UnHead](https://unhead.harlanzw.com/)
- 🤙🏽[Axios](https://axios-http.com/)
- 🚗[Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components)
- 🚘[Unplugin Auto Import](https://github.com/antfu/unplugin-auto-import)
- ⚡[Vite](https://vitejs.dev/)
- 🧪[Vitest](https://vitest.dev/guide/)
- 🧪[Vue Test Utils](https://next.vue-test-utils.vuejs.org/)
- 🤩[Tailwind CSS](https://tailwindcss.com/)
- 🎨[DaysiUI](https://daisyui.com/)
- 🆔[TypeScript](https://www.typescriptlang.org/)

### Quick Start

## 🔁 SPA Routing on GitHub Pages

If you open a deep link like `/about` or `/programs` directly you may get a 404 on GitHub Pages because it serves static files only. The deploy script copies `index.html` to `404.html` so GitHub Pages serves the app shell for unknown routes and Vue Router (history mode) can render the correct page. Nothing else is required—just run `npm run deploy`.

If you later migrate to Netlify/Vercel, replace this with their native redirect/rewrites (e.g. `_redirects` file).

```bash
# Clone the repo
git clone https://github.com/andrefelipe18/VFull.git my-app

# Enter the project directory
cd my-app

# Instal the dependencies
npm install

# Lift Vite's development server
npm run dev

# Go to http://localhost:5173
```
