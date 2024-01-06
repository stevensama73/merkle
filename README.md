# Step Run Program

## Soal no 1
node generateNumber.js, lihat di console terminal/cmd untuk hasilnya

## Soal no 2
npm run start


### Add Guest
- **URL:** `/api/guest/add`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "nama": "John Doe",
    "alamat": "123 Main Street",
    "nomorTelepon": "123-456-7890",
    "catatan": "Lorem ipsum dolor sit amet."
  }
- **Response:**
  ```json
  {
    "message": "Data Guest berhasil ditambahkan."
  }
  
### Note Gallery
- **URL:** `api/note-gallery/notes`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
        "nama": "John Doe",
        "catatan": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]

### Login Admin
- **URL:** `api/auth/login`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "username": "john_doe",
    "password": "password123"
  }
- **Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwiaWF0IjoxNzA0NTIyMDQwLCJleHAiOjE3MDQ1MjU2NDB9.rfnNmKWL5yblGHl-xOteXkA05FtwdNANlQxl-HIEPuM"
  }

### Logout Admin
- **URL:** `api/auth/logout`
- **Method:** `POST`
- **Payload:**
  ```json
  {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwicGFzc3dvcmQiOiJwYXNzd29yZDEyMyIsImlhdCI6MTcwNDUyMzcwOSwiZXhwIjoxNzA0NTI3MzA5fQ.6ct2e6psya-_PCBr72v8tAMoUDXo5qDVI0o-i8FMtxU"
  }
- **Response:**
  ```json
  {
    "message": "Logout berhasil"
  }
  
### Get All Notes (Authorized)
- **URL:** `api/admin/notes`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwiaWF0IjoxNzA0NTIyMDQwLCJleHAiOjE3MDQ1MjU2NDB9.rfnNmKWL5yblGHl-xOteXkA05FtwdNANlQxl-HIEPuM"
  }
- **Payload:**
  ```json
  {
    "username": "john_doe",
    "password": "password123"
  }
- **Response:**
  ```json
  [
    {
        "id": 1,
        "nama": "John Doe",
        "alamat": "123 Main Street",
        "nomor_telepon": "123-456-7890",
        "catatan": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
  
### Get All Notes (Unauthorized)
- **URL:** `api/admin/notes`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "abc"
  }
- **Payload:**
  ```json
  {
    "username": "john_doe",
    "password": "password123"
  }
- **Response:**
  ```json
  {
    "error": "Unauthorized - Invalid token"
  }

Note: Buat satu file .env di root folder, kemudian isi SECRET_KEY=bebas
