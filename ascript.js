const isLoggedIn = false;

const modal = document.getElementById('requestModal');
const form = document.getElementById('requestForm');
const medicineNameInput = document.getElementById('medicineName');
const submitButton = form.querySelector('.btn-submit');

/**
 * @param {string} medicineName 
 */
function openModal(medicineName) {
    if (modal) {
        medicineNameInput.value = medicineName;
        modal.classList.add('show');
    }
}


function closeModal() {
    if (modal) {
        modal.classList.remove('show');
    }
}
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!isLoggedIn) {
        alert('You must be logged in to submit a request.');
        return;
    }

    alert('Request submitted successfully! (This is a demo)');
    closeModal();
    form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn) {
        submitButton.textContent = 'Submit Request';
    } else {
        submitButton.textContent = 'Login to Submit Request';
    }
});

