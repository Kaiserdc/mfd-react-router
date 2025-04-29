import moment from "moment";
export function formatDate(date: string | number | Date): string {
    const m = moment(date);
    return m.isValid()
        ? m.format("YYYY-MM-DD HH:mm:ss")
        : "";
}