/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
	theme: {
		extends: {
			color: {
				rainmaker: {
					100: "#EDEEF0",
					200: "#DADDE1",
					300: "#B5BBC2",
					400: "#9198A4",
					500: "#6C7685",
					600: "#475467",
					700: "#394352",
					800: "#2B323E",
					900: "#1C2229",
					1000: "#0E1115"
				}
			}
		}
	}
}