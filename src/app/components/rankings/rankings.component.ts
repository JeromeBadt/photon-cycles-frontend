import { Component } from '@angular/core';

export class Rank {
    points: number;
    playerName: string;

    constructor(points: number, playerName: string) {
        this.points = points;
        this.playerName = playerName;
    }
}

@Component({
    selector: 'app-rankings',
    templateUrl: './rankings.component.html',
    styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent {
    rankings: Rank[];

    constructor() {
        this.rankings = [
            new Rank(1014, 'Alfred'),
            new Rank(1013, 'Fred'),
            new Rank(1012, 'Gilbert'),
            new Rank(1011, 'Bruce'),
            new Rank(1010, 'Tekken'),
            new Rank(1009, 'Jin'),
            new Rank(1008, 'Gerald'),
            new Rank(1007, 'Milky'),
            new Rank(1006, 'Way'),
            new Rank(1005, 'Susanne')
        ];
    }
}
