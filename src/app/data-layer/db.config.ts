import { LocalDbConfig } from "./sda-be-mock.module";

export const dbConfig: LocalDbConfig[] = [
    {
        table: 'Teams',
        columns: [
            'name',
            'category',
            'avgPointsMatch'
        ]
    },
    {
        table: 'News',
        columns: [
            'image',
            'title',
            'description',
            'link'
        ]
    },
    {
        table: 'Matches',
        columns: [
            'homeTeam',
            'awayTeam',
            'goalHome',
            'goalAway',
            'possessionHome',
            'possessionAway'
        ]
    }
];
