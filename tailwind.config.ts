import type { Config } from 'tailwindcss';

// @ts-expect-error package doesnt include types
import layerstack from '@layerstack/tailwind/plugin';
import themes from './themes.json';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/svelte-ux/**/*.{svelte,js}'
  ],

  // See customization docs: https://svelte-ux.techniq.dev/customization
  ux: {
    themes: themes
  },

  plugins: [
    layerstack,  // uses hsl() color space by default. To use oklch(), use: layerstack({ colorSpace: 'oklch' }),
  ]
} satisfies Config;