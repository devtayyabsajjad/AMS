# AMS - Accommodation Management System
## Complete Project Documentation
### Research Project Documentation



---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Research Context](#2-research-context)
3. [Project Overview](#3-project-overview)
4. [System Architecture](#4-system-architecture)
5. [Technical Stack](#5-technical-stack)
6. [Database Design](#6-database-design)
7. [Features & Functionality](#7-features--functionality)
8. [User Interface Design](#8-user-interface-design)
9. [Backend Implementation](#9-backend-implementation)
10. [Frontend Implementation](#10-frontend-implementation)
11. [API Documentation](#11-api-documentation)
12. [Security Implementation](#12-security-implementation)
13. [Installation & Setup](#13-installation--setup)
14. [Deployment Guide](#14-deployment-guide)
15. [Testing & Quality Assurance](#15-testing--quality-assurance)
16. [Performance Analysis](#16-performance-analysis)
17. [Research Findings](#17-research-findings)
18. [Future Enhancements](#18-future-enhancements)
19. [Troubleshooting](#19-troubleshooting)
20. [Appendices](#20-appendices)

---

## 1. Executive Summary

### 1.1 Project Introduction

The **Accommodation Management System (AMS)** is a comprehensive web-based platform designed to streamline the process of managing and discovering accommodations while respecting religious and cultural preferences. Built using Django framework and React, AMS addresses the unique challenges faced by individuals seeking culturally appropriate housing in diverse communities.

### 1.2 Problem Statement

In multicultural societies, finding accommodations that align with one's religious and cultural values can be challenging. Traditional accommodation platforms lack filtering mechanisms for religious preferences, leading to:
- Time-consuming manual searches
- Potential cultural mismatches
- Inefficient communication between seekers and providers
- Limited administrative oversight

### 1.3 Solution Overview

AMS provides:
- **Religious Preference Filtering**: Muslim, Hindu, Christian, Other, and Any options
- **Dual-Interface System**: Separate optimized interfaces for users and administrators
- **Real-time Application Management**: Track application status from submission to approval
- **Modern UI/UX**: Gradient designs, glass morphism effects, and responsive layouts
- **Secure Authentication**: Role-based access control with encrypted credentials
- **Cloud Database**: Supabase PostgreSQL for scalable data management

### 1.4 Key Achievements

✅ **Fully Functional Platform**: Complete CRUD operations for all entities  
✅ **Modern UI/UX**: Professional design with smooth animations  
✅ **Secure Authentication**: JWT-based with role management  
✅ **Cloud Integration**: Supabase PostgreSQL implementation  
✅ **Responsive Design**: Mobile, tablet, and desktop support  
✅ **Production Ready**: Deployed and accessible online  

### 1.5 Research Impact

This project contributes to:
- **Inclusive Technology Design**: Addressing cultural diversity in software
- **User Experience Research**: Studying preference-based filtering
- **Cloud Computing Applications**: Leveraging modern cloud infrastructure
- **Full-Stack Development**: Demonstrating end-to-end solution architecture

---

## 2. Research Context

### 2.1 Research Question

**Primary Research Question:**  
"How can an accommodation management system effectively support both administrators and users by providing a streamlined platform to manage, filter, and apply for accommodations based on religious and cultural preferences?"

**Sub-Questions:**
1. What features are essential for religious preference-based accommodation filtering?
2. How can user experience be optimized for both seekers and administrators?
3. What security measures are necessary for handling sensitive user data?
4. How can cloud infrastructure enhance scalability and reliability?

### 2.2 Research Objectives

**Primary Objectives:**
1. Design and develop a culturally sensitive accommodation management system
2. Implement robust filtering mechanisms for religious preferences
3. Create intuitive interfaces for different user roles
4. Ensure data security and user privacy
5. Deploy a scalable, production-ready application

**Secondary Objectives:**
1. Analyze user interaction patterns with preference-based filtering
2. Evaluate the effectiveness of role-based interface design
3. Assess cloud database performance in real-world scenarios
4. Document development best practices for similar systems

### 2.3 Research Methodology

**Development Methodology:** Agile/Scrum  
**Research Approach:** Design Science Research (DSR)  
**Evaluation Methods:**
- Functional testing
- Usability testing
- Performance testing
- Security testing

**Research Phases:**
1. **Phase 1**: Requirements gathering and analysis
2. **Phase 2**: System design and architecture
3. **Phase 3**: Implementation and development
4. **Phase 4**: Testing and evaluation
5. **Phase 5**: Deployment and documentation

### 2.4 Literature Review Summary

**Key Topics Covered:**
1. **Accommodation Management Systems**: Existing platforms and their limitations
2. **Cultural Sensitivity in Software**: Importance of respecting user preferences
3. **Full-Stack Web Development**: Modern frameworks and best practices
4. **Cloud Computing**: Benefits of cloud-hosted databases
5. **User Experience Design**: Principles for dual-interface systems

**Gap Identified:**  
Lack of accommodation platforms specifically addressing religious and cultural preferences with admin-optimized management tools.

### 2.5 Expected Outcomes

1. A fully functional, production-ready accommodation management system
2. Evidence-based insights on religious preference filtering in accommodation search
3. Design patterns for role-based dual-interface systems
4. Performance benchmarks for cloud-hosted Django applications
5. Documentation serving as a reference for similar projects

---

## 3. Project Overview

### 3.1 System Description

AMS is a full-stack web application that connects accommodation seekers with available properties while respecting religious and cultural preferences. The system consists of:

**Frontend:**
- React 18.3.1 with TypeScript
- Modern UI components using Shadcn/UI
- Responsive design with Tailwind CSS
- Vite for build optimization

**Backend:**
- Django 5.0.1 framework
- RESTful API architecture
- Custom user model with role management
- Supabase PostgreSQL database

**Infrastructure:**
- Supabase cloud hosting for database
- WhiteNoise for static file serving
- Gunicorn WSGI server for production
- Multiple deployment options (Vercel, Railway, Render)

### 3.2 System Features

#### For Regular Users:
1. **Authentication**
   - Email-based registration
   - Secure password encryption
   - Religious preference selection during signup
   - Profile management

2. **Accommodation Browse & Search**
   - View all available accommodations
   - Filter by religious preference
   - Filter by accommodation type
   - Search by location
   - View detailed accommodation information

3. **Application Management**
   - Apply for accommodations with custom messages
   - Track application status (Pending/Approved/Rejected)
   - View application history
   - Check application progress

4. **User Dashboard**
   - View personal applications
   - Application statistics
   - Quick access to features

#### For Administrators:
1. **Admin Dashboard**
   - Real-time statistics
   - Pending applications count
   - Total users, accommodations, applications overview
   - Animated stat cards with icons

2. **Accommodation Management**
   - Create new accommodations
   - Edit existing listings
   - Delete accommodations
   - View all accommodations with status

3. **Application Management**
   - View all applications
   - Approve/reject applications
   - View user messages
   - Access applicant contact information

4. **User Management**
   - View all registered users
   - Create new users
   - Edit user details
   - Change user roles
   - Delete user accounts

### 3.3 System Actors

**1. Guest (Unauthenticated User)**
- View homepage
- Access About page
- Access Contact page
- Sign up for an account
- Log in to existing account

**2. Registered User**
- All Guest permissions plus:
- Browse accommodations
- Apply for accommodations
- View own applications
- Track application status
- Update profile

**3. Administrator**
- All User permissions plus:
- Access admin dashboard
- Manage accommodations (CRUD)
- Manage applications (approve/reject)
- Manage users (CRUD)
- View system statistics

### 3.4 System Constraints

**Technical Constraints:**
- Django 5.0.1 framework
- Python 3.9+ required
- PostgreSQL database (Supabase)
- Modern browser support required

**Business Constraints:**
- Religious preferences limited to: Muslim, Hindu, Christian, Other, Any
- Accommodation types: Apartment, House, Room, Studio, Shared
- Application statuses: Pending, Approved, Rejected

**Security Constraints:**
- HTTPS required for production
- CSRF protection enabled
- SQL injection prevention
- XSS protection

---

## 4. System Architecture

### 4.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web        │  │   Mobile     │  │   Tablet     │      │
│  │   Browser    │  │   Browser    │  │   Browser    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS
┌────────────────────────▼────────────────────────────────────┐
│                 PRESENTATION LAYER                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  React Frontend (TypeScript + Tailwind CSS)         │   │
│  │  - Components (UI, Pages, Admin)                    │   │
│  │  - State Management                                  │   │
│  │  - Routing                                           │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API
┌────────────────────────▼────────────────────────────────────┐
│                  APPLICATION LAYER                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Django Backend (Python 3.12)                        │   │
│  │  ┌────────────────┐  ┌────────────────┐             │   │
│  │  │  Views/APIs    │  │  Middleware    │             │   │
│  │  └────────────────┘  └────────────────┘             │   │
│  │  ┌────────────────┐  ┌────────────────┐             │   │
│  │  │  Forms         │  │  Authentication│             │   │
│  │  └────────────────┘  └────────────────┘             │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │ ORM (psycopg2)
┌────────────────────────▼────────────────────────────────────┐
│                    DATA LAYER                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Supabase PostgreSQL Database                        │   │
│  │  - User Table                                        │   │
│  │  - Accommodation Table                               │   │
│  │  - Application Table                                 │   │
│  │  - Django System Tables                              │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Component Architecture

#### Frontend Components Structure:
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── [40+ components]
│   ├── admin/           # Admin-specific components
│   │   ├── AccommodationList.tsx
│   │   ├── ApplicationList.tsx
│   │   ├── CreateAccommodation.tsx
│   │   └── EditAccommodation.tsx
│   └── NavLink.tsx      # Navigation component
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Auth.tsx         # Login/Signup
│   ├── Accommodations.tsx
│   ├── Apply.tsx
│   ├── Admin.tsx
│   └── NotFound.tsx
├── services/            # API services
│   └── api.ts           # API calls
├── types/               # TypeScript types
│   └── accommodation.ts
├── hooks/               # Custom React hooks
│   └── use-mobile.tsx
└── lib/                 # Utility functions
    └── utils.ts
```

#### Backend Components Structure:
```
harmony-housing-main/
├── accommodation/       # Main Django app
│   ├── models.py        # Data models
│   ├── views.py         # View functions
│   ├── forms.py         # Django forms
│   ├── urls.py          # URL routing
│   ├── admin.py         # Admin configuration
│   └── migrations/      # Database migrations
├── harmony_housing/     # Project settings
│   ├── settings.py      # Django settings
│   ├── urls.py          # Root URL config
│   └── wsgi.py          # WSGI application
├── templates/           # HTML templates
│   ├── base.html
│   └── accommodation/
│       ├── index.html
│       ├── admin.html
│       ├── accommodations.html
│       └── [15+ templates]
└── static/              # Static files
    └── css/
        └── enhanced.css
```

### 4.3 Data Flow

#### User Registration Flow:
```
User → Signup Form → Django View → Validation → 
User Model → PostgreSQL → Success → Auto Login → Redirect
```

#### Accommodation Search Flow:
```
User → Filters → GET Request → Django View → 
Query Builder → Database → Results → Template → User
```

#### Application Submission Flow:
```
User → Application Form → POST Request → Validation → 
Application Model → Database → Email Notification → 
Admin Dashboard Update → Success Message
```

#### Admin Approval Flow:
```
Admin → Dashboard → Application List → Approve Button → 
Status Update → Database → User Notification → 
Accommodation Status Update
```

### 4.4 Technology Stack Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND STACK                        │
│  React 18.3.1 + TypeScript + Tailwind CSS + Vite       │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│                    BACKEND STACK                         │
│  Django 5.0.1 + Python 3.12 + Gunicorn + WhiteNoise    │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│                    DATABASE STACK                        │
│  Supabase PostgreSQL + Transaction Pooler              │
└─────────────────────────────────────────────────────────┘
```

### 4.5 Deployment Architecture

```
┌──────────────────────────────────────────────────────────┐
│              Production Environment                       │
│                                                          │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐   │
│  │  Vercel    │    │  Railway   │    │  Render    │   │
│  │  (Option1) │    │  (Option2) │    │  (Option3) │   │
│  └─────┬──────┘    └─────┬──────┘    └─────┬──────┘   │
│        │                  │                  │          │
│        └──────────────────┴──────────────────┘          │
│                           │                             │
│                           ▼                             │
│  ┌────────────────────────────────────────────────┐    │
│  │        Django Application (Gunicorn)           │    │
│  └────────────────────┬───────────────────────────┘    │
│                       │                                 │
│                       ▼                                 │
│  ┌────────────────────────────────────────────────┐    │
│  │    Supabase PostgreSQL (Cloud Database)        │    │
│  └────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Technical Stack

### 5.1 Backend Technologies

#### 5.1.1 Core Framework
- **Django 5.0.1**
  - Modern Python web framework
  - MTV (Model-Template-View) architecture
  - Built-in ORM for database operations
  - Admin interface customization
  - Security features (CSRF, XSS protection)

#### 5.1.2 Python Version
- **Python 3.12**
  - Latest stable Python release
  - Improved performance over previous versions
  - Enhanced type hinting
  - Better error messages

#### 5.1.3 Database
- **PostgreSQL (via Supabase)**
  - Version: 15.x
  - Cloud-hosted database
  - Transaction Pooler on port 6543
  - Automatic backups
  - High availability

#### 5.1.4 Database Adapter
- **psycopg2-binary 2.9.9**
  - PostgreSQL adapter for Python
  - Fast C implementation
  - Full PostgreSQL features support

#### 5.1.5 Environment Management
- **django-environ 0.11.2**
  - Environment variable management
  - Secure configuration
  - .env file support

- **python-dotenv 1.0.0**
  - Load environment variables
  - Development/production separation

#### 5.1.6 Static Files
- **WhiteNoise 6.6.0**
  - Static file serving
  - Compression support
  - No CDN required
  - Production-ready

#### 5.1.7 WSGI Server
- **Gunicorn 21.2.0**
  - Production WSGI server
  - Process management
  - Load balancing
  - Worker configuration

#### 5.1.8 Image Processing
- **Pillow 10.2.0**
  - Image manipulation
  - Format conversion
  - Thumbnail generation

#### 5.1.9 Cloud Integration
- **supabase 2.3.0**
  - Supabase Python client
  - Real-time subscriptions
  - Authentication helpers

### 5.2 Frontend Technologies

#### 5.2.1 Core Framework
- **React 18.3.1**
  - Component-based architecture
  - Virtual DOM for performance
  - Hooks for state management
  - Context API

#### 5.2.2 Language
- **TypeScript 5.6.2**
  - Static type checking
  - Enhanced IDE support
  - Better code documentation
  - Reduced runtime errors

#### 5.2.3 Build Tool
- **Vite 6.0.1**
  - Lightning-fast HMR
  - Optimized production builds
  - ES modules support
  - Plugin ecosystem

#### 5.2.4 Styling
- **Tailwind CSS 3.4.17**
  - Utility-first CSS framework
  - Responsive design utilities
  - Custom design system
  - JIT compiler for optimization

#### 5.2.5 UI Components
- **Shadcn/UI**
  - 40+ pre-built components
  - Accessible components
  - Customizable design
  - Based on Radix UI primitives

#### 5.2.6 Routing
- **React Router**
  - Client-side routing
  - Nested routes
  - Route protection
  - Navigation guards

#### 5.2.7 State Management
- **React Context + Hooks**
  - useState for local state
  - useEffect for side effects
  - useContext for global state
  - Custom hooks for reusability

#### 5.2.8 HTTP Client
- **Fetch API**
  - Native browser API
  - Promise-based
  - RESTful API calls

### 5.3 Development Tools

#### 5.3.1 Code Quality
- **ESLint 9.17.0**
  - JavaScript/TypeScript linting
  - Code style enforcement
  - Error detection

#### 5.3.2 Package Managers
- **npm** (Node Package Manager)
  - JavaScript package management
  - Script running
  - Dependency management

- **pip** (Python Package Installer)
  - Python package management
  - Virtual environment support

#### 5.3.3 Version Control
- **Git**
  - Source code management
  - Branch management
  - Collaboration

- **GitHub**
  - Remote repository hosting
  - Issue tracking
  - CI/CD integration

### 5.4 Deployment Technologies

#### 5.4.1 Platform Options
1. **Vercel**
   - Serverless deployment
   - Automatic HTTPS
   - Git integration
   - Edge network

2. **Railway**
   - Full-stack deployment
   - $5 monthly credit
   - Database hosting
   - Automatic scaling

3. **Render**
   - Free tier available
   - Auto-deploy from Git
   - Managed databases
   - Background workers

4. **PythonAnywhere**
   - Python-specific hosting
   - Free tier
   - Web-based console

#### 5.4.2 Database Hosting
- **Supabase**
  - Managed PostgreSQL
  - Automatic backups
  - Real-time capabilities
  - Built-in authentication
  - RESTful API
  - Dashboard UI

### 5.5 Security Technologies

#### 5.5.1 Authentication
- Django's built-in auth system
- Password hashing (PBKDF2)
- Session management
- CSRF tokens

#### 5.5.2 HTTPS/SSL
- Automatic HTTPS (platform-dependent)
- SSL certificate management
- Secure cookie transmission

#### 5.5.3 Database Security
- Connection pooling
- SQL injection prevention (ORM)
- Encrypted connections

### 5.6 Monitoring & Logging

#### 5.6.1 Logging
- Django logging framework
- Error tracking
- Access logs
- Debug information

#### 5.6.2 Performance
- WhiteNoise caching
- Database query optimization
- Static file compression

---

## 6. Database Design

### 6.1 Database Overview

**Database Type:** PostgreSQL 15.x  
**Hosting:** Supabase Cloud  
**Connection:** Transaction Pooler (Port 6543)  
**Location:** AWS Asia-Pacific (South) - Mumbai  

### 6.2 Entity-Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          USER                                    │
│─────────────────────────────────────────────────────────────────│
│ PK  id                    : INTEGER                             │
│     username              : VARCHAR(150)  [UNIQUE]              │
│     email                 : VARCHAR(254)  [UNIQUE]              │
│     password              : VARCHAR(128)  [HASHED]              │
│     first_name            : VARCHAR(150)                        │
│     last_name             : VARCHAR(150)                        │
│     phone                 : VARCHAR(20)                         │
│     role                  : VARCHAR(10)   [admin/user]          │
│     religious_preference  : VARCHAR(20)                         │
│     date_joined           : TIMESTAMP                           │
│     is_active             : BOOLEAN                             │
│     is_staff              : BOOLEAN                             │
│     is_superuser          : BOOLEAN                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ 1
                              │
                              │ *
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION                                 │
│─────────────────────────────────────────────────────────────────│
│ PK  id                    : INTEGER                             │
│ FK  user_id               : INTEGER  → User                     │
│ FK  accommodation_id      : INTEGER  → Accommodation            │
│     user_name             : VARCHAR(100)                        │
│     user_email            : VARCHAR(254)                        │
│     user_phone            : VARCHAR(20)                         │
│     message               : TEXT                                │
│     status                : VARCHAR(20) [Pending/Approved/Rejected]│
│     created_at            : TIMESTAMP                           │
└─────────────────────────────────────────────────────────────────┘
                              ▲
                              │ *
                              │
                              │ 1
                              │
┌─────────────────────────────────────────────────────────────────┐
│                     ACCOMMODATION                                │
│─────────────────────────────────────────────────────────────────│
│ PK  id                    : INTEGER                             │
│     title                 : VARCHAR(200)                        │
│     description           : TEXT                                │
│     type                  : VARCHAR(20) [Apartment/House/Room/...]│
│     location              : VARCHAR(100)                        │
│     address               : TEXT                                │
│     price                 : DECIMAL(10,2)                       │
│     religious_preference  : VARCHAR(20) [Muslim/Hindu/Christian...]│
│     status                : VARCHAR(20) [Available/Occupied/Pending]│
│     bedrooms              : INTEGER                             │
│     bathrooms             : DECIMAL(3,1)                        │
│     amenities             : JSON                                │
│     images                : JSON                                │
│     contact_email         : VARCHAR(254)                        │
│     contact_phone         : VARCHAR(20)                         │
│     created_at            : TIMESTAMP                           │
│     updated_at            : TIMESTAMP                           │
└─────────────────────────────────────────────────────────────────┘
```

### 6.3 Database Tables

#### 6.3.1 User Table (accommodation_user)

**Purpose:** Store user accounts with authentication and role information

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique user identifier |
| username | VARCHAR(150) | UNIQUE, NOT NULL | Login username |
| email | VARCHAR(254) | UNIQUE, NOT NULL | User email address |
| password | VARCHAR(128) | NOT NULL | Hashed password (PBKDF2) |
| first_name | VARCHAR(150) | NULLABLE | User's first name |
| last_name | VARCHAR(150) | NULLABLE | User's last name |
| phone | VARCHAR(20) | NULLABLE | Contact phone number |
| role | VARCHAR(10) | DEFAULT 'user' | User role (admin/user) |
| religious_preference | VARCHAR(20) | NULLABLE | Religious preference |
| date_joined | TIMESTAMP | DEFAULT NOW() | Account creation date |
| is_active | BOOLEAN | DEFAULT TRUE | Account active status |
| is_staff | BOOLEAN | DEFAULT FALSE | Staff access |
| is_superuser | BOOLEAN | DEFAULT FALSE | Superuser privileges |

**Indexes:**
- PRIMARY KEY on `id`
- UNIQUE INDEX on `username`
- UNIQUE INDEX on `email`
- INDEX on `role` for filtering
- INDEX on `religious_preference` for filtering

**Sample Data:**
```sql
INSERT INTO accommodation_user VALUES (
    1,
    'admin',
    'admin@ams.com',
    'pbkdf2_sha256$...',  -- Hashed password
    'Admin',
    'User',
    '+1234567890',
    'admin',
    'Any',
    '2025-01-01 10:00:00',
    TRUE,
    TRUE,
    TRUE
);
```

#### 6.3.2 Accommodation Table (accommodation_accommodation)

**Purpose:** Store accommodation listings with details and preferences

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique accommodation ID |
| title | VARCHAR(200) | NOT NULL | Accommodation title |
| description | TEXT | NOT NULL | Detailed description |
| type | VARCHAR(20) | NOT NULL | Type (Apartment/House/etc.) |
| location | VARCHAR(100) | NOT NULL | City/area location |
| address | TEXT | NOT NULL | Full address |
| price | DECIMAL(10,2) | NOT NULL, >= 0 | Monthly rent price |
| religious_preference | VARCHAR(20) | NOT NULL | Preferred religion |
| status | VARCHAR(20) | DEFAULT 'Available' | Availability status |
| bedrooms | INTEGER | NOT NULL, >= 0 | Number of bedrooms |
| bathrooms | DECIMAL(3,1) | NOT NULL, >= 0 | Number of bathrooms |
| amenities | JSON | DEFAULT '[]' | List of amenities |
| images | JSON | DEFAULT '[]' | Image URLs |
| contact_email | VARCHAR(254) | NOT NULL | Contact email |
| contact_phone | VARCHAR(20) | NOT NULL | Contact phone |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation timestamp |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update timestamp |

**Indexes:**
- PRIMARY KEY on `id`
- INDEX on `type` for filtering
- INDEX on `location` for searching
- INDEX on `religious_preference` for filtering
- INDEX on `status` for availability checks
- INDEX on `created_at` for ordering

**Sample Data:**
```sql
INSERT INTO accommodation_accommodation VALUES (
    1,
    'Modern 2BR Apartment',
    'Beautiful modern apartment with great amenities',
    'Apartment',
    'Dublin City',
    '123 Main Street, Dublin 1',
    1200.00,
    'Any',
    'Available',
    2,
    1.5,
    '["WiFi", "Parking", "Kitchen", "Laundry"]',
    '["https://example.com/image1.jpg"]',
    'contact@example.com',
    '+353-1-234-5678',
    '2025-01-01 10:00:00',
    '2025-01-01 10:00:00'
);
```

#### 6.3.3 Application Table (accommodation_application)

**Purpose:** Store accommodation applications with user messages and status

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique application ID |
| user_id | INTEGER | FOREIGN KEY → User(id), NOT NULL | Applicant user ID |
| accommodation_id | INTEGER | FOREIGN KEY → Accommodation(id), NOT NULL | Applied accommodation |
| user_name | VARCHAR(100) | NOT NULL | Applicant name (cached) |
| user_email | VARCHAR(254) | NOT NULL | Applicant email (cached) |
| user_phone | VARCHAR(20) | NOT NULL | Applicant phone (cached) |
| message | TEXT | NOT NULL | Application message |
| status | VARCHAR(20) | DEFAULT 'Pending' | Application status |
| created_at | TIMESTAMP | DEFAULT NOW() | Application date |

**Indexes:**
- PRIMARY KEY on `id`
- FOREIGN KEY on `user_id` → User(id) ON DELETE CASCADE
- FOREIGN KEY on `accommodation_id` → Accommodation(id) ON DELETE CASCADE
- INDEX on `status` for filtering
- INDEX on `created_at` for ordering
- COMPOSITE INDEX on (user_id, accommodation_id) for duplicate prevention

**Sample Data:**
```sql
INSERT INTO accommodation_application VALUES (
    1,
    2,  -- user_id
    1,  -- accommodation_id
    'John Doe',
    'john.doe@example.com',
    '+353-87-123-4567',
    'I am interested in this accommodation. I am a working professional looking for a quiet place.',
    'Pending',
    '2025-01-15 14:30:00'
);
```

### 6.4 Database Relationships

#### 6.4.1 One-to-Many Relationships

**User → Applications**
- One user can have many applications
- Foreign Key: Application.user_id → User.id
- Cascade Delete: When user is deleted, their applications are also deleted
- Related Name: `user.applications.all()`

**Accommodation → Applications**
- One accommodation can have many applications
- Foreign Key: Application.accommodation_id → Accommodation.id
- Cascade Delete: When accommodation is deleted, its applications are also deleted
- Related Name: `accommodation.applications.all()`

### 6.5 Database Constraints

#### 6.5.1 Check Constraints
```sql
-- Price must be non-negative
ALTER TABLE accommodation_accommodation
ADD CONSTRAINT price_non_negative CHECK (price >= 0);

-- Bedrooms must be non-negative
ALTER TABLE accommodation_accommodation
ADD CONSTRAINT bedrooms_non_negative CHECK (bedrooms >= 0);

-- Bathrooms must be non-negative
ALTER TABLE accommodation_accommodation
ADD CONSTRAINT bathrooms_non_negative CHECK (bathrooms >= 0);
```

#### 6.5.2 Unique Constraints
```sql
-- Username must be unique
ALTER TABLE accommodation_user
ADD CONSTRAINT unique_username UNIQUE (username);

-- Email must be unique
ALTER TABLE accommodation_user
ADD CONSTRAINT unique_email UNIQUE (email);

-- Prevent duplicate applications
ALTER TABLE accommodation_application
ADD CONSTRAINT unique_user_accommodation
UNIQUE (user_id, accommodation_id);
```

### 6.6 Database Migrations

**Migration History:**

1. **0001_initial.py** - Initial database schema
   - Created User model
   - Created Accommodation model
   - Created Application model
   - Set up foreign key relationships

2. **0002_alter_accommodation_religious_preference_and_more.py** - Field updates
   - Updated religious preference choices
   - Modified accommodation type choices
   - Updated application status choices

### 6.7 Database Queries

#### 6.7.1 Common Queries

**Get all available accommodations for a religious preference:**
```sql
SELECT * FROM accommodation_accommodation
WHERE (religious_preference = 'Muslim' OR religious_preference = 'Any')
  AND status = 'Available'
ORDER BY created_at DESC;
```

**Get user's application history:**
```sql
SELECT a.*, acc.title, acc.location
FROM accommodation_application a
JOIN accommodation_accommodation acc ON a.accommodation_id = acc.id
WHERE a.user_id = 2
ORDER BY a.created_at DESC;
```

**Get admin dashboard statistics:**
```sql
-- Total users
SELECT COUNT(*) FROM accommodation_user WHERE role = 'user';

-- Total accommodations
SELECT COUNT(*) FROM accommodation_accommodation;

-- Pending applications
SELECT COUNT(*) FROM accommodation_application WHERE status = 'Pending';

-- Approved applications
SELECT COUNT(*) FROM accommodation_application WHERE status = 'Approved';
```

**Search accommodations by location:**
```sql
SELECT * FROM accommodation_accommodation
WHERE location ILIKE '%Dublin%'
   OR address ILIKE '%Dublin%'
ORDER BY created_at DESC;
```

#### 6.7.2 Performance Optimization

**Index Usage:**
- Indexes created on frequently queried columns
- Composite indexes for common filter combinations
- Full-text search indexes for text fields

**Query Optimization:**
- Use of Django ORM's `select_related()` for foreign keys
- Use of `prefetch_related()` for reverse foreign keys
- Pagination to limit result sets
- Database connection pooling via Supabase

### 6.8 Backup & Recovery

**Supabase Automatic Backups:**
- Daily automated backups
- 7-day retention period
- Point-in-time recovery
- Manual backup options available

**Manual Backup Command:**
```bash
python manage.py dumpdata > backup.json
```

**Restore Command:**
```bash
python manage.py loaddata backup.json
```

---

## 7. Features & Functionality

### 7.1 User Authentication System

#### 7.1.1 User Registration
**Feature Description:**  
New users can create an account by providing required information including religious preference.

**Implementation Details:**
- Email-based registration
- Password strength validation
- Unique username and email enforcement
- Religious preference selection
- Automatic user role assignment ('user' by default)
- Email verification (optional feature)

**User Flow:**
1. User navigates to signup page
2. Fills registration form
3. System validates input
4. Password is hashed using PBKDF2
5. User record created in database
6. Auto-login after registration
7. Redirect to accommodations page

**Code Example:**
```python
# views.py
def auth_signup(request):
    if request.method == 'POST':
        form = UserSignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f'Welcome, {user.email}!')
            return redirect('accommodations')
    else:
        form = UserSignupForm()
    return render(request, 'accommodation/auth.html', {
        'mode': 'signup',
        'form': form
    })
```

#### 7.1.2 User Login
**Feature Description:**  
Registered users can securely log in to access system features.

**Implementation Details:**
- Email-based authentication
- Secure password verification
- Role-based redirection
- Session management
- "Remember me" functionality
- Failed login attempt tracking

**User Flow:**
1. User enters email and password
2. System queries user by email
3. Password verified against hash
4. Session created on success
5. Redirect based on role (admin → dashboard, user → accommodations)

**Security Features:**
- Password hashing (PBKDF2_SHA256)
- CSRF protection
- SQL injection prevention
- Brute force protection

#### 7.1.3 User Logout
**Feature Description:**  
Users can securely log out and end their session.

**Implementation Details:**
- Session termination
- Cookie cleanup
- Redirect to homepage
- Success message display

### 7.2 Accommodation Management

#### 7.2.1 Browse Accommodations
**Feature Description:**  
Users can view all available accommodations with filtering and search capabilities.

**Filter Options:**
1. **Religious Preference Filter**
   - Muslim
   - Hindu
   - Christian
   - Other
   - Any

2. **Accommodation Type Filter**
   - Apartment
   - House
   - Room
   - Studio
   - Shared

3. **Location Search**
   - City/area search
   - Address search
   - Partial matching

**Display Information:**
- Accommodation title
- Type and location
- Price per month
- Bedrooms and bathrooms count
- Religious preference badge
- Availability status
- Amenities list
- Contact information

**Implementation:**
```python
# Filter logic
accommodations_list = Accommodation.objects.all()

if religious_filter and religious_filter != 'Any':
    accommodations_list = accommodations_list.filter(
        Q(religious_preference=religious_filter) |
        Q(religious_preference='Any')
    )

if type_filter:
    accommodations_list = accommodations_list.filter(type=type_filter)

if location_search:
    accommodations_list = accommodations_list.filter(
        Q(location__icontains=location_search) |
        Q(address__icontains=location_search)
    )
```

#### 7.2.2 Create Accommodation (Admin Only)
**Feature Description:**  
Administrators can add new accommodation listings to the system.

**Required Fields:**
- Title (max 200 characters)
- Description (detailed text)
- Type (dropdown selection)
- Location (city/area)
- Full address
- Monthly price
- Religious preference
- Number of bedrooms
- Number of bathrooms
- Contact email
- Contact phone

**Optional Fields:**
- Amenities (multiple selection)
- Images (upload multiple)
- Status (default: Available)

**Validation Rules:**
- Price must be positive
- Email must be valid format
- Phone must be valid format
- At least one bedroom
- At least one bathroom

**Form Implementation:**
```python
class AccommodationForm(forms.ModelForm):
    class Meta:
        model = Accommodation
        fields = [
            'title', 'description', 'type', 'location',
            'address', 'price', 'religious_preference',
            'bedrooms', 'bathrooms', 'amenities', 'images',
            'contact_email', 'contact_phone', 'status'
        ]
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
            'address': forms.Textarea(attrs={'rows': 3}),
        }
```

#### 7.2.3 Edit Accommodation (Admin Only)
**Feature Description:**  
Administrators can update existing accommodation details.

**Editable Fields:**
- All accommodation fields
- Timestamps automatically updated

**User Flow:**
1. Admin clicks "Edit" on accommodation card
2. Form pre-populated with current data
3. Admin modifies required fields
4. Form validation on submit
5. Database updated
6. Success message displayed
7. Return to accommodations list

#### 7.2.4 Delete Accommodation (Admin Only)
**Feature Description:**  
Administrators can remove accommodations from the system.

**Implementation:**
- Confirmation dialog before deletion
- Cascade delete related applications
- Soft delete option (status = 'Deleted')
- Cannot be undone

**Safety Features:**
- Confirmation prompt
- Admin-only access
- Audit trail logging

### 7.3 Application Management

#### 7.3.1 Submit Application (User)
**Feature Description:**  
Users can apply for accommodations by submitting application forms.

**Application Form Fields:**
- Accommodation (auto-filled)
- Applicant name (auto-filled from user profile)
- Email (auto-filled)
- Phone (auto-filled)
- Custom message (required)

**Validation:**
- User cannot apply to same accommodation twice
- Message must be at least 50 characters
- User must be logged in
- Accommodation must be available

**Application Process:**
1. User clicks "Apply" on accommodation
2. Application form displayed
3. User writes custom message
4. Form submitted
5. Application created with "Pending" status
6. Admin notified (optional)
7. User confirmation message
8. Redirect to "My Applications"

#### 7.3.2 View My Applications (User)
**Feature Description:**  
Users can track their application history and status.

**Display Information:**
- Accommodation title and details
- Application date
- Current status (Pending/Approved/Rejected)
- Message submitted
- Status badges with colors:
  - Pending: Yellow
  - Approved: Green
  - Rejected: Red

**Statistics Shown:**
- Total applications
- Pending count
- Approved count
- Rejected count

**Code Implementation:**
```python
@login_required
def my_applications(request):
    applications_list = Application.objects.filter(
        user=request.user
    ).order_by('-created_at')
    
    context = {
        'applications': applications_list,
        'pending_count': applications_list.filter(status='Pending').count(),
        'approved_count': applications_list.filter(status='Approved').count(),
        'rejected_count': applications_list.filter(status='Rejected').count(),
        'total_count': applications_list.count(),
    }
    return render(request, 'accommodation/my_applications.html', context)
```

#### 7.3.3 View All Applications (Admin)
**Feature Description:**  
Administrators can view all applications submitted by users.

**Filtering Options:**
- Filter by status (All/Pending/Approved/Rejected)
- Filter by accommodation
- Filter by user
- Date range filtering

**Display Information:**
- Applicant name and contact
- Accommodation details
- Application message (preview + full view)
- Application date
- Current status
- Action buttons (Approve/Reject)

#### 7.3.4 Approve/Reject Applications (Admin)
**Feature Description:**  
Administrators can review and update application statuses.

**Actions Available:**
- **Approve**: Change status to "Approved"
- **Reject**: Change status to "Rejected"
- **View Full Message**: See complete application message

**Implementation:**
```python
@login_required
@user_passes_test(is_admin)
def update_application_status(request, application_id):
    if request.method == 'POST':
        application = get_object_or_404(Application, id=application_id)
        new_status = request.POST.get('status')
        
        if new_status in ['Approved', 'Rejected']:
            application.status = new_status
            application.save()
            messages.success(request, f'Application {new_status}!')
        
        return redirect('admin_dashboard')
```

**User Notification:**
- Email notification sent on status change (optional feature)
- In-app notification display
- SMS notification (future enhancement)

### 7.4 Admin Dashboard

#### 7.4.1 Dashboard Overview
**Feature Description:**  
Comprehensive admin control center with statistics and quick actions.

**Dashboard Sections:**

**1. Hero Section**
- Welcome message with admin name
- Pending applications count badge
- Quick action buttons:
  - Add New Accommodation
  - Manage All Users

**2. Statistics Cards**
Display real-time counts:
- Total Accommodations
  - Icon: Building
  - Color: Blue gradient
  - Count: All accommodations

- Total Applications
  - Icon: File
  - Color: Green gradient
  - Count: All applications

- Total Users
  - Icon: Users
  - Color: Purple gradient
  - Count: Non-admin users

- Pending Reviews
  - Icon: Clock
  - Color: Orange gradient
  - Count: Pending applications
  - Pulsing badge

**3. Tab Navigation**
Three main tabs:
- Accommodations Tab
- Applications Tab
- Users Tab

**Visual Design:**
- Gradient backgrounds
- Animated hover effects
- Glass morphism cards
- Icon animations
- Responsive grid layout

**Code Example:**
```python
@login_required
@user_passes_test(is_admin)
def admin_dashboard(request):
    context = {
        'accommodations': Accommodation.objects.all(),
        'applications': Application.objects.all().order_by('-created_at'),
        'users': User.objects.filter(role='user'),
        'total_users': User.objects.filter(role='user').count(),
        'pending_count': Application.objects.filter(status='Pending').count(),
    }
    return render(request, 'accommodation/admin.html', context)
```

#### 7.4.2 Accommodation Management Section
**Features:**
- List all accommodations
- Create new accommodation button
- Edit accommodation (icon button)
- Delete accommodation (icon button with confirmation)
- Search and filter capabilities
- Pagination (future enhancement)

**Display Format:**
- Card-based layout
- Accommodation image (if available)
- Title and type
- Location and price
- Religious preference badge
- Status indicator
- Quick action buttons

#### 7.4.3 Application Management Section
**Features:**
- List all applications
- Filter by status
- View application details
- Approve/Reject buttons (for pending only)
- View full message button
- Applicant contact information

**Status-Based Actions:**
- **Pending Applications**: Show Approve/Reject buttons
- **Approved Applications**: Show green check badge
- **Rejected Applications**: Show red X badge

#### 7.4.4 User Management Section
**Features:**
- List all registered users
- View user details
- Create new user
- Edit user information
- Change user role
- Delete user account
- View user's applications

**User Card Display:**
- User name and email
- Phone number
- Religious preference
- Role badge
- Join date
- "View Details" button

### 7.5 User Management (Admin)

#### 7.5.1 View All Users
**Feature Description:**  
Display all registered users with their information.

**Displayed Information:**
- Full name
- Email address
- Phone number
- Religious preference
- Role (Admin/User)
- Join date
- Active status

**Actions Available:**
- View full user details
- Edit user information
- Delete user account
- Change user role

#### 7.5.2 Create New User (Admin)
**Feature Description:**  
Administrators can manually create user accounts.

**Form Fields:**
- Username (unique)
- Email (unique)
- Password
- Confirm password
- First name
- Last name
- Phone number
- Religious preference
- Role (Admin/User)

**Validation:**
- Email format validation
- Password strength check
- Unique email/username check
- Phone format validation

#### 7.5.3 Edit User (Admin)
**Feature Description:**  
Administrators can modify user information.

**Editable Fields:**
- First name / Last name
- Email
- Phone
- Religious preference
- Role
- Active status

**Restrictions:**
- Cannot edit own admin role
- Email must remain unique
- Superuser status protected

#### 7.5.4 Delete User (Admin)
**Feature Description:**  
Administrators can remove user accounts.

**Process:**
- Confirmation dialog required
- Cascade delete user's applications
- Cannot delete own account
- Cannot be undone

**Safety Measures:**
- Two-step confirmation
- Admin-only access
- Audit logging

### 7.6 Additional Features

#### 7.6.1 About Page
**Content:**
- Project mission statement
- System overview
- Key features highlight
- Contact information
- Team information (optional)

#### 7.6.2 Contact Page
**Features:**
- Contact form
- Name, email, subject, message fields
- Form submission
- Success message
- Contact details display

**Contact Information Shown:**
- Email: support@ams.com
- Phone: +1 (800) AMS-HELP
- Address: 123 Housing Street, City, State
- Social media links (Facebook, Twitter)

#### 7.6.3 Navigation System
**Main Navigation (Header):**
- AMS Logo/Brand
- Home link
- About link
- Contact link
- Accommodations link (if logged in)
- My Applications link (for users)
- Admin link (for admins)
- Login/Signup buttons (if not logged in)
- Logout button (if logged in)

**Footer Navigation:**
- Quick links section
- Contact information
- Social media icons
- Copyright notice

#### 7.6.4 Responsive Design
**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

**Responsive Features:**
- Collapsible navigation menu
- Stacked cards on mobile
- Flexible grid layouts
- Touch-friendly buttons
- Optimized font sizes

### 7.7 Search & Filter System

#### 7.7.1 Religious Preference Filter
**Functionality:**
- Dropdown selection
- Options: Muslim, Hindu, Christian, Other, Any
- Shows accommodations matching selected preference
- Also shows "Any" preference accommodations

**Logic:**
```python
if religious_filter and religious_filter != 'Any':
    accommodations_list = accommodations_list.filter(
        Q(religious_preference=religious_filter) |
        Q(religious_preference='Any')
    )
```

#### 7.7.2 Accommodation Type Filter
**Functionality:**
- Dropdown selection
- Options: Apartment, House, Room, Studio, Shared
- Exact match filtering

#### 7.7.3 Location Search
**Functionality:**
- Text input search
- Searches in both location and address fields
- Case-insensitive partial matching
- Real-time results

### 7.8 Notification System

#### 7.8.1 Success Messages
**Displayed For:**
- Successful login
- Successful registration
- Accommodation created
- Application submitted
- Application status updated
- User created/updated/deleted

#### 7.8.2 Error Messages
**Displayed For:**
- Invalid login credentials
- Form validation errors
- Permission denied
- Database errors
- Network errors

#### 7.8.3 Message Display
- Toast notifications
- Auto-dismiss after 3 seconds
- Color-coded by type:
  - Success: Green
  - Error: Red
  - Warning: Yellow
  - Info: Blue

---

## 8. User Interface Design

### 8.1 Design System

#### 8.1.1 Color Palette

**Primary Colors:**
```css
--primary: #6366f1;        /* Indigo */
--primary-dark: #4f46e5;   /* Darker Indigo */
--primary-light: #818cf8;  /* Lighter Indigo */
```

**Secondary Colors:**
```css
--secondary: #8b5cf6;      /* Purple */
--accent: #10b981;         /* Green */
--warning: #f59e0b;        /* Orange */
--danger: #ef4444;         /* Red */
```

**Neutral Colors:**
```css
--dark: #1f2937;           /* Dark Gray */
--gray: #6b7280;           /* Medium Gray */
--light: #f3f4f6;          /* Light Gray */
--white: #ffffff;          /* White */
```

**Gradient Colors:**
```css
/* Primary Gradient */
background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);

/* Secondary Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Success Gradient */
background: linear-gradient(135deg, #10b981 0%, #059669 100%);

/* Warning Gradient */
background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
```

#### 8.1.2 Typography

**Font Family:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

**Font Sizes:**
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
```

**Font Weights:**
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

#### 8.1.3 Spacing System

**Spacing Scale:**
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
```

#### 8.1.4 Border Radius

```css
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-2xl: 1.5rem;     /* 24px */
--radius-full: 9999px;    /* Fully rounded */
```

#### 8.1.5 Shadows

```css
/* Small Shadow */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Medium Shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Large Shadow */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Extra Large Shadow */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### 8.2 Component Library

#### 8.2.1 Buttons

**Primary Button:**
```css
.btn-primary {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    color: white;
    padding: 0.625rem 1.25rem;
    border-radius: 0.75rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}
```

**Outline Button:**
```css
.btn-outline {
    background: white;
    color: var(--primary);
    border: 2px solid var(--primary);
    padding: 0.625rem 1.25rem;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-outline:hover {
    background: var(--primary);
    color: white;
}
```

**Danger Button:**
```css
.btn-danger {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    padding: 0.625rem 1.25rem;
    border-radius: 0.75rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
```

#### 8.2.2 Cards

**Basic Card:**
```css
.card {
    background: white;
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

**Gradient Card:**
```css
.card-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 1.5rem;
    padding: 3rem 2rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

#### 8.2.3 Forms

**Input Field:**
```css
.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

**Select Dropdown:**
```css
.form-select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 1rem;
    background-color: white;
    cursor: pointer;
}
```

**Textarea:**
```css
.form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 1rem;
    min-height: 120px;
    resize: vertical;
}
```

#### 8.2.4 Badges

**Status Badges:**
```css
/* Success Badge */
.badge-success {
    background: #d1fae5;
    color: #065f46;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
}

/* Warning Badge */
.badge-warning {
    background: #fef3c7;
    color: #92400e;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
}

/* Danger Badge */
.badge-danger {
    background: #fee2e2;
    color: #991b1b;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
}
```

### 8.3 Page Layouts

#### 8.3.1 Homepage Layout

**Structure:**
```
┌─────────────────────────────────────────┐
│           Navigation Bar                 │
├─────────────────────────────────────────┤
│                                          │
│           Hero Section                   │
│      (Gradient Background)               │
│        - Title                           │
│        - Subtitle                        │
│        - CTA Buttons                     │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│         Features Section                 │
│    (3-Column Grid on Desktop)            │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│      Call-to-Action Section              │
│      (Gradient Background)               │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│             Footer                       │
│    (3-Column: About, Links, Contact)    │
│                                          │
└─────────────────────────────────────────┘
```

**Hero Section Design:**
- Full-width gradient background
- Centered content
- Large heading (4rem)
- Animated floating circles background
- Two CTA buttons (side by side on desktop)

#### 8.3.2 Accommodations Page Layout

**Structure:**
```
┌─────────────────────────────────────────┐
│           Navigation Bar                 │
├─────────────────────────────────────────┤
│                                          │
│         Filter Section                   │
│  [Religious] [Type] [Location Search]   │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│    Accommodations Grid                   │
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Card 1 │  │ Card 2 │  │ Card 3 │   │
│  └────────┘  └────────┘  └────────┘   │
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Card 4 │  │ Card 5 │  │ Card 6 │   │
│  └────────┘  └────────┘  └────────┘   │
│                                          │
└─────────────────────────────────────────┘
```

**Filter Bar:**
- Sticky position on scroll
- White background with shadow
- Inline filter controls
- Clear filters button

**Accommodation Card:**
- Image placeholder
- Title and type
- Location and price
- Religious preference badge
- Amenities icons
- "Apply" button
- Hover lift effect

#### 8.3.3 Admin Dashboard Layout

**Structure:**
```
┌─────────────────────────────────────────┐
│           Navigation Bar                 │
├─────────────────────────────────────────┤
│                                          │
│          Hero Section                    │
│     (Admin Control Center)               │
│     - Welcome Message                    │
│     - Quick Actions                      │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│        Statistics Cards                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────┐│
│  │Accommo │ │ Applic │ │ Users  │ │Pend││
│  │dations │ │ ations │ │        │ │ing ││
│  └────────┘ └────────┘ └────────┘ └────┘│
│                                          │
├─────────────────────────────────────────┤
│                                          │
│            Tab Navigation                │
│  [Accommodations] [Applications] [Users]│
│                                          │
├─────────────────────────────────────────┤
│                                          │
│         Active Tab Content               │
│    (List with action buttons)            │
│                                          │
└─────────────────────────────────────────┘
```

**Hero Section Features:**
- Gradient background (#667eea → #764ba2)
- Animated floating circles
- Large heading (3rem)
- Pending count badge
- Two action buttons

**Statistics Cards:**
- 4-column grid on desktop
- Gradient icon circles
- Large numbers
- Descriptive labels
- Hover animation (lift + scale)

**Tab Content:**
- Smooth tab switching
- Section headers with icons
- List/grid layouts
- Action buttons per item
- Empty state messages

### 8.4 UI Patterns

#### 8.4.1 Glass Morphism

**Implementation:**
```css
.glass {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
}
```

**Usage:**
- Hero section buttons
- Modal backgrounds
- Overlay elements

#### 8.4.2 Gradient Backgrounds

**Hero Gradient:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Card Gradient:**
```css
background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
```

**Hover Gradient:**
```css
background: linear-gradient(135deg, #f9fafb 0%, #e0e7ff 100%);
```

#### 8.4.3 Animations

**Fade In Up:**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out;
}
```

**Float Animation:**
```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
```

**Pulse Animation:**
```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

#### 8.4.4 Hover Effects

**Card Hover:**
```css
.card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
}
```

**Button Hover:**
```css
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}
```

**Icon Hover:**
```css
.icon:hover {
    transform: scale(1.1) rotate(5deg);
}
```

### 8.5 Responsive Design

#### 8.5.1 Mobile Layout (< 640px)

**Changes:**
- Single column layouts
- Stacked navigation
- Full-width cards
- Larger touch targets (min 44px)
- Hamburger menu
- Reduced font sizes
- Compact spacing

**Grid Adjustments:**
```css
@media (max-width: 640px) {
    .grid {
        grid-template-columns: 1fr;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .stat-card {
        flex-direction: column;
    }
}
```

#### 8.5.2 Tablet Layout (640px - 968px)

**Changes:**
- 2-column grids
- Medium font sizes
- Adjusted spacing
- Side-by-side elements where appropriate

**Grid Adjustments:**
```css
@media (min-width: 640px) and (max-width: 968px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

#### 8.5.3 Desktop Layout (> 968px)

**Features:**
- Multi-column layouts
- Full navigation bar
- Larger images
- Hover effects enabled
- Maximum content width (1280px)
- Side padding for large screens

### 8.6 Accessibility

#### 8.6.1 Color Contrast

**WCAG AA Compliance:**
- Text on background: minimum 4.5:1 ratio
- Large text: minimum 3:1 ratio
- Interactive elements: clear visual indicators

#### 8.6.2 Keyboard Navigation

**Focus Indicators:**
```css
:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}

:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}
```

**Tab Order:**
- Logical tab sequence
- Skip to content link
- Focus trap in modals

#### 8.6.3 Screen Reader Support

**Semantic HTML:**
- Proper heading hierarchy (h1 → h6)
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for cards
- `<button>` for interactive elements

**ARIA Labels:**
```html
<button aria-label="Close dialog">×</button>
<input aria-label="Search accommodations" type="search">
<div role="alert" aria-live="polite">Success message</div>
```

### 8.7 Performance Optimizations

#### 8.7.1 CSS Optimization

- Minified CSS in production
- Critical CSS inlined
- Non-critical CSS loaded asynchronously
- CSS purging (unused styles removed)

#### 8.7.2 Image Optimization

- Lazy loading images
- Responsive images
- WebP format with fallbacks
- Proper image sizing

#### 8.7.3 Animation Performance

- Hardware-accelerated transforms
- `will-change` property for animated elements
- Debounced scroll events
- RequestAnimationFrame for smooth animations

---

*This documentation continues in the next sections covering Backend Implementation, Frontend Implementation, API Documentation, Security, Installation, Deployment, Testing, Performance Analysis, Research Findings, Future Enhancements, Troubleshooting, and Appendices.*

---

**Document Status:** Part 1 of 2 Complete  
**Next Sections:** 9-20  
**Total Pages:** Approximately 150-200 pages when complete  

Would you like me to continue with the remaining sections (9-20)?

