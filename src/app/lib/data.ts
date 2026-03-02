export interface Resource {
  id: string;
  title: string;
  semester: number;
  subject: string;
  year: number;
  type: 'pyq' | 'notes' | 'book';
  examType?: 'mid' | 'end';
  author?: string;
  downloadCount: number;
  rating: number;
  description?: string;
  url?: string; // For PDF preview/download
  createdAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant: boolean;
}

export interface Comment {
  id: string;
  resourceId: string;
  user: string;
  rating: number;
  content: string;
  createdAt: string;
}

export const SUBJECTS: Record<number, string[]> = {
  1: ['Mathematics I', 'Physics', 'Chemistry', 'Basic Electrical', 'Programming in C'],
  2: ['Mathematics II', 'Data Structures', 'Digital Logic', 'COA', 'Discrete Math'],
  3: ['Algorithms', 'DBMS', 'Operating Systems', 'Software Engineering', 'Automata'],
  4: ['Computer Networks', 'Compiler Design', 'Web Technologies', 'AI', 'Security'],
  5: ['Machine Learning', 'Cloud Computing', 'Graphics', 'Distributed Systems'],
  6: ['Big Data', 'IoT', 'Mobile Computing', 'Blockchain'],
  7: ['Project Phase I', 'Elective I', 'Elective II'],
  8: ['Project Phase II', 'Elective III'],
};

export const MOCK_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Data Structures Notes - Unit 1',
    semester: 2,
    subject: 'Data Structures',
    year: 2024,
    type: 'notes',
    author: 'Prof. Smith',
    downloadCount: 120,
    rating: 4.5,
    description: 'Comprehensive notes on Arrays and Linked Lists.',
    createdAt: '2024-02-10T10:00:00Z',
  },
  {
    id: '2',
    title: 'DSA Mid Semester PYQ 2023',
    semester: 2,
    subject: 'Data Structures',
    year: 2023,
    type: 'pyq',
    examType: 'mid',
    downloadCount: 350,
    rating: 4.8,
    createdAt: '2023-11-15T14:30:00Z',
  },
  {
    id: '3',
    title: 'Operating Systems Concepts (Book)',
    semester: 3,
    subject: 'Operating Systems',
    year: 2022,
    type: 'book',
    author: 'Galvin',
    downloadCount: 500,
    rating: 4.9,
    createdAt: '2022-08-20T09:15:00Z',
  },
  {
    id: '4',
    title: 'Math I End Semester 2023',
    semester: 1,
    subject: 'Mathematics I',
    year: 2023,
    type: 'pyq',
    examType: 'end',
    downloadCount: 200,
    rating: 4.2,
    createdAt: '2023-12-05T11:00:00Z',
  },
  {
    id: '5',
    title: 'DBMS Lab Manual',
    semester: 3,
    subject: 'DBMS',
    year: 2024,
    type: 'notes',
    downloadCount: 80,
    rating: 4.0,
    createdAt: '2024-03-01T16:45:00Z',
  },
    {
    id: '6',
    title: 'Introduction to Algorithms (CLRS)',
    semester: 3,
    subject: 'Algorithms',
    year: 2021,
    type: 'book',
    author: 'Cormen',
    downloadCount: 800,
    rating: 5.0,
    createdAt: '2021-06-15T10:00:00Z',
  },
  {
    id: '7',
    title: 'Computer Networks - Tanenbaum',
    semester: 4,
    subject: 'Computer Networks',
    year: 2020,
    type: 'book',
    author: 'Andrew S. Tanenbaum',
    downloadCount: 600,
    rating: 4.7,
    createdAt: '2020-05-20T09:15:00Z',
  },
  {
    id: '8',
    title: 'Machine Learning - Andrew Ng Notes',
    semester: 5,
    subject: 'Machine Learning',
    year: 2023,
    type: 'notes',
    author: 'Andrew Ng',
    downloadCount: 1500,
    rating: 4.9,
    createdAt: '2023-09-10T14:30:00Z',
  },
  {
    id: '9',
    title: 'Web Technologies Lab Manual',
    semester: 4,
    subject: 'Web Technologies',
    year: 2024,
    type: 'notes',
    downloadCount: 95,
    rating: 4.1,
    createdAt: '2024-04-05T11:00:00Z',
  },
  {
    id: '10',
    title: 'Artificial Intelligence - Russell & Norvig',
    semester: 4,
    subject: 'AI',
    year: 2021,
    type: 'book',
    author: 'Russell & Norvig',
    downloadCount: 450,
    rating: 4.8,
    createdAt: '2021-07-20T09:15:00Z',
  }
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: 'Mid-Semester Exams Schedule Released',
    content: 'The mid-semester exams for all semesters will commence from 15th March. Check the official notice board for details.',
    date: '2024-03-01',
    isImportant: true,
  },
  {
    id: '2',
    title: 'New Books Added to Library',
    content: 'Latest editions of "Introduction to Algorithms" and "Operating System Concepts" are now available.',
    date: '2024-02-28',
    isImportant: false,
  },
];
