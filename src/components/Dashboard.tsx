import { useAuth } from '../contexts/AuthContext'
import { Settings } from './Settings'

interface DashboardProps {
  isFullScreen?: boolean
}

export const Dashboard = ({ isFullScreen = false }: DashboardProps) => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className={`flex flex-col bg-gradient-to-br from-primary-500 to-primary-700 ${
      isFullScreen ? 'min-h-screen w-full' : 'w-[400px] h-[600px]'
    }`}>
      {/* Header */}
      <div className="px-6 py-5 flex justify-between items-center bg-white/10 backdrop-blur-sm">
        <h1 className="text-lg font-semibold text-white">
          Card Autofill Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <Settings variant="dark" />
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg text-sm
                     hover:bg-white/30 transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white dark:bg-gray-900 rounded-t-3xl flex flex-col gap-6">
        {/* Welcome Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back!
          </h2>
          <p className="text-primary-500 text-sm font-medium">
            {user?.email}
          </p>
        </div>

        {/* Info Card */}
        <div className="p-4 bg-gradient-to-br from-primary-500/10 to-primary-700/10 
                      border border-primary-500/20 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🎉 Authentication Successful
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            You are now logged in to the Card Autofill Extension.
          </p>
        </div>

        {/* Features Section */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Features
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-700 dark:text-gray-300 text-sm pl-2">
              ✓ Secure authentication with Supabase
            </li>
            <li className="text-gray-700 dark:text-gray-300 text-sm pl-2">
              ✓ Persistent login sessions
            </li>
            <li className="text-gray-700 dark:text-gray-300 text-sm pl-2">
              ✓ Easy access from browser toolbar
            </li>
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-4 rounded-xl text-center text-white">
            <div className="text-2xl font-bold mb-1">0</div>
            <div className="text-xs opacity-90">Saved Cards</div>
          </div>
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-4 rounded-xl text-center text-white">
            <div className="text-2xl font-bold mb-1">0</div>
            <div className="text-xs opacity-90">Autofills</div>
          </div>
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-4 rounded-xl text-center text-white">
            <div className="text-2xl font-bold mb-1">Active</div>
            <div className="text-xs opacity-90">Status</div>
          </div>
        </div>
      </div>
    </div>
  )
}
