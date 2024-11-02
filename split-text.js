const textElement = document.getElementById('animated-text');

const text = textElement.textContent;
textElement.innerHTML = '';
text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      textElement.appendChild(span);

      setTimeout(() => {
            span.classList.add('animate');
      }, index * 100);
});

setTimeout(() => {
      textElement.querySelectorAll('span').forEach((span, index) => {
            setTimeout(() => {
                  span.classList.remove('animate');
                  span.classList.add('reverse');
            }, index * 100);
      });
}, text.length * 100 + 3000); 
