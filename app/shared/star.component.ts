import { Component, OnChanges, Input , Output , EventEmitter} from '@angular/core';

@Component({ 
    selector: 'ai-star' ,
    moduleId: module.id,
    templateUrl: './star.component.html' ,
    styleUrls: [ './star.component.css' ]
})

export class StarComponent implements OnChanges{
    @Input() rating: number ;
    @Output() notify:  EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 220 / 5;
        // 220 --> star-display width
    }

    onClick(): void {
        console.log("inside onClick");
        console.log( this.rating );
        this.notify.emit('The rating '+ this.rating + ' was clicked');
        console.log("exiting onclick");
    } 
}