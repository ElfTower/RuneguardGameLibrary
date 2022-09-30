import { Character, ICharacter } from "./Character";

/**
 * The player info passed from the server to the game.
 */
export interface IPlayer extends ICharacter
{
    /**
     * Indicates if the player is banned or not.
     */
    enabled?: boolean;
}

/**
 * Player info.
 */
export class Player extends Character
{
    /**
     * Indicates if the player is banned or not.
     */
    enabled: boolean;

    constructor (newPlayer: IPlayer)
    {
        super (newPlayer);

        this.enabled = newPlayer.enabled || true;
    }
}