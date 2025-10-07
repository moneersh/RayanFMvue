// Test script to verify background images functionality
// You can run this in browser console to test the random background picker

import { useRandomBackground } from '@/composables/useRandomBackground'

// Test the random background functionality
export function testRandomBackground() {
  const { getRandomBackground, backgroundImages } = useRandomBackground()
  
  // Test getting 5 random backgrounds
  const results = []
  for (let i = 0; i < 5; i++) {
    const randomBg = getRandomBackground()
    results.push(`Pick ${i + 1}: ${randomBg}`)
  }
  
  return {
    success: true,
    backgroundImages,
    testResults: results
  }
}

// For testing in console
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).testRandomBackground = testRandomBackground
}