import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PresentationLayoutComponent } from "./presentation-layout.component";

describe("PresentationLayoutComponent", () => {
  let component: PresentationLayoutComponent;
  let fixture: ComponentFixture<PresentationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
