import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import './theme.css';

const deck = new Reveal({
  hash: true,
  center: true,
  transition: 'slide',
  controls: true,
  progress: true,
  margin: 0.08,
  width: 1280,
  height: 720
});

deck.initialize();
