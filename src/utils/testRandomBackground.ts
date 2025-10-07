// Test script to verify background images functionality
// You can run this in browser console to test the random background picker

import { useRandomBackground } from '@/composables/useRandomBackground'

// Test the random background functionality
export function testRandomBackground() {
  console.log('Testing Random Background Functionality...')
  
  const { getRandomBackground, backgroundImages } = useRandomBackground()
  
  console.log('Available background images:', backgroundImages)
  
  // Test getting 5 random backgrounds
  console.log('Testing 5 random picks:')
  for (let i = 0; i < 5; i++) {
    const randomBg = getRandomBackground()
    console.log(`Pick ${i + 1}: ${randomBg}`)
  }
  
  return true
}

// For testing in console
if (typeof window !== 'undefined') {
  (window as any).testRandomBackground = testRandomBackground
}