const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// $(document).ready(function () {
//     $(".customer-logos").slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1500,
//       arrows: false,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 3,
//           },
//         },
//       ],
//     });
//   });

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    // Simulating sending data to a server
    setTimeout(function() {
      document.getElementById('responseMsg').textContent = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById('contactForm').reset();
    }, 1000);
  });

  