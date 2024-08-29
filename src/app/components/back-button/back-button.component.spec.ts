import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BackButtonComponent } from './back-button.component';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackButtonComponent]
    });
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit action event when onClick is called', () => {
    spyOn(component.action, 'emit');

    component.onClick();

    expect(component.action.emit).toHaveBeenCalled();
  });

  it('should render title correctly', () => {
    const testTitle = 'Back';
    component.title = testTitle;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(testTitle);
  });

  it('should emit action when button is clicked', () => {
    spyOn(component.action, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.action.emit).toHaveBeenCalled();
  });
});
