export interface Publication {
  id: string;
  title: string;
  content: string;
  publicationDate: Date;
  publicationNumber: string;
  status: 'draft' | 'scheduled' | 'published';
  createdAt: Date;
  updatedAt: Date;
}