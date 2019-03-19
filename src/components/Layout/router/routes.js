import GE_Generate from '../../GE_Generate';
import GE_Params from '../../GE_Parameters';
import UsrMngmnt from '../../UserManagement';

export const routes = [
    {
        exact: true,
        path: '/welcome/usrmngmnt',
        component: UsrMngmnt
    },
    {
        exact: true,
        path: '/welcome/ge_generate',
        component: GE_Generate
    },
    {
        exact: true,
        path: '/welcome/ge_params',
        component: GE_Params
    }
];

