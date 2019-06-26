import { Trainer } from './Trainer';
import { MaterialMapping } from './MaterialMapping';
import { Time } from '@angular/common';

export class Schedule {
    scheduleId: number;
    trainer: Trainer;
    materialMapping: MaterialMapping;
    date: Date;
    start: Time;
    finish: Time;
    createdAt;
    updatedAt;
}