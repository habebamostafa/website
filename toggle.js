function toggleMenu(trigger) {
    trigger.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  }
  document.addEventListener("DOMContentLoaded", function () {
      const menuTrigger = document.querySelector('.menu-trigger'); // Menu trigger for mobile view
      const nav = document.querySelector('.nav');
      const submenuLinks = document.querySelectorAll('.submenu-link');

      // Toggle the main menu
      menuTrigger.addEventListener('click', function () {
          nav.classList.toggle('open');
      });

      // Toggle submenu items
      submenuLinks.forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault(); // Prevent default behavior
              const parent = link.parentElement; // Get parent .submenu
              parent.classList.toggle('open'); // Toggle the 'open' class
          });
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const submenuLinks = document.querySelectorAll('.submenu-link'); // Get all submenu links

    // Add event listener to each submenu link
    submenuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const parentSubmenu = link.closest('.submenu'); // Get the parent submenu
        parentSubmenu.classList.toggle('active'); // Toggle the active class to show/hide the submenu
      });
    });
    
    const menuTrigger = document.querySelector('.menu-trigger'); // Get the hamburger menu trigger
    const nav = document.querySelector('.nav');
  });