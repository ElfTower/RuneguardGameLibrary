import { Item } from "./Item";

/**
 * A character's inventory.
 */
export class Inventory
{
    /**
     * The items in the inventory.
     */
    items: Item[];

    constructor ()
    {
        this.items = [];
    }
}