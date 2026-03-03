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
    // Find resume link by menu-text content
    const resumeMenuText = document.querySelector('.menu-text');
    if (resumeMenuText && resumeMenuText.textContent.trim() === 'Resume') {
      const resumeLink = resumeMenuText.closest('a');
      if (resumeLink) {
        resumeLink.href = lang === 'zh' ? './resume-zh.html' : './resume.html';
      }
    }
    
    // Find project link by menu-text content
    const menuTexts = document.querySelectorAll('.menu-text');
    menuTexts.forEach(menuText => {
      if (menuText.textContent.trim() === 'Project') {
        const projectLink = menuText.closest('a');
        if (projectLink) {
          projectLink.href = lang === 'zh' ? './project-zh.html' : './project.html';
        }
      }
    });
  }
  
  // Update navigation text based on selected language
  function updateNavigationText(lang) {
    // Find and update resume link text
    const menuTexts = document.querySelectorAll('.menu-text');
    menuTexts.forEach(menuText => {
      if (menuText.textContent.trim() === 'Resume' || menuText.textContent.trim() === '简历') {
        menuText.textContent = lang === 'zh' ? '简历' : 'Resume';
      } else if (menuText.textContent.trim() === 'Project' || menuText.textContent.trim() === '项目') {
        menuText.textContent = lang === 'zh' ? '项目' : 'Project';
      } else if (menuText.textContent.trim() === 'Language' || menuText.textContent.trim() === '语言') {
        menuText.textContent = lang === 'zh' ? '语言' : 'Language';
      }
    });
  }
  
  // Add click event listeners to language menu items
  function setupLanguageMenu() {
    // Find language dropdown items
    const dropdownTexts = document.querySelectorAll('.dropdown-text');
    dropdownTexts.forEach(dropdownText => {
      if (dropdownText.textContent.trim() === 'English') {
        const englishOption = dropdownText.closest('a');
        if (englishOption) {
          englishOption.addEventListener('click', function(e) {
            localStorage.setItem('preferredLanguage', 'en');
          });
        }
      } else if (dropdownText.textContent.trim() === '中文') {
        const chineseOption = dropdownText.closest('a');
        if (chineseOption) {
          chineseOption.addEventListener('click', function(e) {
            localStorage.setItem('preferredLanguage', 'zh');
          });
        }
      }
    });
  }
  
  // Initialize language switcher when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setDefaultLanguage();
      setupLanguageMenu();
    });
  } else {
    setDefaultLanguage();
    setupLanguageMenu();
  }
})();