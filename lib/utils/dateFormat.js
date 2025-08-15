import { formatInTimeZone } from "date-fns-tz";
import { tr } from "date-fns/locale";

const dateFormat = (date) => {
  return formatInTimeZone(new Date(date), "Europe/Istanbul", "dd MMMM yyyy", {
    locale: tr,
  });
};

export default dateFormat;
