import { Component , OnInit} from '@angular/core';
import { Serie } from '../serie';
import { SerieListService } from '../serie-list.service';

@Component({
  selector: 'app-serie-list',
  imports: [],
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit {
    series: Array<Serie> = [];

    constructor(private serieService: SerieListService) { }
    
    ngOnInit(): void {

    this.serieService.getSeries().subscribe(data => {
      this.series = data;
    });
  }
}

