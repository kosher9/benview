export interface EventPosition {
    status: string;
    comments: string;
    [x: string]: any;
}

export interface ShipmentHistory {
    eventDateTime: Date;
    shipmentIsDelayed: boolean;
    eventPosition: EventPosition;
}

export interface IJsonFiles {
    shipmentHistory: ShipmentHistory[];
}
