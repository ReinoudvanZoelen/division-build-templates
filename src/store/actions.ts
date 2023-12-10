import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Firebase_EquipmentItem, Firebase_EquipmentItem_Create } from './firebase/models/EquipmentItem';
import { Firebase_Loadout, Firebase_Loadout_Create } from './firebase/models/Loadout';
import { EquipmentItem } from './models/EquipmentItem';

export const StoreActions = createActionGroup({
    source: 'Division 2 Build Template Store',
    events: {
        'Get Loadouts': emptyProps(),
        'Get Loadouts Success': props<{ loadouts: Firebase_Loadout[] }>(),
        'Get Loadouts Fail': props<{ message: string }>(),

        'Create Loadout': props<{ loadout: Firebase_Loadout_Create }>(),
        'Create Loadout Success': props<{ loadoutId: string }>(),
        'Create Loadout Fail': props<{ message: string }>(),

        'Get Equipment Items': emptyProps(),
        'Get Equipment Items Success': props<{ equipmentItems: Firebase_EquipmentItem[] }>(),
        'Get Equipment Items Fail': props<{ message: string }>(),

        'Create Equipment Item': props<{ equipmentItem: Firebase_EquipmentItem_Create }>(),
        'Create Equipment Item Success': props<{ equipmentItemId: string }>(),
        'Create Equipment Item Fail': props<{ message: string }>(),

        'Extract CSV': emptyProps(),
        'Extract CSV Success': props<{ equipmentItems: EquipmentItem[] }>(),
    },
});