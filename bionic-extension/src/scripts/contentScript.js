function bionicizeText() {
  const elements = document.querySelectorAll('*');

  elements.forEach((element) => {
    const words = element.innerText.split(' ');

    const bionicWords = words.map((word) => {
      const bionicLetters = word
        .split('')
        .map((letter) => {
          const shouldBold = Math.random() < 0.5;
          return shouldBold ? `<strong>${letter}</strong>` : letter;
        })
        .join('');

      return `<span>${bionicLetters}</span>`;
    });

    element.innerHTML = bionicWords.join(' ');
  });
}

bionicizeText();
