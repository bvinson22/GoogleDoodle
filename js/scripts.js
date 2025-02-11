

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
        delay: index * 0.7, // Stagger the start time of each star's timeline
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
  
  // animate letters
  
  gsap.from('.letters', {
    
    y : -500, 
    stagger : 1, 
    ease : 'custom(0.5, 0.1, 0.25, 1)'
  });
