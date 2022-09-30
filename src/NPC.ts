import { Character, ICharacter } from "./Character";

/**
 * A NPC
 */
 export class NPC extends Character
 {
	/**
	 * Executed when a collision with the NPC occurs.
	 */
	onCollision?: () => Promise<void>;
	/**
	 * Executed when a trigger with the NPC occurs.
	 */
	onTrigger?: () => Promise<void>;

	constructor (npc: ICharacter)
	{
		super (npc);
	}
 }