import { HttpClient } from '@angular/common/http'
import { Injectable, WritableSignal, inject, signal } from '@angular/core'
import { Session } from '@fwks/models'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  http = inject(HttpClient)

  current: WritableSignal<Session> = this.setGuestUser()

  async load(): Promise<void> {
    try {
      const response = await firstValueFrom<any>(this.http.get<any>('https://randomuser.me/api?inc=name,picture'))
      this.current.set({
        valid: true,
        user: response.results[0]
      })
    } catch (error) {
      console.error('Error loading user session', error)
      throw error
    }
  }

  logout(): void {
    this.setGuestUser()
  }

  private setGuestUser(): WritableSignal<Session> {
    this.current = signal({
      valid: false,
      user: {
        name: Object.assign({}),
        picture: { ...Object.assign({}), thumbnail: 'https://placehold.co/80' }
      }
    })
    return this.current
  }

}
