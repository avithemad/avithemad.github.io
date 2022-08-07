const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener("click", toggleTheme);

const themeIcon = document.getElementById('theme-icon');

const constants = {
    LIGHT_THEME: 'light',
    DARK_THEME: 'dark',
    THEME_ATTRIBUTE: 'data-theme'
}
loadTheme();


function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === constants.LIGHT_THEME || currentTheme === null) {
        setTheme(constants.DARK_THEME);
        localStorage.setItem(constants.THEME_ATTRIBUTE, constants.DARK_THEME);
    } else {
        setTheme(constants.LIGHT_THEME);
        localStorage.setItem(constants.THEME_ATTRIBUTE, constants.LIGHT_THEME);
    }
}

function loadTheme() {
    theme = localStorage.getItem(constants.THEME_ATTRIBUTE);
    if (theme === constants.DARK_THEME) {
        setTheme(constants.DARK_THEME);
    } else {
        setTheme(constants.LIGHT_THEME);
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute(constants.THEME_ATTRIBUTE, theme);
    themeIcon.innerHTML = `${theme === constants.DARK_THEME ? constants.LIGHT_THEME : constants.DARK_THEME}_mode`;
}