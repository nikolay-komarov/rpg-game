import './index.scss';
import ClientGame from './client/ClienGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
