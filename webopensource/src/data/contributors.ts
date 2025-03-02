export interface Contributor {
  name: string;
  role: string;
  avatar: string;
}

export const contributorsData: Contributor[] = [
  {
    name: "John Doe",
    role: "Lead Developer",
    avatar: "/avatars/john.png"
  },
  {
    name: "Jane Smith",
    role: "UI Designer",
    avatar: "/avatars/jane.png"
  }
  // Add more contributors as needed
]; 