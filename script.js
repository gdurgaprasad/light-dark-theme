const toggleSwitch = document.querySelector('input[type="checkbox"');
const modeSpan = document.getElementById('toggle-icon')


function switchTheme(event) {
    const isChecked = event.target.checked
    if (isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        modeSpan.innerHTML = `<span class="toggle-text">Dark Mode
        <i class="fas fa-sun"></i>
        </span>`
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        modeSpan.innerHTML = `<span class="toggle-text">Light Mode
        <i class="fas fa-moon"></i>
        </span>`
    }

}

toggleSwitch.addEventListener('change', switchTheme);