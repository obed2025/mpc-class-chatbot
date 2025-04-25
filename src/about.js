import markdownit from 'markdown-it';
import readme from '../README.md?raw';
import 'github-markdown-css';
import './about.css';

const aboutEl = document.getElementById('about');
const md = markdownit();

aboutEl.innerHTML = md.render(readme);

const h2 = document.querySelectorAll('h2');

h2.forEach((h) => {
  if (h.innerHTML === 'Limitations') {
    h.classList.add('limitations');
  }
});
