import ClientEngine from './ClientEngine';
import sprites from '../configs/sprites';
import ClientWorld from './ClientWorld';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.world = this.createWorld();
    this.initEngine();
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  setPlayer(player) {
    this.player = player;
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.world.init();
      this.engine.on('render', (_, time) => {
        this.world.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        if (keydown) {
          this.player.moveByCellCoord(-1, 0, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
      ArrowRight: (keydown) => {
        if (keydown) {
          this.player.moveByCellCoord(1, 0, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
      ArrowUp: (keydown) => {
        if (keydown) {
          this.player.moveByCellCoord(0, -1, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
      ArrowDown: (keydown) => {
        if (keydown) {
          this.player.moveByCellCoord(0, 1, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
    });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;
