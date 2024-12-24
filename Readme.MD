## Project Setup

### Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the backend server using PM2:
   ```sh
   pm2 start index.js
   ```
4. The backend server will be hosted on port `3001` on your EC2 instance.

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend/vite-project
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

### Technologies Used

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React
- **Process Management**: PM2

### Notes

- Ensure MongoDB is running and properly configured.
- Update any necessary environment variables before starting the servers.
- For detailed instructions, refer to the respective documentation of each technology.
