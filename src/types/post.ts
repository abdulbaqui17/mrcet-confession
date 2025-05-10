export interface Post {
  id: number;
  userId: number;
  title: string;
  image?: string | null;
  createdAt: string;
  likes:{id:number}[];
  comments:{text:string}[]
}
