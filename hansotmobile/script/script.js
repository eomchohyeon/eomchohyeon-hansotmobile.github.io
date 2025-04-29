
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // 사이드 메뉴 서브메뉴 토글
  const sideMenuItems = document.querySelectorAll('.side-menu-item > a');
  sideMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
});




const images = document.querySelectorAll(".slider img");
      let currentIndex = 0;
      let slideInterval;
      const intervalTime = 3000; // 3초

      function updateSlide() {
        images.forEach((img, i) => {
          img.classList.remove("left", "center", "right", "hidden");

          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          const nextIndex = (currentIndex + 1) % images.length;

          if (i === prevIndex) {
            img.classList.add("left");
          } else if (i === currentIndex) {
            img.classList.add("center");
          } else if (i === nextIndex) {
            img.classList.add("right");
          } else {
            img.classList.add("hidden");
          }
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
        resetInterval();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
        resetInterval();
      }

      function startInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }

      function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
      }

      // 초기 슬라이드 설정 및 자동 시작
      updateSlide();
      startInterval();


      // 팝업

      // popup.js
      window.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".popup-out").addEventListener("click", function () {
          document.getElementById("modal").style.display = "none";
        });
      });