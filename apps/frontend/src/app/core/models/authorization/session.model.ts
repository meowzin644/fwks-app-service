import { UserProfile } from '../account/user-profile.model'

export interface Session {
    valid: boolean
    user: UserProfile
}