// getPopup function take querySelectors to popup and open link objects, add events and return popup element
function getPopup (popupSelector, openLinkSelector) {
    const popup = document.querySelector(popupSelector)
    popup.open = function() {
        this.classList.add("show")
    }
    popup.close = function() {
        popup.classList.remove("show")
    }
    popup.addEventListener("click", function (e) {
        if (e.target !== this) return;
        popup.close()
    })
    if (openLinkSelector !== null) {
        popup.openLink = document.querySelector(openLinkSelector)
        popup.openLink.addEventListener("click", function() {
            popup.open()
        })
    }
    return popup
}
