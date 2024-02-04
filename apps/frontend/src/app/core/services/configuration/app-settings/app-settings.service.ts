import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { AppSettings } from '@fwks/models'

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  http = inject(HttpClient)
  current: AppSettings = Object.assign({})

  async load(): Promise<void> {
    try {
      const settings = await firstValueFrom(this.http.get<AppSettings>('/assets/configuration/appsettings.json'))
      this.current = settings
    } catch (error) {
      console.error('Error loading settings', error)
      throw error
    }
  }

}
