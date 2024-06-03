import { Injectable } from '@angular/core'
import { Notification, NotificationCenter } from '@fwks/models'
import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationApiService {

  async fetchAll(): Promise<NotificationCenter> {
    return new Promise((resolve) => {
      const notifications: Notification[] = []
      for (let index = 0; index < faker.number.int({ min: 10, max: 30 }); index++) {
        const from = dayjs(new Date()).subtract(180, 'minute').toDate()
        const to = new Date()
        notifications.push({
          id: faker.string.uuid(),
          image: faker.image.avatar(),
          content: faker.lorem.words({ min: 5, max: 10 }),
          date: dayjs(faker.date.between({ from, to })).fromNow(),
          read: !!faker.number.int({ min: 0, max: 1 })
        })
      }
      resolve({
        unread: notifications.filter(x => !x.read).length,
        notifications
      })
    })
  }

  async markAllAsRead(): Promise<void> {
    return new Promise((resolve) => {
      resolve()
    })
  }

}
