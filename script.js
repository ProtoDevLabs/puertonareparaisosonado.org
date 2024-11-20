window.tailwind.config = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
};
 let currentIndex = 0;
 const images = document.querySelectorAll(".carousel-image");

 function showSlide(index) {
   images.forEach((img, i) => {
     img.classList.toggle("hidden", i !== index);
   });
 }

 function nextSlide() {
   currentIndex = (currentIndex + 1) % images.length;
   showSlide(currentIndex);
 }

 function previousSlide() {
   currentIndex = (currentIndex - 1 + images.length) % images.length;
   showSlide(currentIndex);
 }

 // Mostrar la primera imagen al cargar la página
 showSlide(currentIndex);

  const menuButton = document.getElementById("menu-button");
  const menuList = document.getElementById("menu-list");

  menuButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
  });