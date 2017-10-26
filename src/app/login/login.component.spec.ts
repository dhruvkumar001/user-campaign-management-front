import { NgModule }      from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule }    from '@angular/forms';
import { routing }        from '../app.routing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/index';
import { RegisterComponent } from '../register/index';

describe('LoginComponent', () => {
  /*beforeEach(() => {
  TestBed.configureTestModule({
    imports: [
      RouterTestingModule.withRoutes(
        [{path: '', component: HomeComponent}, {path: 'login', component: LoginComponent}])]
      )
    ]
  });
});*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,routing],
      declarations: [
        LoginComponent,
        HomeComponent,
        RegisterComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
