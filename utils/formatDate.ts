import dayjs, { ConfigType } from 'dayjs';

interface FormatDate {
  date: ConfigType;
  type: string;
}

export default function formatDate({ date, type }: FormatDate) {
  return dayjs(date).format(type);
}
