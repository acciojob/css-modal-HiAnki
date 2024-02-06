//your JS code here. If required.

    let popup = document.getElementById("modal");
    
    function openPopup() {
        popup.classList.add("open-popup");
        document.addEventListener('click', clickOutsidePopup);
    }
    function closePopup() {
        popup.classList.remove("open-popup");
        document.removeEventListener('click', clickOutsidePopup);
    }
    function clickOutsidePopup(event) {
        if (popup.contains(event.target)) {
            closePopup();
        }
    }
