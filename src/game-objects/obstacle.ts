import {GameObjects} from "phaser";

export class Obstacle extends GameObjects.Rectangle
{

    public constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, 32, 32, 0xff0000);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (this.body as any).setAllowGravity(false);
        const alpha = 1 / Phaser.Math.Between(1, 3);
        this.init();
    }

    public init()
    {
        this.scene.tweens.add({
            targets   : this,
            x         : {from: 820, to: -100},
            duration  : 2000,
            onComplete: () =>
            {
                this.destroy();
            },
        });
    }
}
