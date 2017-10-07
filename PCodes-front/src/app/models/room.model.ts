export class Room {
  sessionId: string;
  owner: string;
  problem: number;
  members: { email: string; id: string; color: string; }[];
}
