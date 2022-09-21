/**
 * The possible interactable types.
 */
export enum InteractableTypes
{
    talk = "talk",
    trade = "trade",
    dual = "dual",
    gift = "gift",
    craft = "craft",
    accept = "accept",
    decline = "decline",
    other = "other",
    none = "none"
}

/**
 * An interactable object.
 */
export class Interactable
{
    /**
     * The display name for the interactable.
     */
    name: string;
    /**
     * The type of interactable.
     */
    type: InteractableTypes;

    /**
     * Executed when interacted with.
     */
    onInteract?: () => Promise<void>;

    constructor (name: string)
    {
        this.name = name;
        this.type = InteractableTypes.none;
    }
}