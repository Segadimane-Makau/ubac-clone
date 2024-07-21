import {Icon} from '@iconify/react';
import { SideNavItem } from './type';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: '/',
        icon: <Icon icon="lucide:home" width="24" height="24"/>
    },
    {
        title: "WOMAN",
        path: '/',
        icon: <Icon icon="lucide:woman" width="24" height="24"/>
    },
    {
        title: "MAN",
        path: '/',
        icon: <Icon icon="lucide:man" width="24" height="24"/>
    },
    {
        title: "SALES",
        path: '/',
        icon: <Icon icon="lucide:cash" width="24" height="24"/>
    },

]