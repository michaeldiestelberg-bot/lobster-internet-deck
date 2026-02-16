import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css';
import './theme.css';

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  transition: 'slide',
  backgroundTransition: 'fade',
  plugins: [RevealNotes]
});

deck.initialize();
