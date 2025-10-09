// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///mnt/c/Users/monee/work/RayanFMvue/node_modules/vite/dist/node/index.js";
import vue from "file:///mnt/c/Users/monee/work/RayanFMvue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///mnt/c/Users/monee/work/RayanFMvue/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///mnt/c/Users/monee/work/RayanFMvue/node_modules/unplugin-vue-components/dist/vite.mjs";
import { unheadVueComposablesImports } from "file:///mnt/c/Users/monee/work/RayanFMvue/node_modules/@unhead/vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///mnt/c/Users/monee/work/RayanFMvue/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/RayanFMvue/",
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", unheadVueComposablesImports, "pinia"],
      dts: "./node_modules/.auto-imports-type/auto-imports.d.ts"
    }),
    Components({
      dts: "./node_modules/.auto-imports-type/components.d.ts"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvbW9uZWUvd29yay9SYXlhbkZNdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvbW9uZWUvd29yay9SYXlhbkZNdnVlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9tb25lZS93b3JrL1JheWFuRk12dWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgdW5oZWFkVnVlQ29tcG9zYWJsZXNJbXBvcnRzIH0gZnJvbSAnQHVuaGVhZC92dWUnXG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvUmF5YW5GTXZ1ZS8nLFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQXV0b0ltcG9ydCh7IFxuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsIHVuaGVhZFZ1ZUNvbXBvc2FibGVzSW1wb3J0cywgJ3BpbmlhJ10sXG4gICAgICAgZHRzOiAnLi9ub2RlX21vZHVsZXMvLmF1dG8taW1wb3J0cy10eXBlL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHsgXG4gICAgICBkdHM6ICcuL25vZGVfbW9kdWxlcy8uYXV0by1pbXBvcnRzLXR5cGUvY29tcG9uZW50cy5kLnRzJyxcbiAgICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVMsZUFBZSxXQUFXO0FBQzNULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG1DQUFtQztBQUxnSSxJQUFNLDJDQUEyQztBQVM3TixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLDZCQUE2QixPQUFPO0FBQUEsTUFDbEUsS0FBSztBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLElBQ04sQ0FBQztBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
