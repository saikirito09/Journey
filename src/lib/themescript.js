export const themeScript = `
  (function() {
    function getThemePreference() {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('darkMode')) {
        return localStorage.getItem('darkMode') === 'true'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    if (getThemePreference()) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })();
`;
