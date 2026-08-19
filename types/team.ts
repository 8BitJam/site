export interface PersonType {
  id: number;
  name: string;
  image?: string;
  roles: string[];
  link?: string;
  isTeam?: boolean;
  inPerson?: boolean;
}
