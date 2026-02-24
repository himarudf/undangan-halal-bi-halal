export interface Guest {
  name: string;
  attending: boolean;
  pax: number;
  message: string;
}

export interface EventDetails {
  date: string;
  time: string;
  location: string;
  mapUrl: string;
}

export interface GeneratedGreeting {
  text: string;
  loading: boolean;
  error: string | null;
}