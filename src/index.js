import * as PIXI from "pixi.js-legacy";
import icon from "./media/icon.png";

const app = new PIXI.Application({
  backgroundColor: 0x1f3f1f
});
document.body.appendChild(app.view);

const sp = new PIXI.Sprite.from(icon);

sp.anchor.set(0.5);
sp.x = app.screen.width/2;
sp.y = app.screen.height/2;

app.stage.addChild(sp);
