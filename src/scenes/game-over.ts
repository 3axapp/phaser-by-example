import {Scene} from "phaser";

export class GameOver extends Scene
{
    private center_width!: number;
    private introLayer: any;
    private width!: number;
    private height!: number;
    private center_height!: number;

    public constructor()
    {
        super({key: "gameover"});
    }

    public create()
    {
        this.width         = this.sys.game.config.width as number;
        this.height        = this.sys.game.config.height as number;
        this.center_width  = this.width / 2;
        this.center_height = this.height / 2;
        this.cameras.main.setBackgroundColor(0x87ceeb);
        this.add.bitmapText(
            this.center_width,
            50,
            "arcade", this.registry.get("score"), 25
        )
            .setOrigin(0.5);
        this.add
            .bitmapText(this.center_width, this.center_height, "arcade",
                "GAME OVER",
                45
            )
            .setOrigin(0.5);
        this.add
            .bitmapText(this.center_width, 250,
                "arcade", "Press SPACE or Click to restart!",
                15
            )
            .setOrigin(0.5);
        (this.input as any | Phaser.Input.Keyboard.KeyboardPlugin).keyboard.on("keydown-SPACE", this.startGame, this);
        this.input.on("pointerdown", () => this.startGame(), this);
    }

    private showLine(text: string | string[], y: number)
    {
        let line = this.introLayer.add(
            this.add
                .bitmapText(this.center_width, y, "pixelFont", text, 25).setOrigin(0.5)
                .setAlpha(0)
        );
        this.tweens.add({
            targets : line,
            duration: 2000,
            alpha   : 1,
        });
    }

    private startGame()
    {
        this.scene.start("game");
    }
}
