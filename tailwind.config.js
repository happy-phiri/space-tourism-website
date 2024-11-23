/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      backgroundImage: {
        "home-desktop-image":
          "url(/public/assets/home/background-home-desktop.jpg)",
        "home-tablet-image":
          "url(/public/assets/home/background-home-tablet.jpg)",
        "home-mobile-image":
          "url(/public/assets/home/background-home-mobile.jpg)",
        "destination-desktop-image":
          "url(/public/assets/destination/background-destination-desktop.jpg)",
        "destination-tablet-image":
          "url(/public/assets/destination/background-destination-tablet.jpg)",
        "destination-mobile-image":
          "url(/public/assets/destination/background-destination-mobile.jpg)",
        "crew-mobile-image":
          "url(/public/assets/crew/background-crew-mobile.jpg)",
        "crew-tablet-image":
          "url(/public/assets/crew/background-crew-tablet.jpg)",
        "crew-desktop-image":
          "url(/public/assets/crew/background-crew-desktop.jpg)",
        "technology-desktop-image":
          "url(/public/assets/technology/background-technology-desktop.jpg)",
        "technology-tablet-image":
          "url(/public/assets/technology/background-technology-tablet.jpg)",
        "technology-mobile-image":
          "url(/public/assets/technology/background-technology-mobile.jpg)",
      },
      colors: {
        "blue-900": "rgb(11, 13, 23)",
        "blue-300": "rgb(208, 214, 249)",
      },
      fontFamily: {
        "barlow-condensed-regular": ["Barlow Condensed", "sans-serif"],
        "bellefair-regular": ["Bellefair", "serif"],
      },
      fontSize: {
        "desktop-preset-1": "144px",
        "desktop-preset-2": "100px",
        "desktop-preset-3": "56px",
        "desktop-preset-4": "32px",
        "desktop-preset-5": "28px",
        "desktop-preset-6": "28px",
        "desktop-preset-7": "14px",
        "desktop-preset-8": "16px",
        "desktop-preset-9": "18px",
        "mobile-preset-1": "80px",
        "mobile-preset-2": "56px",
        "mobile-preset-3": "24px",
        "mobile-preset-4": "18px",
        "mobile-preset-6": "16px",
        "mobile-preset-8": "14px",
        "mobile-preset-9": "15px",
      },
      letterSpacing: {
        small: "2px",
        medium: "4px",
      },
    },
  },
  plugins: [],
};
