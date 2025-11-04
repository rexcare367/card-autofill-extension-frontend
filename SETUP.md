# Quick Setup Guide

Follow these steps to get your Chrome extension up and running:

## Step 1: Install Dependencies

Open a terminal in the `card-autofill-extension-frontend` directory and run:

```bash
npm install
```

This will install all dependencies including:
- React & TypeScript
- Vite (build tool)
- Tailwind CSS (styling framework)
- Supabase client
- Chrome types

## Step 2: Set Up Supabase

If you haven't already:

1. Go to [https://supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Wait for the project to be provisioned (takes ~2 minutes)

## Step 3: Get Your Supabase Credentials

1. In your Supabase project dashboard, click on the **Settings** icon (gear icon)
2. Click on **API** in the left sidebar
3. You'll see two important values:
   - **Project URL** (starts with `https://` and ends with `.supabase.co`)
   - **anon/public key** (long string under "Project API keys")

## Step 4: Create .env File

Create a file named `.env` in the `card-autofill-extension-frontend` folder:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the placeholder values with your actual Supabase credentials.

## Step 5: Build the Extension

```bash
npm run build
```

This creates a `dist` folder with your compiled extension.

## Step 6: Load Extension in Chrome

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Toggle **Developer mode** ON (top-right corner)
4. Click **Load unpacked** button
5. Navigate to and select the `dist` folder inside `card-autofill-extension-frontend`
6. The extension should now appear in your extensions list!

## Step 7: Test the Extension

1. Click the extension icon in your Chrome toolbar (you may need to pin it first)
2. You should see the login/register page
3. Create a new account or sign in
4. After authentication, you'll be redirected to the dashboard
5. Close and reopen the popup - you should stay logged in!

## Troubleshooting

### "Missing Supabase environment variables" Error

- Make sure your `.env` file is in the correct directory
- Check that the variable names start with `VITE_` (required by Vite)
- Rebuild the extension after creating/modifying `.env`

### Extension Doesn't Appear

- Make sure you loaded the `dist` folder, not the root project folder
- Check that the build completed successfully
- Look for errors in `chrome://extensions/`

### Authentication Errors

- Verify your Supabase credentials are correct
- Check that your Supabase project is active
- Look at the browser console (F12) for error messages

### Changes Not Showing

After making code changes:
1. Run `npm run build` again
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension card

## Development Tips

- Each time you change the code, you need to rebuild and reload the extension
- Use the browser console (F12) to debug issues
- Check the background service worker logs in `chrome://extensions/` for errors

## Next Steps

Now that authentication is working, you can:
- Add card storage functionality
- Implement autofill features
- Add more pages and features to the dashboard
- Style the extension further

Enjoy building! 🚀

