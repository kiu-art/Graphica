
function showContent(contentId, clickedButton) {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    const activeSection = document.getElementById(contentId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const defaultActiveButton = document.querySelector('.nav-btn.active');
    showContent('profile', defaultActiveButton);
});

