const html = document.documentElement;
let localStorageKeyName = 'keren.data.theme';
let data_theme = localStorage.getItem(localStorageKeyName);

if (data_theme !== null) {
  html.setAttribute('data-theme', data_theme);
  defaultChecked();

} else {
  html.setAttribute('data-theme', 'dark');
  defaultChecked();
}


function setTheme(element) {
  if (element.checked) {
    localStorage.setItem(localStorageKeyName, 'dark');
    html.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem(localStorageKeyName, 'light');
    html.setAttribute('data-theme', 'light');
  }
}

function defaultChecked() {

  const theme_controller = document.querySelectorAll('.theme-controller');
  theme_controller.forEach(element => {
    if (data_theme === 'dark' || html.getAttribute('data-theme') === 'dark') {
      element.checked = true;
    } else {
      element.checked = false;
    }
  });
}