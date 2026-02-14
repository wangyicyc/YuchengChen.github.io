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
  }
  
  // Update navigation links based on selected language
  function updateNavigationLinks(lang) {
    const resumeLink = document.querySelector('a[href*="resume"]');
    const projectLink = document.querySelector('a[href*="project"]');
    
    if (resumeLink) {
      resumeLink.href = lang === 'zh' ? 'resume-zh.qmd' : 'resume.qmd';
    }
    
    if (projectLink) {
      projectLink.href = lang === 'zh' ? 'project-zh.qmd' : 'project.qmd';
    }
  }
  
  // Add click event listeners to language menu items
  function setupLanguageMenu() {
    const languageMenuItems = document.querySelectorAll('.navbar-nav .dropdown-menu a');
    
    languageMenuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        const lang = this.textContent.trim() === '中文' ? 'zh' : 'en';
        localStorage.setItem('preferredLanguage', lang);
        // The link will navigate to the selected language version
      });
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