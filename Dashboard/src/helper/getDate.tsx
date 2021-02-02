import moment from "moment";

const getPeriod = (currentDay: string, substraccion: number): string => {
    return moment(currentDay).subtract(substraccion, 'days').format('YYYY-MM-DD');
}

export const dateRadioOptions = (val: any) => {
    const currentDay = moment().format('YYYY-MM-DD');
    let dateRadioBtn;

    if (val === 'day') {
        dateRadioBtn = { startDate: currentDay, endDate: currentDay }
    } else if (val === 'month') {
        const dateMonth = getPeriod(currentDay,30);
        dateRadioBtn = { startDate: dateMonth, endDate: currentDay }
    } else {
        const dateYear = getPeriod(currentDay,365);

        dateRadioBtn = { startDate: dateYear, endDate: currentDay }
    }

    return dateRadioBtn;
};

