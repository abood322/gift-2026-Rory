function openGift(event) {
  event.stopPropagation();

  const giftBox = document.getElementById("giftBox");
  const loadingBox = document.getElementById("loadingBox");
  const messageWrapper = document.getElementById("messageWrapper");
  const audioBox = document.getElementById("audioBox");

  giftBox.classList.add("fade-out");

  setTimeout(() => {
    giftBox.classList.add("hidden");
    loadingBox.classList.remove("hidden");
  }, 500);

  setTimeout(() => {
    loadingBox.classList.add("hidden");
    messageWrapper.classList.remove("hidden");
    audioBox.classList.remove("hidden");
  }, 2500);
}

function toggleNote(event) {
  event.stopPropagation();
  document.getElementById("note").classList.toggle("show");
}

function closeNote() {
  document.getElementById("note").classList.remove("show");
}
