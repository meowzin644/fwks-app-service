import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavbarSidenavComponent } from './navbar-sidenav.component'

describe('NavbarSidenavComponent', () => {
  let component: NavbarSidenavComponent
  let fixture: ComponentFixture<NavbarSidenavComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSidenavComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(NavbarSidenavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
