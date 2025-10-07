/**
 * Get the correct asset path for deployment
 * Handles both development and GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Get base URL from import.meta.env
  const baseUrl = import.meta.env.BASE_URL || '/'
  
  return `${baseUrl}${cleanPath}`
}

/**
 * Get image path specifically
 */
export function getImagePath(imagePath: string): string {
  return getAssetPath(imagePath)
}