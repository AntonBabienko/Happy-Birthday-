
import { Application } from 'pixi.js';

const _app = new Application();
await _app.init({
    width: 1200, height: 800, backgroundColor: 0xffffff

});
document.body.appendChild(_app.canvas);

