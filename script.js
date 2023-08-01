//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const clearButton = document.getElementById("clear-button");
  const messageContent = document.getElementById("message-content");
  const durationInput = document.getElementById("duration");
  const cancelableCheckbox = document.getElementById("cancelable");
  const successRadio = document.getElementById("success");

  addButton.addEventListener("click", function () {
    const toastType = successRadio.checked ? "success" : "error";
    const toastMessage = messageContent.value.trim() || (toastType === "success" ? "Success!" : "Error.");
    const duration = parseInt(durationInput.value, 10) || 500;
    const cancelable = cancelableCheckbox.checked;

    createToast(toastType, toastMessage, duration, cancelable);
  });

  clearButton.addEventListener("click", function () {
    const toastsContainer = document.getElementById("toasts");
    toastsContainer.innerHTML = "";
  });

  function createToast(type, message, duration, cancelable) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `${type}-toast`);

    const messageParagraph = document.createElement("p");
    messageParagraph.classList.add("message");
    messageParagraph.textContent = message;
    toast.appendChild(messageParagraph);

    if (cancelable) {
      const cancelButton = document.createElement("button");
      cancelButton.classList.add("cancel-button");
      cancelButton.textContent = "X";
      cancelButton.addEventListener("click", function () {
        toast.remove();
      });
      toast.appendChild(cancelButton);
    }

    const toastsContainer = document.getElementById("toasts");
    toastsContainer.prepend(toast);

    setTimeout(function () {
      toast.remove();
    }, duration);
  }
});
