import { Interactable } from "./Interactable";

export class DialogueBox
{
    /**
     * The name to display.
     */
    name: string;
    /**
     * The pages of text to display.
     */
    text: string[];
    /**
     * The interactable options.
     */
    interactables: Interactable[];

    constructor ()
    {
        this.name = "";
        this.text = [];
        this.interactables = [];
    }
}