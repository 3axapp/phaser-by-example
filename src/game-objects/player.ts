import Phaser from "phaser";

export class Player extends Phaser.GameObjects.Rectangle
{

    public jumping    = false;
    public invincible = false;
    public health     = 10;

    public constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, 32, 32, 0x00ff00);

        this.setOrigin(0.5);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        const body: any         = this.body;
        body.collideWorldBounds = true;
        this.setScale(1);
        body.mass     = 10;
        body.setDragY = 10;
    }


}
