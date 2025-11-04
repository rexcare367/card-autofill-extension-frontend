import { AuthProvider, useAuth } from './contexts/AuthContext'
import { Auth } from './components/Auth'
import { Dashboard } from './components/Dashboard'
import { useEffect, useState } from 'react'

const AppContent = () => {
  const { user, loading } = useAuth()
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    // Detect if running in full-screen mode (opened in a tab) vs popup
    // Check if it's opened in a new tab or if the window is larger than popup size
    const isTab = window.innerWidth > 400 || window.innerHeight > 600
    setIsFullScreen(isTab)
  }, [])

  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 ${
        isFullScreen ? 'min-h-screen w-full' : 'h-[600px] w-[400px]'
      }`}>
        <div className="w-10 h-10 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    )
  }

  return user ? <Dashboard isFullScreen={isFullScreen} /> : <Auth isFullScreen={isFullScreen} />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
