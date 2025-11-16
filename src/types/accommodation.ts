export type ReligiousPreference = 'Muslim' | 'Non-Muslim' | 'Any';

export type AccommodationType = 'Apartment' | 'House' | 'Room' | 'Studio' | 'Shared';

export type AccommodationStatus = 'Available' | 'Occupied' | 'Pending';

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  type: AccommodationType;
  location: string;
  address: string;
  price: number;
  religiousPreference: ReligiousPreference;
  status: AccommodationStatus;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  contactEmail: string;
  contactPhone: string;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  accommodationId: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  message: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'admin' | 'user';
  religiousPreference?: ReligiousPreference;
}
