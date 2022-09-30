import { Inventory } from "./Inventory";

/**
 * The character type.
 */
export enum CharacterType
{
    Player = 1,
    NPC = 2,
    Admin = 2
}

/**
 * The current character status.
 */
export interface ICharacterStatus
{
    /**
     * The map the character is on.
     */
    map?: string;
    /**
     * The character's position.
     */
    position?: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * The character's looks, clothing, and layers.
     */
    character?: any;
    /**
     * The character's inventory. If this is a string it needs to be parsed 
     * using JSON.parse.
     */
    inventory?: any;
}

/**
 * A characters display structure.
 */
export interface CharacterStructure
{
    /**
     * The base to be used.
     */
    base: string;
    /**
     * The layers (if any) to be used.
     */
    layers?: {
            /**
             * The sprite to be used.
             */
            sprite: string;
            /**
             * The z-index which will determine the order the sprite will appear.
             */
            zIndex?: number;
        }[];
}

/**
 * A character.
 */
export interface ICharacter
{
    /**
     * The player's name.
     */
    name: string;
    /**
     * The player's name, will be converted into this.name.
     */
    displayName?: string;
	/**
	 * The type of character.
	 */
	type?: string;
    /**
     * The character's looks, clothing, and layers.
     */
    character?: CharacterStructure;
    /**
     * The character's inventory.
     */
    inventory?: Inventory;
}

/**
 * A character.
 */
export class Character implements ICharacter
{
    /**
     * The player's name.
     */
    name: string;
	/**
	 * The type of character.
	 */
	type: string;
    /**
     * The character's looks, clothing, and layers.
     */
    character: CharacterStructure;
    /**
     * The player's inventory.
     */
    inventory: Inventory;

    constructor (character: ICharacter)
    {
        this.name = character.displayName || character.name;
        this.type = character.type || "player";
        this.character = { base: "default" };
        this.inventory = new Inventory ();
    }

    /**
     * Get the character type.
     */
    static getCharacterType (characterType: string): number
    {
        if (characterType === "player")
            return (CharacterType.Player);

        if (characterType === "admin")
            return (CharacterType.Admin);

        return (0);
    }
}