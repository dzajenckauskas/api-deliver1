# API Deliver1 - Strapi CMS

## Overview
API Deliver1 is the backend system for Deliver1, an international moving service offering door-to-door shipping via sea, road, and air. This project is built with Strapi CMS to manage content and provide a robust API for the frontend application.

Website: [www.api.deliver1.co.uk](https://www.api.deliver1.co.uk)

## Tech Stack
- **Backend:** Strapi CMS (Headless CMS)
- **Database:** PostgreSQL
- **Authentication:** JWT-based authentication
- **Deployment:** VPS (Linux-based)

## Features
- **Custom API endpoints** to manage shipping services and customer bookings.
- **Admin panel** for content and order management.
- **Multi-role user authentication** for admins and customers.
- **SEO-friendly content management** for better discoverability.
- **Secure REST API** with authentication and role-based permissions.

## Setup & Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- PostgreSQL

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/dzajenckauskas/api-deliver1.git
   cd api-deliver1
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database connection, Strapi admin credentials).
4. Run database migrations and seed data if necessary.
5. Start the development server:
   ```sh
   npm run develop  # or yarn develop
   ```
6. Access the Strapi admin panel at `http://localhost:1337/admin`.

## Deployment
- The project is deployed on a VPS with Nginx as a reverse proxy.
- Uses **PM2** for process management.
- CI/CD automation with **GitHub Actions**.

## Future Improvements
- Implement **GraphQL API** support.
- Add **multi-language content management**.
- Enhance **security and performance** optimizations.

## Contributing
Contributions are welcome! Feel free to fork the repo, submit issues, or suggest improvements.

## License
This project is licensed under the MIT License.

---
For any inquiries or collaborations, reach out via [GitHub](https://github.com/dzajenckauskas/).

