/**
 * A NPC
 */
 export class NPC
 {
	/**
	 * The name.
	 */
	name: string;

	/**
	 * Executed when a collision with the NPC occurs.
	 */
	onCollision?: () => Promise<void>;
	/**
	 * Executed when a trigger with the NPC occurs.
	 */
	onTrigger?: () => Promise<void>;

	constructor ()
	{
		this.name = "";
	}
 }