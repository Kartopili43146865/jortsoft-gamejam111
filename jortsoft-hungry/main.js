const checkboxTheme = document.querySelector('.theme-checkbox');

// Apply the theme preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const themePreference = localStorage.getItem('themePreference');
  if (themePreference === 'dark') {
    applyDarkTheme();
    checkboxTheme.checked = true;
  }
});

// Add event listener to the theme checkbox
checkboxTheme.addEventListener('change', function() {
  if (checkboxTheme.checked) {
    applyDarkTheme();
    localStorage.setItem('themePreference', 'dark');
  } else {
    removeDarkTheme();
    localStorage.removeItem('themePreference');
  }
});

function applyDarkTheme() {
  document.body.classList.add('black');
  const allElements = document.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.add('dark');
  }
}

function removeDarkTheme() {
  document.body.classList.remove('black');
  const allElements = document.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove('dark');
  }
}

function fetchAndLogBodyContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const bodyContent = doc.querySelectorAll('.white');

      for (let i = 0; i < bodyContent.length; i++) {
      }
    })
    .catch(error => console.error(error));
}

// Call the function for each page you want to retrieve the body content from
fetchAndLogBodyContent('home.html');
fetchAndLogBodyContent('play.html');
fetchAndLogBodyContent('setting.html');
fetchAndLogBodyContent('tutorial.html');



