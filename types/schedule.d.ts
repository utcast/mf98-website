// /types/schedule.d.ts
export interface Schedule {
    id: number;
    day: number;
    channel: string;
    kikaku: string;
    startHour: number;
    startMin: number;
    endHour: number;
    endMin: number;
  }
  
  export interface ScheduleWithInfo extends Schedule {
    kikakuInfo: {
      title: string;
      title_short: string;
      description: string;
      icon: string;
      [key: string]: any;
    };
    ticketStatus: {
      reserved: number;
      limit: number;
    };
  }
  