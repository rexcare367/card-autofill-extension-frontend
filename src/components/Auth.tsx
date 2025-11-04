import { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { Settings } from './Settings'

interface AuthProps {
  isFullScreen?: boolean
}

export const Auth = ({ isFullScreen = false }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className={`flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative ${
      isFullScreen ? 'min-h-screen w-full' : 'h-[600px] w-[400px]'
    }`}>
      {/* Settings Button */}
      <div className="absolute top-4 right-4">
        <Settings variant="light" />
      </div>
      
      <div className="w-full max-w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
          Card Autofill
        </h1>
        
        {isLogin ? (
          <SignIn onSwitchToSignUp={() => setIsLogin(false)} />
        ) : (
          <SignUp onSwitchToSignIn={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  )
}
