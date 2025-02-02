    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');


    noBtn.addEventListener('click', () => {
      const maxWidth = window.innerWidth - noBtn.offsetWidth;
      const maxHeight = window.innerHeight - noBtn.offsetHeight;

      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * maxHeight);

      noBtn.style.position = 'absolute';
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
    });


    setInterval(() => {
      const maxWidth = window.innerWidth - heart.offsetWidth;
      const maxHeight = window.innerHeight - heart.offsetHeight;

      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * maxHeight);

      heart.style.left = `${randomX}px`;
      heart.style.top = `${randomY}px`;
    }, 2000);


    yesBtn.addEventListener('click', () => {
      message.style.display = 'block';
      noBtn.style.opacity = '0';
      noBtn.style.pointerEvents = 'none';
      heart.classList.remove('heart-big');
      heart.classList.add('flower-big');
      heart.innerHTML = '🌸';
    });