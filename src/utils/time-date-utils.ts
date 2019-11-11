export const minToHours = (min: number) => {
    const hours = min / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);

    return rhours + 'h ' + rminutes + 'min';
};
