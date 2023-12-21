import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Firebase_EquipmentItem } from "src/firebase/models/EquipmentItem";
import { EquipmentItem } from "./models/EquipmentItem";
import { Loadout } from "./models/Loadout";
import { IStoreState } from "./state";
import { Firebase_Loadout } from "src/firebase/models/Loadout";

export const selectDivisionState =
    createFeatureSelector<IStoreState>('division');

export const loadouts$ = createSelector(
    selectDivisionState,
    (state: IStoreState): Loadout[] => mapLoadouts(state)
);
export const equipmentItems$ = createSelector(
    selectDivisionState,
    (state: IStoreState): Firebase_EquipmentItem[] => state.equipmentItems ?? []
);

function mapLoadouts(state: IStoreState): Loadout[] {
    return (state?.loadouts ?? []).map(item => mapLoadout(state, item));
}

function mapLoadout(state: IStoreState, item: Firebase_Loadout) {
    return new Loadout({
        id: item.id,
        Mask: item.MaskId ? findEquipmentItem(state, item.MaskId) : undefined,
        Backpack: item.BackpackId ? findEquipmentItem(state, item.BackpackId) : undefined,
        Chest: item.ChestId ? findEquipmentItem(state, item.ChestId) : undefined,
        Gloves: item.GlovesId ? findEquipmentItem(state, item.GlovesId) : undefined,
        Holster: item.HolsterId ? findEquipmentItem(state, item.HolsterId) : undefined,
        KneePads: item.KneePadsId ? findEquipmentItem(state, item.KneePadsId) : undefined,
    });
}

function findEquipmentItem(state: IStoreState, id: string): EquipmentItem | undefined {
    var item = state.equipmentItems.find(item => item.id === id);
    return item ? mapEquipmentItem(item) : undefined;
}

function mapEquipmentItem(item: Firebase_EquipmentItem): EquipmentItem {
    return new EquipmentItem({
        id: item.id,
        name: item.name,
        slot: item.slot,
        rarity: item.rarity,
        brand: item.brand,
        coreAttribute: item.coreAttribute,
        attributes: item.attributes,
    })
}