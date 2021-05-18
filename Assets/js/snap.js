const cards = document.querySelectorAll('.card');

cards.forEach(el => {
  el.addEventListener('click', () => {
    const eleInfo = el.querySelector('.card__information');
    el.classList.toggle('card--active');

    if (!el.classList.contains('card--active'))
      eleInfo.classList.toggle('card__information--collapse')
    else
      setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
  });
});
