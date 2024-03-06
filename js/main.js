const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1. Check darkMode sistem settings

if (window.matchMedia && window.matchMedia('()prefers-color-cheme: daek').matches) {
  btnDarkMode.classList.add('dark-mode-btn__active')
  document.body.classList.add('dark')
}

// Check localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn__active')
  document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-btn__active')
  document.body.classList.remove('dark')
}

// If sistem settings change

window.matchMedia('(prefers-color-sheme: daek)').addEventListener('change', (event) => {
  const newColorSheme = event.matches ? 'dark' : 'light'

  if (newColorSheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'dark')
  } else {
    btnDarkMode.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark')
  }
})

// Night_mode on btnPush

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn__active')
  const isDark = document.body.classList.toggle('dark')

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light')
  }
}
