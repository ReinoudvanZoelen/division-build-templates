import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Firebase_Loadout, Firebase_Loadout_Create } from './firebase/models/Loadout';

export const StoreActions = createActionGroup({
    source: 'Division 2 Build Template Store',
    events: {
        'Get Loadouts': emptyProps(),
        'Get Loadouts Success': props<{ loadouts: Firebase_Loadout[] }>(),
        'Get Loadouts Fail': props<{ message: string }>(),

        'Create Loadout': props<{ loadout: Firebase_Loadout_Create }>(),
        'Create Loadout Success': props<{ loadoutId: string }>(),
        'Create Loadout Fail': props<{ message: string }>(),
    },
});