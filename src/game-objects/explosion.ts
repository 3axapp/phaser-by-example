import {Game} from "../scenes/game";

export class Explosion
{
    private lights: Phaser.GameObjects.PointLight[];

    public constructor(private scene: Game, private x: number, private y: number, private radius = 5, min = 5, max = 7)
    {
        this.lights = Array(Phaser.Math.Between(min, max))
            .fill(0).map((_, i) =>
            {
                const offsetX   =
                          this.x + Phaser.Math.Between(-this.radius / 2, this.radius / 2);
                const offsetY   =
                          this.y + Phaser.Math.Between(-this.radius / 2, -this.radius / 2);
                const color     = Phaser.Math.Between(0xff0000, 0xffffcc);
                const radius    = Phaser.Math.Between(this.radius / 2, this.radius);
                const intensity = Phaser.Math.Between(0.3, 0.8);
                return scene.lights.addPointLight(
                    offsetX,
                    offsetY,
                    color,
                    radius,
                    intensity
                );
            });
        this.init();
    }

    private init()
    {
        this.scene.tweens.add({
            targets : this.lights,
            duration: Phaser.Math.Between(600, 1000), scale: {from: 1, to: 0},
        });
    }
}
