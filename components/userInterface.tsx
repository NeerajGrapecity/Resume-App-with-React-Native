export interface IUser {
  name: string;
  role: string;
  location: string;
  image: string;
  //   skills: any;
  educations: {
    place: string;
    degree: string;
    timePeriod: string;
  }[];
  experiences: {
    company: string;
    designation: string;
    timePeriod: string;
  }[];
  skills: {
    id: number;
    name: string;
    url: string;
  }[];
}
