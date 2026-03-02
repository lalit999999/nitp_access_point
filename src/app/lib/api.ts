import {
  MOCK_ANNOUNCEMENTS,
  MOCK_RESOURCES,
  SUBJECTS_BY_SEMESTER,
} from "./mock-data";
import type { Resource, Announcement } from "./mock-data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getAnnouncements: async (): Promise<Announcement[]> => {
    await delay(500);
    return MOCK_ANNOUNCEMENTS;
  },

  getResources: async (params: {
    semester?: number;
    type?: string;
    subject?: string;
    search?: string;
  }): Promise<Resource[]> => {
    await delay(800);
    let data = [...MOCK_RESOURCES];

    if (params.semester) {
      data = data.filter((r) => r.semester === Number(params.semester));
    }
    if (params.type) {
      data = data.filter((r) => r.type === params.type);
    }
    if (params.subject) {
      data = data.filter(
        (r) => r.subjectCode === params.subject || r.subject === params.subject,
      );
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      data = data.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subject.toLowerCase().includes(q) ||
          String(r.year).includes(q),
      );
    }

    return data;
  },

  getResourceById: async (id: string): Promise<Resource | undefined> => {
    await delay(400);
    return MOCK_RESOURCES.find((r) => r._id === id);
  },

  getSubjectsBySemester: async (semester: number) => {
    await delay(300);
    return SUBJECTS_BY_SEMESTER[semester] || [];
  },

  adminLogin: async (credentials: { email: string; password: string }) => {
    await delay(1000);
    if (
      credentials.email === "admin@cse.edu" &&
      credentials.password === "admin123"
    ) {
      return {
        token: "mock-jwt-token-12345",
        user: { name: "Admin User", role: "admin" },
      };
    }
    throw new Error("Invalid credentials");
  },
};
