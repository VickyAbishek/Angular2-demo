import { Component, OnChanges, Input , Output , EventEmitter} from '@angular/core';

@Component({ 
    selector: 'ai-star' ,
    templateUrl: './app/shared/star.component.html' ,
    styleUrls: [ './app/shared/star.component.css' ]
})

export class StarComponent implements OnChanges{
    @Input() rating: number ;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 220 / 5;
    }

    @Output() ratingClick:  EventEmitter<string> = new EventEmitter<string>();
    onClick(): void {
        console.log("inside onClick");
        this.ratingClick.emit('The rating $(this.rating) was clicked');
    }
}