import { toast } from "sonner";
import { API_BASE_URL, AUTH_HEADER_KEY } from "../../lib/config";

// Mock Data
const MOCK_RESOURCES = [
  {
    id: "1",
    title: "Data Structures & Algorithms - Mid Term PYQ",
    semester: 3,
    subject: "DSA",
    year: "2024",
    type: "pyq",
    examType: "mid",
    downloadCount: 154,
    rating: 4.5,
    previewUrl: "https://arxiv.org/pdf/2104.08653.pdf", // Placeholder PDF
    dateAdded: "2024-03-15",
  },
  {
    id: "2",
    title: "Introduction to Operating Systems - Lecture Notes",
    semester: 4,
    subject: "OS",
    year: "2024",
    type: "notes",
    downloadCount: 89,
    rating: 4.8,
    previewUrl: "https://arxiv.org/pdf/2104.08653.pdf",
    dateAdded: "2024-02-10",
  },
  {
    id: "3",
    title: "Computer Networks - Tanenbaum 5th Ed",
    semester: 5,
    subject: "CN",
    year: "2023",
    type: "book",
    downloadCount: 342,
    rating: 4.9,
    previewUrl: "https://arxiv.org/pdf/2104.08653.pdf",
    dateAdded: "2023-11-20",
  },
  {
    id: "4",
    title: "Discrete Mathematics - End Term PYQ",
    semester: 3,
    subject: "DM",
    year: "2023",
    type: "pyq",
    examType: "end",
    downloadCount: 201,
    rating: 4.2,
    previewUrl: "https://arxiv.org/pdf/2104.08653.pdf",
    dateAdded: "2023-12-05",
  },
  {
    id: "5",
    title: "Database Management Systems - Lab Manual",
    semester: 4,
    subject: "DBMS",
    year: "2024",
    type: "notes",
    downloadCount: 120,
    rating: 4.6,
    previewUrl: "https://arxiv.org/pdf/2104.08653.pdf",
    dateAdded: "2024-04-01",
  },
];

const MOCK_ANNOUNCEMENTS = [
  {
    id: "a1",
    title: "Mid-Sem Exam Schedule Released",
    date: "2024-03-10",
    important: true,
    content:
      "The schedule for the upcoming mid-semester examinations has been released. Check the academic portal.",
  },
  {
    id: "a2",
    title: "New PYQs Added for Semester 6",
    date: "2024-03-05",
    important: false,
    content:
      "We have updated the repository with the latest Previous Year Questions for Semester 6 subjects.",
  },
];

const MOCK_COMMENTS = [
  {
    id: "c1",
    resourceId: "1",
    user: "Student A",
    rating: 5,
    text: "Very helpful for revision!",
    date: "2024-03-20",
  },
  {
    id: "c2",
    resourceId: "1",
    user: "Student B",
    rating: 4,
    text: "Good collection, but missing some questions from 2022.",
    date: "2024-03-21",
  },
];

// Helper to simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to check if real API is configured
const isApiConfigured = () => {
  return API_BASE_URL && API_BASE_URL !== "YOUR_BACKEND_API_URL_HERE";
};

// Helper for Fetch API with error handling
const fetchFromApi = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        // Add auth token if available in localStorage
        ...(localStorage.getItem("token")
          ? { [AUTH_HEADER_KEY]: `Bearer ${localStorage.getItem("token")}` }
          : {}),
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(
      `Failed to fetch from ${endpoint}, falling back to mock data.`,
      error,
    );
    throw error; // Re-throw to trigger fallback in the caller
  }
};

export const api = {
  fetchResources: async (filters: any = {}) => {
    if (isApiConfigured()) {
      try {
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) queryParams.append(key, String(value));
        });
        return await fetchFromApi(`/resources?${queryParams.toString()}`);
      } catch (e) {
        // Fallback to mock on error
      }
    }

    await delay(800);
    let results = [...MOCK_RESOURCES];

    if (filters.semester) {
      results = results.filter((r) => r.semester === Number(filters.semester));
    }
    if (filters.subject) {
      results = results.filter(
        (r) => r.subject.toLowerCase() === filters.subject.toLowerCase(),
      );
    }
    if (filters.type) {
      results = results.filter((r) => r.type === filters.type);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subject.toLowerCase().includes(q),
      );
    }

    return results;
  },

  fetchResourceById: async (id: string) => {
    if (isApiConfigured()) {
      try {
        return await fetchFromApi(`/resources/${id}`);
      } catch (e) {
        // Fallback
      }
    }

    await delay(500);
    return MOCK_RESOURCES.find((r) => r.id === id);
  },

  fetchAnnouncements: async () => {
    if (isApiConfigured()) {
      try {
        return await fetchFromApi(`/announcements`);
      } catch (e) {
        // Fallback
      }
    }

    await delay(600);
    return MOCK_ANNOUNCEMENTS;
  },

  fetchComments: async (resourceId: string) => {
    if (isApiConfigured()) {
      try {
        return await fetchFromApi(`/resources/${resourceId}/comments`);
      } catch (e) {
        // Fallback
      }
    }

    await delay(600);
    return MOCK_COMMENTS.filter((c) => c.resourceId === resourceId);
  },

  postComment: async (data: {
    resourceId: string;
    rating: number;
    comment: string;
  }) => {
    if (isApiConfigured()) {
      try {
        return await fetchFromApi(`/comments`, {
          method: "POST",
          body: JSON.stringify(data),
        });
      } catch (e) {
        // Fallback
      }
    }

    await delay(1000);
    const newComment = {
      id: `c${Date.now()}`,
      resourceId: data.resourceId,
      user: "Current User",
      rating: data.rating,
      text: data.comment,
      date: new Date().toISOString().split("T")[0],
    };
    MOCK_COMMENTS.push(newComment);
    return newComment;
  },

  downloadResource: async (id: string) => {
    if (isApiConfigured()) {
      try {
        return await fetchFromApi(`/resources/${id}/download`);
      } catch (e) {
        // Fallback
      }
    }

    await delay(1000);
    // In a real app, this would trigger a download or return a signed URL
    return {
      success: true,
      url: MOCK_RESOURCES.find((r) => r.id === id)?.previewUrl,
    };
  },

  adminLogin: async (credentials: any) => {
    if (isApiConfigured()) {
      try {
        const data = await fetchFromApi(`/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        // Store token if returned
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        return data;
      } catch (e) {
        console.error(
          "Login failed via API, falling back to mock (for demo only)",
        );
        // Fallback only if credentials match the mock ones to simulate failure properly
      }
    }

    await delay(1000);
    if (
      credentials.email === "admin@cse.edu" &&
      credentials.password === "admin"
    ) {
      return {
        token: "mock-jwt-token-123",
        user: { name: "Admin User", role: "admin" },
      };
    }
    throw new Error("Invalid credentials");
  },
};
