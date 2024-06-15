import "./styles.scss";
import Phaser from "phaser";
import {Game} from "./scenes/game";
import {GameOver} from "./scenes/game-over";

const config = {
    width    : 600,
    height   : 300,
    scale    : {
        mode      : Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    parent   : "game-container", physics: {
        default: "arcade", arcade: {
            gravity: {y: 350, x: 0},
            debug  : true,
        },
    },
    scene    : [Game, GameOver],
};

const game = new Phaser.Game(config);
