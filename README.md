# Card Autofill Extension - Frontend

A Chrome extension popup built with React, Vite, and Supabase authentication.

## Features

- 🔐 **Supabase Authentication**: Secure login/register with email and password
- 💾 **Persistent Sessions**: Authentication state is saved in Chrome's local storage
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR
- 🎨 **Modern UI**: Beautiful, responsive design with gradient styling
- 🌓 **Dark Mode Support**: Automatically adapts to system color scheme

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account and project

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

To get these values:
1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings > API
4. Copy the `Project URL` and `anon/public` key

### 3. Build the Extension

```bash
npm run build
```

This will create a `dist` folder with the compiled extension.

### 4. Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select the `dist` folder from this project
5. The extension icon should appear in your Chrome toolbar

## Development

### Run Development Server

```bash
npm run dev
```

This starts the Vite dev server. However, note that Chrome extensions need to be built and loaded as unpacked extensions to work properly.

### Project Structure

```
card-autofill-extension-frontend/
├── public/
│   └── manifest.json          # Chrome extension manifest
├── src/
│   ├── components/
│   │   ├── Auth.tsx           # Login/Register component
│   │   └── Dashboard.tsx      # Main dashboard after login
│   ├── contexts/
│   │   └── AuthContext.tsx    # Authentication context provider
│   ├── lib/
│   │   └── supabase.ts        # Supabase client configuration
│   ├── styles/
│   │   ├── Auth.css           # Auth page styles
│   │   └── Dashboard.css      # Dashboard styles
│   ├── App.tsx                # Main app component
│   ├── App.css                # App-level styles
│   ├── main.tsx               # Entry point
│   ├── index.css              # Global styles
│   └── vite-env.d.ts          # TypeScript declarations
├── .env                       # Environment variables (create this)
├── .gitignore
├── index.html                 # HTML entry point
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts             # Vite configuration
```

## How It Works

### Authentication Flow

1. **Initial Load**: When the extension icon is clicked, it checks for an existing session
2. **No Session**: Shows the login/register page
3. **Login/Register**: User enters credentials and authenticates via Supabase
4. **Session Storage**: Supabase session is stored in Chrome's local storage
5. **Redirect**: After successful auth, user is redirected to the dashboard
6. **Persistence**: On subsequent opens, the session is automatically restored

### Key Technologies

- **React**: UI library for building the interface
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Supabase**: Backend-as-a-Service for authentication
- **Chrome Extensions API**: For storage and extension functionality

### Supabase Integration

The extension uses a custom storage adapter to persist Supabase sessions in Chrome's local storage:

```typescript
storage: {
  getItem: async (key) => chrome.storage.local.get([key]),
  setItem: async (key, value) => chrome.storage.local.set({ [key]: value }),
  removeItem: async (key) => chrome.storage.local.remove([key])
}
```

This ensures that users remain logged in even after closing the browser.

## Customization

### Icons

Replace the placeholder icon references in `public/manifest.json` with your own icons:
- `icon16.png` - 16x16 pixels
- `icon48.png` - 48x48 pixels
- `icon128.png` - 128x128 pixels

### Styling

The project uses **Tailwind CSS** for styling:
- Configuration: `tailwind.config.js`
- Global styles and Tailwind imports: `src/index.css`
- All component styles use Tailwind utility classes
- Automatic dark mode support using Tailwind's `dark:` variant
- Custom color palette defined in Tailwind config

## Troubleshooting

### "Missing Supabase environment variables" error

Make sure you've created a `.env` file with the correct Supabase credentials.

### Extension doesn't load

1. Check that you've run `npm run build`
2. Make sure you're loading the `dist` folder, not the root folder
3. Check the Chrome Extensions page for error messages

### Authentication not persisting

Check that the extension has the `storage` permission in `manifest.json`.

## Security Notes

- Never commit your `.env` file
- The Supabase anon key is safe to expose in client-side code
- For production, consider implementing Row Level Security (RLS) in Supabase
- Always use HTTPS in production

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
