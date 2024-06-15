import Phaser from "phaser";
import {Coin} from "./coin";
import {Obstacle} from "./obstacle";
import {Cloud} from "./cloud";
import {Game} from "../scenes/game";

export class Generator
{
    private pinos = 0;

    public constructor(private scene: Game)
    {
        this.scene = scene;
        this.scene.time.delayedCall(2000, () => this.init(), null, this);
    }

    public init()
    {
        this.generateCloud();
        this.generateObstacle();
        this.generateCoin();
    }

    private generateCloud()
    {
        new Cloud(this.scene);
        this.scene.time.delayedCall(
            Phaser.Math.Between(2000, 3000),
            () => this.generateCloud(),
            null,
            this
        );
    }

    private generateObstacle()
    {
        this.scene.obstacles.add(
            new Obstacle(
                this.scene,
                800,
                this.scene.height - Phaser.Math.Between(32, 128)
            )
        );

        this.scene.time.delayedCall(
            Phaser.Math.Between(1500, 2500),
            () => this.generateObstacle(),
            null,
            this
        );
    }

    private generateCoin()
    {
        this.scene.coins.add(
            new Coin(
                this.scene,
                800,
                this.scene.height - Phaser.Math.Between(32, 128)
            )
        );
        this.scene.time.delayedCall(
            Phaser.Math.Between(500, 1500),
            () => this.generateCoin(),
            void 0,
            this
        );
    }
}
