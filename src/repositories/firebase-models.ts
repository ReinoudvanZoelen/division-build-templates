export class EquipmentStorageModel {
    MaskSlot: EquipmentItemStorageModel;
    BackpackSlot: EquipmentItemStorageModel;
    VestSlot: EquipmentItemStorageModel;
    GlovesSlot: EquipmentItemStorageModel;
    HolsterSlot: EquipmentItemStorageModel;
    KneePadsSlot: EquipmentItemStorageModel;
}

export class EquipmentItemStorageModel {
    item: string;
    attribute1: string;
    attribute2: string;
    mod: string;
    talent: string;
}