import Phaser from "phaser";
import {Game} from "../scenes/game";

export class LightParticle extends Phaser.GameObjects.PointLight
{

    public constructor(scene: Game, x: number, y: number, color = 0xffffff, radius = 5, intensity = 0.5)
    {
        super(scene, x, y, color, radius, intensity);
        this.name  = "celtic";
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (this.body as any).setAllowGravity(false);
        (this.body as any).setVelocityY(300);
        this.init();
    }

    private init()
    {
        this.scene.tweens.add({
            targets : this,
            duration: Phaser.Math.Between(600, 1000),
            scale   : {from: 1, to: 3},
            alpha   : {from: this.alpha, to: 0}, onComplete: () =>
            {
                this.destroy();
            },
        });
    }
}
