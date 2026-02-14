// Language switcher functionality
(function() {
  // Set the default language based on the current page
  function setDefaultLanguage() {
    const currentPath = window.location.pathname;
    let currentLang = 'en'; // Default to English
    
    // Check if current page is Chinese
    if (currentPath.includes('-zh.')) {
      currentLang = 'zh';
    }
    
    localStorage.setItem('preferredLanguage', currentLang);
    updateNavigationLinks(currentLang);
    updateNavigationText(currentLang);
  }
  
  // Update navigation links based on selected language
  function updateNavigationLinks(lang) {
    // Find all menu text elements
    const menuTexts = document.querySelectorAll('.menu-text');
    menuTexts.forEach(menuText => {
      const textContent = menuText.textContent.trim();
      const link = menuText.closest('a');
      
      if (link) {
        if (textContent === 'Resume' || textContent === '简历') {
          link.href = lang === 'zh' ? './resume-zh.html' : './resume.html';
        } else if (textContent === 'Project' || textContent === '项目') {
          link.href = lang === 'zh' ? './project-zh.html' : './project.html';
        }
      }
    });
  }
  
  // Update navigation text based on selected language
  function updateNavigationText(lang) {
    // Find and update all menu text elements
    const menuTexts = document.querySelectorAll('.menu-text');
    menuTexts.forEach(menuText => {
      const textContent = menuText.textContent.trim();
      
      if (textContent === 'Resume' || textContent === '简历') {
        menuText.textContent = lang === 'zh' ? '简历' : 'Resume';
      } else if (textContent === 'Project' || textContent === '项目') {
        menuText.textContent = lang === 'zh' ? '项目' : 'Project';
      } else if (textContent === 'Language' || textContent === '语言') {
        menuText.textContent = lang === 'zh' ? '语言' : 'Language';
      }
    });
  }
  
  // Add click event listeners to language menu items
  function setupLanguageMenu() {
    // Find language dropdown items
    const dropdownTexts = document.querySelectorAll('.dropdown-text');
    dropdownTexts.forEach(dropdownText => {
      const textContent = dropdownText.textContent.trim();
      const optionLink = dropdownText.closest('a');
      
      if (optionLink) {
        if (textContent === 'English') {
          optionLink.addEventListener('click', function(e) {
            localStorage.setItem('preferredLanguage', 'en');
          });
        } else if (textContent === '中文') {
          optionLink.addEventListener('click', function(e) {
            localStorage.setItem('preferredLanguage', 'zh');
          });
        }
      }
    });
  }
  
  // Initialize language switcher when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Wait a bit for the DOM to fully load
      setTimeout(() => {
        setDefaultLanguage();
        setupLanguageMenu();
      }, 100);
    });
  } else {
    // Wait a bit for the DOM to fully load
    setTimeout(() => {
      setDefaultLanguage();
      setupLanguageMenu();
    }, 100);
  }
})();