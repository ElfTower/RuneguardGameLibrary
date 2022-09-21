import { DialogueBox } from "./DialogueBox";

/**
 * A dialogue tree to use.
 */
export class DialogueTree
{
    /**
     * Developer defined triggers. Built-in triggers are:
     * * onPlayerInteracted
     */
    triggers: { [event: string]: () => Promise<void>; };
    /**
     * The chats that can be executed.
     */
    chats: { [name: string]: string[] | DialogueBox };

    constructor ()
    {
        this.triggers = {};
        this.chats = {};
    }
}