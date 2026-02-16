import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css';
import './theme.css';

function getSectionNameForSlide(slideEl) {
  if (!slideEl) return '';
  // Prefer explicit data-section on the slide.
  if (slideEl.dataset.section) return slideEl.dataset.section;

  // Otherwise, walk backwards to find the most recent slide that sets a section.
  let el = slideEl;
  while (el && el.previousElementSibling) {
    el = el.previousElementSibling;
    if (el?.dataset?.section) return el.dataset.section;
  }
  return '';
}

function updateChrome(event) {
  const currentSlide = event?.currentSlide || deck.getCurrentSlide();
  const sectionName = getSectionNameForSlide(currentSlide);

  const sectionEl = document.querySelector('[data-ui="section"]');
  if (sectionEl) sectionEl.textContent = sectionName || 'Agentic Internet';
}

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: false,
  transition: 'slide',
  backgroundTransition: 'fade',
  slideNumber: 'c/t',
  width: 1280,
  height: 720,
  margin: 0.06,
  minScale: 0.5,
  maxScale: 1.15,
  navigationMode: 'linear',
  controlsTutorial: false,
  autoAnimate: true,
  autoAnimateDuration: 0.6,
  autoAnimateEasing: 'cubic-bezier(.2,.8,.2,1)',
  plugins: [RevealNotes]
});

deck.initialize().then(() => {
  updateChrome();
  deck.on('slidechanged', updateChrome);
});
