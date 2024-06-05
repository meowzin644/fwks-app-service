import { MenuItem } from 'primeng/api'

export interface AppSettings {
    services: {
        api: string
    }
    menus: {
        profile: MenuItem[]
        navigation: MenuItem[]
    }
}