export interface GuestbookEntry {
  id: string;
  name: string;
  email?: string | null;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
