export type UserData = {
  id: string;
  email: string;
  name: string | null;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  } | null;
  posts?: {
    id: string;
    slug: string;
    title: string;
    body: string;
    authorId: string;
  }[];
};
