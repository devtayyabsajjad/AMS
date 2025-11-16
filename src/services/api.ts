// API Service Layer - Easy to replace with Django backend
import { Accommodation, Application, User } from '@/types/accommodation';

// This is a mock implementation using localStorage
// Replace these functions with actual Django API calls when backend is ready

const STORAGE_KEYS = {
  ACCOMMODATIONS: 'accommodations',
  APPLICATIONS: 'applications',
  USERS: 'users',
  CURRENT_USER: 'currentUser',
};

// Initialize with some mock data
const initializeData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.ACCOMMODATIONS)) {
    const mockAccommodations: Accommodation[] = [
      {
        id: '1',
        title: 'Modern Muslim-Friendly Apartment',
        description: 'Beautiful 2-bedroom apartment in a quiet neighborhood, perfect for Muslim families.',
        type: 'Apartment',
        location: 'Downtown',
        address: '123 Main Street',
        price: 1200,
        religiousPreference: 'Muslim',
        status: 'Available',
        bedrooms: 2,
        bathrooms: 1,
        amenities: ['Prayer Room', 'Halal Kitchen', 'Parking'],
        images: [],
        contactEmail: 'admin@accommodation.com',
        contactPhone: '+1234567890',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem(STORAGE_KEYS.ACCOMMODATIONS, JSON.stringify(mockAccommodations));
  }

  if (!localStorage.getItem(STORAGE_KEYS.APPLICATIONS)) {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const mockUsers: User[] = [
      {
        id: 'admin-1',
        email: 'admin@accommodation.com',
        name: 'Admin User',
        phone: '+1234567890',
        role: 'admin',
      },
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(mockUsers));
  }
};

initializeData();

// Authentication API
export const authAPI = {
  login: async (email: string, password: string): Promise<User> => {
    // TODO: Replace with Django API call: POST /api/auth/login
    const users: User[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const user = users.find((u) => u.email === email);
    
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid credentials');
  },

  signup: async (email: string, password: string, name: string, phone: string): Promise<User> => {
    // TODO: Replace with Django API call: POST /api/auth/signup
    const users: User[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      phone,
      role: 'user',
    };
    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));
    return newUser;
  },

  logout: async (): Promise<void> => {
    // TODO: Replace with Django API call: POST /api/auth/logout
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return userStr ? JSON.parse(userStr) : null;
  },
};

// Accommodation API
export const accommodationAPI = {
  getAll: async (filters?: {
    religiousPreference?: string;
    type?: string;
    location?: string;
  }): Promise<Accommodation[]> => {
    // TODO: Replace with Django API call: GET /api/accommodations?filters
    let accommodations: Accommodation[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.ACCOMMODATIONS) || '[]'
    );

    if (filters?.religiousPreference && filters.religiousPreference !== 'Any') {
      accommodations = accommodations.filter(
        (a) => a.religiousPreference === filters.religiousPreference || a.religiousPreference === 'Any'
      );
    }

    if (filters?.type) {
      accommodations = accommodations.filter((a) => a.type === filters.type);
    }

    if (filters?.location) {
      accommodations = accommodations.filter((a) =>
        a.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    return accommodations;
  },

  getById: async (id: string): Promise<Accommodation | null> => {
    // TODO: Replace with Django API call: GET /api/accommodations/:id
    const accommodations: Accommodation[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.ACCOMMODATIONS) || '[]'
    );
    return accommodations.find((a) => a.id === id) || null;
  },

  create: async (accommodation: Omit<Accommodation, 'id' | 'createdAt' | 'updatedAt'>): Promise<Accommodation> => {
    // TODO: Replace with Django API call: POST /api/accommodations
    const accommodations: Accommodation[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.ACCOMMODATIONS) || '[]'
    );
    const newAccommodation: Accommodation = {
      ...accommodation,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    accommodations.push(newAccommodation);
    localStorage.setItem(STORAGE_KEYS.ACCOMMODATIONS, JSON.stringify(accommodations));
    return newAccommodation;
  },

  update: async (id: string, updates: Partial<Accommodation>): Promise<Accommodation> => {
    // TODO: Replace with Django API call: PUT /api/accommodations/:id
    const accommodations: Accommodation[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.ACCOMMODATIONS) || '[]'
    );
    const index = accommodations.findIndex((a) => a.id === id);
    if (index === -1) throw new Error('Accommodation not found');

    accommodations[index] = {
      ...accommodations[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.ACCOMMODATIONS, JSON.stringify(accommodations));
    return accommodations[index];
  },

  delete: async (id: string): Promise<void> => {
    // TODO: Replace with Django API call: DELETE /api/accommodations/:id
    let accommodations: Accommodation[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.ACCOMMODATIONS) || '[]'
    );
    accommodations = accommodations.filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEYS.ACCOMMODATIONS, JSON.stringify(accommodations));
  },
};

// Application API
export const applicationAPI = {
  getAll: async (): Promise<Application[]> => {
    // TODO: Replace with Django API call: GET /api/applications
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]');
  },

  create: async (application: Omit<Application, 'id' | 'createdAt' | 'status'>): Promise<Application> => {
    // TODO: Replace with Django API call: POST /api/applications
    const applications: Application[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]'
    );
    const newApplication: Application = {
      ...application,
      id: Date.now().toString(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    applications.push(newApplication);
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
    return newApplication;
  },

  updateStatus: async (id: string, status: Application['status']): Promise<Application> => {
    // TODO: Replace with Django API call: PATCH /api/applications/:id
    const applications: Application[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]'
    );
    const index = applications.findIndex((a) => a.id === id);
    if (index === -1) throw new Error('Application not found');

    applications[index].status = status;
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
    return applications[index];
  },
};
