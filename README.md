## 🚀 Project Features

- Responsive Login Page UI (based on provided design)
- API Integration with `https://dummyjson.com/auth/login`
- Axios Interceptor for API calls
- Form validation

## 🛠 Tech Stack

- ReactJS (with Vite or Create React App)
- Axios for API requests
- TailwindCSS
- Git & GitHub for version control

## 🔁 Dummy API Info

**Endpoint:**  
`POST https://dummyjson.com/auth/login`

**Request Body:**
```json
{
  "username": "emilys",
  "password": "emilyspass",
  "expiresInMins": 30
}
```

**Expected Response:**
- A mock token and user info if credentials are valid.