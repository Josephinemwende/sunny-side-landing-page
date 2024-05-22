const navBar = document.getElementById('nav-bar');
const handleClick = () => {
    if (navBar.style.display === 'none') {
        navBar.style.display = 'block';
    } else {
        navBar.style.display = 'none';
    }
}