import { Notification } from "./notification.model"

export interface NotificationCenter {
    unread: number
    notifications: Notification[]
}