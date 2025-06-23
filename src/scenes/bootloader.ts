import {Scene} from "phaser";
import fontImage from "../static/assets/fonts/wendy.png";
import fontData from "../static/assets/fonts/wendy.xml";
import logo from "../static/assets/images/logo.png";
import pelloLogo from "../static/assets/images/pello_logo.png";
import background from "../static/assets/images/background.png";
import stage1 from "../static/assets/images/stage1.png";
import stage2 from "../static/assets/images/stage2.png";
import stage3 from "../static/assets/images/stage3.png";
import stage4 from "../static/assets/images/stage4.png";
import player1 from "../static/assets/images/player1.png";
import foe0 from "../static/assets/images/foe0.png";
import foe1 from "../static/assets/images/foe1.png";
import foe2 from "../static/assets/images/foe2.png";
import guinxu from "../static/assets/images/guinxu.png";
import plenny0 from "../static/assets/images/plenny0.png";
// audio
import shot from "../static/assets/sounds/shot.mp3";
import foeshot from "../static/assets/sounds/foeshot.mp3";
import foedestroy from "../static/assets/sounds/foedestroy.mp3";
import foexplosion from "../static/assets/sounds/foexplosion.mp3";
import explosion from "../static/assets/sounds/explosion.mp3";
import stageclear1 from "../static/assets/sounds/stageclear1.mp3";
import stageclear2 from "../static/assets/sounds/stageclear2.mp3";
import boss from "../static/assets/sounds/boss.mp3";
import splash from "../static/assets/sounds/splash.mp3";
import music1 from "../static/assets/sounds/music1.mp3";
import music2 from "../static/assets/sounds/music2.mp3";
import music3 from "../static/assets/sounds/music3.mp3";

export class Bootloader extends Scene
{
    private loadBar: Phaser.GameObjects.Graphics;
    private progressBar: Phaser.GameObjects.Graphics;

    public constructor()
    {
        super({key: "bootloader"});
    }

    public preload()
    {
        this.createBars();
        this.setLoadEvents();
        this.loadFonts();
        this.loadImages();
        this.loadAudios();
        this.loadSpritesheets();
        this.setRegistry();
    }

    private createBars()
    {
        this.loadBar = this.add.graphics();
        this.loadBar.fillStyle(0xd40000, 1);
        this.loadBar.fillRect(
            this.cameras.main.width / 4 - 2, this.cameras.main.height / 2 - 18, this.cameras.main.width / 2 + 4, 20
        );
        this.progressBar = this.add.graphics();
    }

    private setLoadEvents()
    {
        this.load.on("progress",
            function (this: Bootloader, value: number)
            {
                this.progressBar.clear();
                this.progressBar.fillStyle(0x0088aa, 1);
                this.progressBar.fillRect(
                    this.cameras.main.width / 4, this.cameras.main.height / 2 - 16, (this.cameras.main.width / 2) * value, 16
                );
            },
            this
        );

        this.load.on("complete", () =>
            {
                this.scene.start("splash");
            },
            this
        );
    }

    private loadFonts()
    {
        this.load.bitmapFont(
            "wendy",
            fontImage,
            fontData
        );
    }

    private loadImages()
    {
        this.load.image("logo", logo);
        this.load.image("pello_logo", pelloLogo);
        this.load.image("background", background);
        this.load.image(`stage1`, stage1);
        this.load.image(`stage2`, stage2);
        this.load.image(`stage3`, stage3);
        this.load.image(`stage4`, stage4);
    }

    private loadAudios()
    {
        this.load.audio("shot", shot);
        this.load.audio("foeshot", foeshot);
        this.load.audio("foedestroy", foedestroy);
        this.load.audio("foexplosion", foexplosion);
        this.load.audio("explosion", explosion);
        this.load.audio("stageclear1", stageclear1);
        this.load.audio("stageclear2", stageclear2);
        this.load.audio("boss", boss);
        this.load.audio("splash", splash);
        this.load.audio("music1", music1);
        this.load.audio("music2", music2);
        this.load.audio("music3", music3);
    }

    private loadSpritesheets()
    {
        this.load.spritesheet("player1", player1, {
            frameWidth : 64,
            frameHeight: 64,
        });
        this.load.spritesheet("foe0", foe0, {
            frameWidth : 64,
            frameHeight: 64,
        });
        this.load.spritesheet("foe1", foe1, {
            frameWidth : 64,
            frameHeight: 64,
        });
        this.load.spritesheet("foe2", foe2, {
            frameWidth : 32,
            frameHeight: 32,
        });
        this.load.spritesheet("guinxu", guinxu, {
            frameWidth : 128,
            frameHeight: 144,
        });
        this.load.spritesheet("plenny0", plenny0, {
            frameWidth : 64,
            frameHeight: 64,
        });
    }

    private setRegistry()
    {
        this.registry.set("score_player1", 0);
        this.registry.set("power_player1", "water");
        this.registry.set("lives_player1", 0);
        this.registry.set("score_player2", 0);
        this.registry.set("power_player2", "water");
        this.registry.set("lives_player2", 0);
    }
}
