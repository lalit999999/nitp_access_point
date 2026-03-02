export interface Resource {
  _id: string;
  title: string;
  semester: number;
  subject: string;
  subjectCode: string;
  year: number;
  type: "pyq" | "note" | "book";
  examType?: "mid" | "end";
  downloadCount: number;
  rating: number;
  author?: string;
  description?: string;
  dateAdded: string;
}

export interface Announcement {
  _id: string;
  title: string;
  content: string;
  date: string;
  isImportant: boolean;
}

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    _id: "1",
    title: "End Semester Exams Schedule",
    content:
      "The end semester exams for Spring 2026 will commence from May 15th. Check the official portal for the detailed datesheet.",
    date: "2026-03-01",
    isImportant: true,
  },
  {
    _id: "2",
    title: "New Library Resources Added",
    content:
      'We have updated the digital library with the latest editions of "Introduction to Algorithms" and "Operating System Concepts".',
    date: "2026-02-28",
    isImportant: false,
  },
  {
    _id: "3",
    title: "Hackathon Registration Open",
    content:
      "Registrations for the annual CSE Hackathon are now open. Form teams of 4 and register before March 10th.",
    date: "2026-02-25",
    isImportant: false,
  },
];

export const MOCK_RESOURCES: Resource[] = [
  {
    _id: "101",
    title: "Data Structures Mid Sem 2025",
    semester: 3,
    subject: "Data Structures & Algorithms",
    subjectCode: "CS201",
    year: 2025,
    type: "pyq",
    examType: "mid",
    downloadCount: 1240,
    rating: 4.5,
    dateAdded: "2025-10-15",
  },
  {
    _id: "102",
    title: "Advanced DSA Handwritten Notes",
    semester: 3,
    subject: "Data Structures & Algorithms",
    subjectCode: "CS201",
    year: 2025,
    type: "note",
    downloadCount: 3500,
    rating: 4.8,
    author: "Topper Student",
    dateAdded: "2025-09-20",
  },
  {
    _id: "103",
    title: "Introduction to Algorithms (CLRS)",
    semester: 3,
    subject: "Data Structures & Algorithms",
    subjectCode: "CS201",
    year: 2024,
    type: "book",
    downloadCount: 5000,
    rating: 4.9,
    dateAdded: "2024-08-01",
  },
  {
    _id: "104",
    title: "Operating Systems End Sem 2024",
    semester: 4,
    subject: "Operating Systems",
    subjectCode: "CS202",
    year: 2024,
    type: "pyq",
    examType: "end",
    downloadCount: 890,
    rating: 4.2,
    dateAdded: "2024-12-10",
  },
  {
    _id: "105",
    title: "OS Process Management Slides",
    semester: 4,
    subject: "Operating Systems",
    subjectCode: "CS202",
    year: 2025,
    type: "note",
    downloadCount: 600,
    rating: 4.0,
    dateAdded: "2025-02-15",
  },
  {
    _id: "106",
    title: "Computer Networks Mid Sem 2025",
    semester: 5,
    subject: "Computer Networks",
    subjectCode: "CS301",
    year: 2025,
    type: "pyq",
    examType: "mid",
    downloadCount: 450,
    rating: 3.8,
    dateAdded: "2025-10-20",
  },
  {
    _id: "107",
    title: "Database Management Systems Notes",
    semester: 5,
    subject: "DBMS",
    subjectCode: "CS302",
    year: 2025,
    type: "note",
    downloadCount: 1200,
    rating: 4.6,
    dateAdded: "2025-11-05",
  },
  {
    _id: "108",
    title: "Digital Logic Design End Sem 2023",
    semester: 2,
    subject: "Digital Logic",
    subjectCode: "CS102",
    year: 2023,
    type: "pyq",
    examType: "end",
    downloadCount: 300,
    rating: 4.1,
    dateAdded: "2023-05-20",
  },
];

export const SUBJECTS_BY_SEMESTER: Record<
  number,
  { name: string; code: string }[]
> = {
  1: [
    { name: "Mathematics I", code: "MA101" },
    { name: "Physics", code: "PH101" },
    { name: "Intro to Programming", code: "CS101" },
  ],
  2: [
    { name: "Mathematics II", code: "MA102" },
    { name: "Digital Logic", code: "CS102" },
    { name: "Basic Electronics", code: "EC101" },
  ],
  3: [
    { name: "Data Structures & Algorithms", code: "CS201" },
    { name: "Discrete Math", code: "MA201" },
    { name: "COA", code: "CS203" },
  ],
  4: [
    { name: "Operating Systems", code: "CS202" },
    { name: "TOC", code: "CS204" },
    { name: "Design of Algorithms", code: "CS205" },
  ],
  5: [
    { name: "Computer Networks", code: "CS301" },
    { name: "DBMS", code: "CS302" },
    { name: "Software Engineering", code: "CS303" },
  ],
  6: [
    { name: "Compiler Design", code: "CS304" },
    { name: "AI", code: "CS305" },
    { name: "Web Technology", code: "CS306" },
  ],
  7: [
    { name: "Machine Learning", code: "CS401" },
    { name: "Distributed Systems", code: "CS402" },
  ],
  8: [
    { name: "Cloud Computing", code: "CS403" },
    { name: "Information Security", code: "CS404" },
  ],
};
