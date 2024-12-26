
    function showModal(id) {
        const modal = document.getElementById(id);
        modal.style.display = 'block';
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        modal.style.display = 'none';
    }

    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

