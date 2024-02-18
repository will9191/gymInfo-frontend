import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  constructor(private navbarService: NavbarService) {

  }

  ngOnInit(): void {
      this.navbarService.hide();
  }

  ngOnDestroy(): void {
      this.navbarService.display();
  }
}
