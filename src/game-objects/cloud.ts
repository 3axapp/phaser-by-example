import {GameObjects} from "phaser";
import {Game} from "../scenes/game";

export class Cloud extends GameObjects.Rectangle
{

    public constructor(scene: Game, x: number = 0, y?: number)
    {
        const finalY = y || Phaser.Math.Between(0, 100);
        super(scene, x, finalY, 98, 32, 0xffffff);
        scene.add.existing(this);
        const alpha = 1 / Phaser.Math.Between(1, 3);
        this.setScale(alpha);
        this.init();
    }

    public init()
    {
        this.scene.tweens.add({
            targets   : this,
            x         : {from: 800, to: -100},
            duration  : 2000 / this.scale,
            onComplete: () =>
            {
                this.destroy();
            },
        });
    }
}
