import {GameObjects} from "phaser";

export class Coin extends GameObjects.Sprite
{

    public constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "coin");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (this.body as any).setAllowGravity(false);
        const alpha = 1 / Phaser.Math.Between(1, 3);
        this.init();
    }

    private init()
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

        const coinAnimation = this.scene.anims.create({
            key      : "coin",
            frames   : this.scene.anims.generateFrameNumbers("coin", {
                start: 0,
                end  : 7,
            }),
            frameRate: 8,
        });
        this.play({key: "coin", repeat: -1});
    }
}
