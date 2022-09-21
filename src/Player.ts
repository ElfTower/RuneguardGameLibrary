/**
 * The current player status.
 */
export interface IPlayerStatus
{
    /**
     * The map.
     */
    map?: string;
    /**
     * The player's position.
     */
    position?: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * The player's inventory. If this is a string it needs to be parsed 
     * using JSON.parse.
     */
    inventory?: any;
}

/**
 * The player info passed from the server to the game.
 */
export interface PlayerInfo
{
    /**
     * The player's network id.
     */
    id: string;
    /**
     * The player's JWT token.
     */
    jwtToken?: string;
     /**
      * The player's display name.
      */
    displayName: string;
    /**
     * Indicates if the player is banned or not.
     */
    enabled?: boolean;
    /**
     * The player's wallet information.
     */
    wallet?: {
            /**
             * The address to the player's wallet.
             */
            address: string;
        };
}

/**
 * Player info.
 */
export class Player
{
    /**
     * The player's network id.
     */
    id: string;
    /**
     * The player's JWT token.
     */
    jwtToken: string;
    /**
     * The player's name.
     */
    name: string;

    constructor (newPlayer: PlayerInfo)
    {
        this.id = newPlayer.id;
        this.jwtToken = newPlayer.jwtToken || "";
        this.name = newPlayer.displayName;
    }
}