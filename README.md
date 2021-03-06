
This is [Next.js](https://nextjs.org/) project SignIn with google auth with postgresql database and docker.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


Then change directory to backend:
Open terminal and run
```bash 
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
this will open the Next.js app

Open [http://localhost:1337](http://localhost:1337) with your browser.

1. You will see strapi admin backend
2. Create account and login to get started.
3. Open Roles and permissions tab on the sidebar. 
4. Click on the providers tab and enable google.

## Create Google Oath Client

1. Open new tab and navigate to Google console[Google Client Oauth](https://console.cloud.google.com/apis/credentials/oauthclient)
2. Create a New Project
3. Create new Oauth App
4. Choose web application
5. Add authorized redirect urls
```
http://localhost:3000/api/auth/callback/google

http://localhost:1337/connect/google/callback
```

### Create .env file
Navigate to root directory and create .env file
Add the following to the file

```
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_DATABASE_URL=postgres://strapi:strapi@localhost:5432/strapi?synchronize=true
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID="12345.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="1234-567-9"
```

Replace the GOOGLE_CLIENT_SECRET and GOOGLE_CLIENT_ID WITH your secret and client id respectively 