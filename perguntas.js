fetch('https://gist.github.com/Telmittto/b863ce9dd977d0b7e86112c5f8ef16c5')
  .then(response => response.text())
  .then(text => {
    const perguntas = text.split('\n');
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    console.log(perguntaAleatoria);
  });