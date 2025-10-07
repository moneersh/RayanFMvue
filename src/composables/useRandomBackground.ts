import { ref, onMounted } from 'vue'
import { getAssetPath } from '../utils/assets'

// List of background images available
const backgroundImages = [
  'backgroundMic.webp',
  'mixer.webp', 
  'mixer2.webp',
  'onair.webp',
  'wvud-radio-equipement.webp'
]

export function useRandomBackground() {
  const currentBackground = ref('')
  
  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length)
    return getAssetPath(`images/background/${backgroundImages[randomIndex]}`)
  }
  
  const setRandomBackground = () => {
    currentBackground.value = getRandomBackground()
  }
  
  // Set initial random background on mount
  onMounted(() => {
    setRandomBackground()
  })
  
  return {
    currentBackground,
    setRandomBackground,
    getRandomBackground,
    backgroundImages
  }
}

// Global utility function for getting random background
export const getRandomBackgroundImage = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length)
  return getAssetPath(`images/background/${backgroundImages[randomIndex]}`)
}