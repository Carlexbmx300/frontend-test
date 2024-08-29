import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit search event on search', () => {
    spyOn(component.onSearch, 'emit');
    
    const mockEvent = { target: { value: 'test' } } as unknown as Event;
    component.search(mockEvent);
    
    expect(component.onSearch.emit).toHaveBeenCalledWith('test');
  });

  it('should emit select option event on onSelect', () => {
    spyOn(component.onSelectOption, 'emit');
    
    const mockEvent = { target: { value: 'mmorpg' } as unknown} as Event;
    component.onSelect(mockEvent, 'genre');
    
    expect(component.onSelectOption.emit).toHaveBeenCalledWith({ key: 'genre', value: 'mmorpg' });
  });

});
