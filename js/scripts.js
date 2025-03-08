





// stars

document.addEventListener('DOMContentLoaded', () => {
  const stars = [
    '#star-1',
    '#star-2',
    '#star-3',
    '#star-4',
    '#star-5',
    '#star-6',
    '#star-7'
  ];

  // Create individual timelines for each star
  stars.forEach((star, index) => {
    const twinkleTL = gsap.timeline({
      repeat: -1,
      delay: index * 0.7, 
    });

    // Smooth twinkling effect
    twinkleTL
      .to(star, {
        scale: 1.15,
        opacity: 1,
        fill: "#FFE5A9",
        duration: 1.5,
        ease: "sine.inOut"
      })
      .to(star, {
        scale: 1,
        opacity: 0.7,
        fill: "#C7AF76",
        duration: 1.5,
        ease: "sine.inOut"
      })
      .to(star, {
        scale: 1,
        opacity: 0.85,
        fill: "#DBC088",
        duration: 1.2,
        ease: "sine.inOut"
      });
  });

  // Set initial state for all stars
  gsap.set(stars, {
    transformOrigin: "center center",
    opacity: 0.85,
    scale: 1
  });
});



gsap.set("#blue, #pink, #outline, #string, #shine", { y: 100, opacity: 0 });

// Animate everything together
gsap.to("#blue, #pink, #outline, #string, #shine", {
  y: 0,
  opacity: 1,
  duration: 2.5,
  ease: "power2.out",
  onComplete: () => {
    // Floating effect
    gsap.to("#blue, #pink, #outline, #string, #shine", {
      y: "-=10",
      opacity: 0.8,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }
});

// Baloon color change
document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#FF6347", "#FFD700", "#6A5ACD", "#40E0D0", "#FF69B4"];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const balloons = document.querySelectorAll(".color");

    balloons.forEach(balloon => {
        balloon.setAttribute("fill", getRandomColor());
    });
});
