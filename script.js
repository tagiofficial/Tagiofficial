console.log("TAGIOFFICIAL - Sifirdan qurulur...");

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'vizitka.html';
  });
});