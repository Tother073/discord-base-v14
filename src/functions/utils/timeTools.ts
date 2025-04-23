








export function convertTimestampToDate(miliseconds: number): Date {
    return new Date(miliseconds);
};

export function generateTimestamp(): number {
    return new Date().getTime();
};