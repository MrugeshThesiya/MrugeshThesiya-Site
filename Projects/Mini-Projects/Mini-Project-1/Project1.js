const btn = document.querySelectorAll('.button');
btn.forEach((btn) =>
  btn.addEventListener(
    'click',
    (e) => (document.body.style.backgroundColor = e.target.id)
  )
);
