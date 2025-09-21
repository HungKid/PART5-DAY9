let currentIndex = 0;

function loadCard(index) {
  const data = flashcards[index];
  document.getElementById('front-img').src = data.image;
  document.getElementById('cloze').textContent = data.cloze;
  document.getElementById('definition').textContent = data.definition;
  document.getElementById('word').textContent = data.word;
  document.getElementById('back-img').src = data.image;
  document.getElementById('word').textContent = data.word;
  document.getElementById('ipa').textContent = data.ipa;
  document.getElementById('meaning').textContent = data.meaning;

  const card = document.querySelector('.flashcard');
  card.classList.remove('flipped');
}

function toggleCard() {
  const card = document.querySelector('.flashcard');
  card.classList.toggle('flipped');
}

function playAudio(event) {
  event.stopPropagation(); // Ngăn không lật thẻ
  const audio = new Audio(flashcards[currentIndex].audio);
  audio.play();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  loadCard(currentIndex);
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  loadCard(currentIndex);
}

window.onload = () => {
  loadCard(currentIndex);
};