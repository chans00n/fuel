import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Rely on CSS variables from globals.css for primary, secondary, accent, etc.
        // Example: primary: 'hsl(var(--primary))'
        // Shadcn/ui components will use these variables by default.
        // We can add specific one-off custom colors here if absolutely needed,
        // but for the general theme, globals.css is the source of truth.
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Potentially add keyframes for animations if not covered by a plugin
      // keyframes: {
      //   "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
      //   "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [
    // require("tailwindcss-animate") // This might be needed if not auto-configured by Next.js/Shadcn setup with Tailwind v4
  ],
}
export default config 