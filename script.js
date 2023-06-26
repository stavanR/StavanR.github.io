
  const intro = document.querySelector('.intro');
  const tagline = document.querySelector('.tagline');
  const nameText = document.querySelector('.nameText');

  const fadeOutText = (textElement) => {
    const textLength = textElement.textContent.length;
    textElement.classList.add('fade-out-text');
    textElement.innerHTML = textElement.textContent.trim().split('').map((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.transition = 'all 0.8s cubic-bezier(0.55, 0, 0.1, 1)';
      span.style.opacity = '1';
      span.style.zIndex = textLength - i;
      return span.outerHTML;
    }).join('');
  }

  fadeOutText(intro);
  fadeOutText(tagline);
  fadeOutText(nameText);
