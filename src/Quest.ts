/**
 * The quest status.
 */
export enum QuestStatus
{
	NotStarted,
	InProgress,
	Complete,
	Failed
}

/**
 * A quest for the player to complete.
 */
export interface IQuest
{
	/**
	 * The id of the quest.
	 */
	id?: string;
	/**
	 * The name of the quest.
	 */
	name?: string;
	 /**
	  * The description of the quest.
	  */
	description?: string;
	 /**
	  * The name of the quest giver. The name must be unique!
	  */
	giver?: string;
	 /**
	  * A counter associated with the quest, if needed.
	  */
	counter?: number;
	 /**
	  * The current status of the quest for the player.
	  */
	status?: QuestStatus;
}

/**
 * A quest for the player to complete.
 */
export class Quest implements IQuest
{
	/**
	 * The user id associated with the user that created the quest.
	 */
	createdById: string;
	/**
	 * The id of the quest.
	 */
	id: string;
	/**
	 * The name of the quest.
	 */
	name: string;
	/**
	 * The description of the quest.
	 */
	description: string;
	/**
	 * The name of the quest giver. The name must be unique!
	 */
	giver: string;
	/**
	 * A counter associated with the quest, if needed.
	 */
	counter: number;
	/**
	 * The current status of the quest for the player.
	 */
	status: QuestStatus;

	/**
	 * The event to execute on the start of a quest.
	 */
	onStart: () => Promise<void>;
	/**
	 * The event to execute when the quest has been updated.
	 */
	onUpdate: () => Promise<void>;
	/**
	 * The event to execute when the quest has been completed.
	 */
	onComplete: () => Promise<void>;
	/**
	 * The event to execute when the quest has failed.
	 */
	onFailed: () => Promise<void>;

	constructor (name: string, description: string)
	{
		this.createdById = "";
		this.id = "";
		this.name = name;
		this.description = description;
		this.giver = "";
		this.counter = 0;
		this.status = QuestStatus.NotStarted;

		this.onStart = null;
		this.onUpdate = null;
		this.onComplete = null;
		this.onFailed = null;
	}

	/**
	 * Get the quest as a JSON object.
	 */
	toJSON (): IQuest
	{
		return ({
				id: this.id
			});
	}

	/**
	 * Update the current quest.
	 */
	async update (): Promise<void>
	{
		if (this.status !== QuestStatus.InProgress)
			return;

		if (this.onUpdate != null)
			this.onUpdate ();
	}
}