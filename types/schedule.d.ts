export interface Schedule {
  id: number;
  day: number;
  channel: 'show' | 'atelier';
  kikaku: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

export interface Kikaku {
  title: string;
  description: string;
  color: string;
  channel: 'show' | 'atelier';
  url?: { name: string };
  image?: string;
  title_short?: string;
}

export interface ScheduleWithInfo extends Schedule {
  kikakuInfo: Kikaku;
  ticketStatus: {
    reserved: number;
    limit: number;
  };
}
