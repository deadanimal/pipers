import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboards/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "ni-chart-pie-35 text-primary",
  },
  {
    path: "/projects",
    title: "Project",
    type: "sub",
    icontype: "ni-single-copy-04 text-info",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "document", title: "Document", type: "link" },
      { path: "meeting", title: "Meeting", type: "link" },
      { path: "milestone", title: "Milestone", type: "link" },
      { path: "note", title: "Note", type: "link" },
      { path: "training", title: "Training", type: "link" },
    ]
  }, 
  {
    path: "/supports/ticket",
    title: "Support",
    type: "link",
    icontype: "ni-support-16 text-danger",
  },  

  {
    path: "/developments",
    title: "Core",
    type: "sub",
    icontype: "ni-laptop text-default",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "flow", title: "Business Flow", type: "link" },
      { path: "datatable", title: "Data Table", type: "link" },
      { path: "deployment", title: "Deployment", type: "link" },
      { path: "api", title: "API Development", type: "link" },
      { path: "maintenance", title: "Maintenance", type: "link" },
      { path: "mobileapp", title: "Mobile Application", type: "link" },
      { path: "webapp", title: "Web Application", type: "link" },
      { path: "overview", title: "Overview", type: "link" },
      { path: "prototype", title: "Prototype", type: "link" },
      { path: "wireframe", title: "Wireframe", type: "link" },
    ]
  },     

  {
    path: "/tenders",
    title: "Tender",
    type: "sub",
    icontype: "ni-paper-diploma text-blue",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "notification", title: "Notification", type: "link" },
      { path: "presentation", title: "Presentation", type: "link" },      
      { path: "proposal", title: "Proposal", type: "link" },
      { path: "submission", title: "Submission", type: "link" },
      { path: "task", title: "Task", type: "link" },
      { path: "video", title: "Video", type: "link" },
    ]
  },   
  
  {
    path: "/sales",
    title: "Sales",
    type: "sub",
    icontype: "ni-money-coins text-orange",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "campaign", title: "Campaign", type: "link" },
      { path: "contact", title: "Contact", type: "link" },
      { path: "invoice", title: "Invoice", type: "link" },
      { path: "meeting", title: "Meeting", type: "link" },
      { path: "quotation", title: "Quotation", type: "link" },
    ]
  },     

  {
    path: "/managements",
    title: "Management",
    type: "sub",
    icontype: "ni-archive-2 text-green",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "organisation", title: "Organisation", type: "link" },
      { path: "user", title: "User", type: "link" },
      { path: "project", title: "Project", type: "link" },
    ]
  },   

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
