import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'item-1': "linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.315)), url('https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg')",
				'item-2': "linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.315)), url('https://cdn.pixabay.com/photo/2022/03/15/18/06/portfolio-7070886_1280.png')",
				'item-3': "linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.315)), url('https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg')",
				'item-4': "linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.315)), url('https://cdn.pixabay.com/photo/2021/09/15/15/49/resume-6627200_1280.jpg')",
				'item-5': "linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.315)), url('https://cdn.pixabay.com/photo/2021/12/28/01/07/website-6898411_1280.png')",
				'item-6': "linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.315)), url('https://cdn.pixabay.com/photo/2022/02/21/06/11/tablet-7025855_1280.jpg')",
			},
  		colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				darkblue: '#170550',
				purple: '#31065a',
				lowpurple: '#ae5bfb7b',
				inputcolor: '#43366a',
				btncolor: '#461959',
				orange: '#f86f03',
				'custom-black-1': 'rgba(0, 0, 0, 0.658)',
				'custom-black-2': 'rgba(0, 0, 0, 0.315)',
				'bgnav':'#160550d9',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
