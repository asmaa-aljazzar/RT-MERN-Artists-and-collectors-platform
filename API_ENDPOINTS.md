# RT API Endpoints

## MVP 
| Method | Path | Access | Success status | Purpose |
|---|---|---|---:|---|
| GET | /api/health | Public | 200 | Check server and database health |
| POST | /api/auth/register | Public | 201 | Create a new account/user |
| POST | /api/auth/login | Public | 200 | User Login to system |
| POST | /api/auth/logout | Authenticated | 204 | User Logout |
| GET | /api/auth/me | Authenticated | 200 | get the current user |
| GET | /api/artworks | Public | 200 | Browse artworks |
| GET | /api/artworks/:id | Public | 200 | View one artwork |
| POST | /api/artworks | Artist only | 201 | Create artwork |
| PATCH | /api/artworks/:id | Artwork owner only| 200 | Update artwork |
| DELETE | /api/artworks/:id | Artwork owner only | 204 | Delete artwork |
| POST | /api/artworks/:id/likes | Authenticated | 201 | Like artwork |
| DELETE | /api/artworks/:id/likes | Authenticated | 204 | Unlike artwork |
| POST | /api/artworks/:id/saves | Authenticated | 201 | Save |
| DELETE | /api/artworks/:id/saves | Authenticated | 204 | Unsave |
| GET | /api/users/me/saved-artworks | Authenticated | 200 | View your saved artworks |
| GET | /api/users/:id | Public | 200 | View a public profile |
| GET | /api/users/me | Authenticated | 200 | View your own profile |
| PATCH | /api/users/me | Authenticated | 200 | Update your own profile |

## Post MVP Routes

| Method | Path | Access | Success status | Purpose |
|---|---|---|---:|---|
| POST | /api/auth/forgot-password | Public | 201 | write email to get lindk |
| POST | /api/auth/reset-password/:token | Authenticated | 201 | Reset a new password |
| GET | /api/users/followers | Public | 200 | Get all followers |
| GET | /api/users/follows | Public | 200 | Get all following |
| POST | /api/users/:id/follows | Authenticated | 201 | Follow user |
| DELETE | /api/users/:id/follows | Authenticated | 204 | Unollow user |
| POST | /api/artworks/payment | Authenticated | 201 | Payments |
| GET | /api/users/:id | Admin only | 200 | Administrator audit |
| POST | /api/users/ban | Admin only | 201 | Ban user |
| DELETE | /api/users/ban | Admin only | 204 | Unban user |
| DELETE | /api/users/my-profile | Authenticated | 204 | Delete your profile | 
