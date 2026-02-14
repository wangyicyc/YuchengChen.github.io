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
    const resumeLink = document.getElementById('resume-link');
    const projectLink = document.getElementById('project-link');
    
    if (resumeLink) {
      resumeLink.href = lang === 'zh' ? 'resume-zh.qmd' : 'resume.qmd';
    }
    
    if (projectLink) {
      projectLink.href = lang === 'zh' ? 'project-zh.qmd' : 'project.qmd';
    }
  }
  
  // Update navigation text based on selected language
  function updateNavigationText(lang) {
    const resumeLink = document.getElementById('resume-link');
    const projectLink = document.getElementById('project-link');
    const languageLink = document.getElementById('language-link');
    const englishOption = document.getElementById('english-option');
    const chineseOption = document.getElementById('chinese-option');
    
    if (resumeLink) {
      resumeLink.textContent = lang === 'zh' ? '简历' : 'Resume';
    }
    
    if (projectLink) {
      projectLink.textContent = lang === 'zh' ? '项目' : 'Project';
    }
    
    if (languageLink) {
      languageLink.textContent = lang === 'zh' ? '语言' : 'Language';
    }
    
    if (englishOption) {
      englishOption.textContent = 'English';
    }
    
    if (chineseOption) {
      chineseOption.textContent = '中文';
    }
  }
  
  // Add click event listeners to language menu items
  function setupLanguageMenu() {
    const englishOption = document.getElementById('english-option');
    const chineseOption = document.getElementById('chinese-option');
    
    if (englishOption) {
      englishOption.addEventListener('click', function(e) {
        localStorage.setItem('preferredLanguage', 'en');
      });
    }
    
    if (chineseOption) {
      chineseOption.addEventListener('click', function(e) {
        localStorage.setItem('preferredLanguage', 'zh');
      });
    }
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