# AssetVerse

## Project Name
AssetVerse

## Purpose
AssetVerse is a B2B Corporate Asset Management System designed to help organizations manage physical assets such as laptops, chairs, keyboards, and other equipment.  
The client application provides a modern, responsive, and role-based interface for HR Managers and Employees to manage assets efficiently.

---

## Live Site
Live URL: https://asset-verse-client.web.app

---

## User Roles

### HR Manager
- Add, edit, and delete company assets
- Approve or reject employee asset requests
- View and manage affiliated employees
- Upgrades subscription packages
- Has full administrative access
- Can directly assign assets to already-affiliated employees
- Manage personal profile information

### Employee
- Request assets from multiple companies
- View assigned assets from all companies
- Return returnable assets
- View team members per company
- Manage personal profile information

---

## Key Features
- Firebase Authentication (Email & Password)
- JWT-based protected routes
- Role-based dashboard (HR & Employee)
- Asset request and approval workflow
- Auto employee affiliation on first approval
- Multi-company support for employees
- Stripe payment integration for package upgrades
- Recharts analytics dashboard
- Asset printing / PDF generation
- Fully responsive design (Mobile, Tablet, Desktop)
- DaisyUI based professional UI

---

## npm Packages Used
- React
- React Router
- Firebase Authentication
- Axios
- TanStack React Query
- Tailwind CSS
- DaisyUI
- Framer Motion
- Recharts
- React Hook Form
- React To Print
- SweetAlert2
- Lottie React  

---  

## Setup Instructions

1. Clone the client repository  
   git clone https://github.com/your-username/asset-verse-client.git

2. Navigate to the project directory  
   cd asset-verse-client

3. Install all dependencies  
   npm install

4. Run the development server  
   npm run dev

5. Open the project in your browser  
   http://localhost:5173  

---  

## Environment Variables Configuration

Create a `.env` file in the root directory of the client project and add the following variables:

VITE_API_KEY=your_firebase_api_key  
VITE_AUTH_DOMAIN=your_firebase_auth_domain  
VITE_PROJECT_ID=your_firebase_project_id  
VITE_STORAGE_BUCKET=your_firebase_storage_bucket  
VITE_MESSAGING_SENDER_ID=your_firebase_sender_id  
VITE_APP_ID=your_firebase_app_id  
VITE_IMAGE_HOST_KEY=your_imagebb_api_key
