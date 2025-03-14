import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, ChevronRight } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const errorMessageClass = "mt-1 text-red-300 bg-red-900/40 text-sm flex items-center px-2 py-1 rounded-md border border-red-500/20";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3932] via-[#198754] to-[#FF6C37] flex items-center justify-center p-6">
      <div className="w-full max-w-md relative">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6C37]/20 rounded-full blur-2xl"></div>
        
        {/* Logo/Brand */}
        <div className="text-center mb-8 relative">
          <div className="relative inline-block">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6C37] font-['Orbitron'] transform hover:scale-105 transition-transform duration-200 cursor-default animate-pulse">
              SNAPFY
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF6C37] rounded-full blur-xl opacity-50 animate-pulse"></div>
          </div>
          <p className="text-white/70 mt-2 text-lg font-light tracking-wider">Welcome back</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#198754] via-[#1E3932] to-[#FF6C37]"></div>
          
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Login to Your Account</h2>
          
          {/* Google Sign In Button */}
          <button 
            type="button"
            className="w-full mb-6 py-3 px-6 bg-white rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6C37] transform hover:scale-105 transition-all duration-200 flex items-center justify-center group"
          >
            <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5 mr-3" />
            <span className="text-gray-800 font-medium">Continue with Google</span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-white/60 bg-[#1E3932]/50 backdrop-blur-xl rounded-full">or continue with</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6C37] text-white placeholder-white/50"
                {...register('username', {
                  required: 'Username is required'
                })}
              />
              {errors.username && (
                <p className={errorMessageClass}>
                  <span className="mr-1">⚠</span> {errors.username.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6C37] text-white placeholder-white/50 pr-10"
                  {...register('password', {
                    required: 'Password is required'
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className={errorMessageClass}>
                  <span className="mr-1">⚠</span> {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a 
                href="/forgot-password"
                className="text-[#1E3932] hover:text-white transition-colors text-sm relative group"
              >
                Forgot Password?
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#1E3932] text-white rounded-xl hover:bg-[#198754] focus:outline-none focus:ring-2 focus:ring-[#FF6C37] focus:ring-offset-2 focus:ring-offset-[#1E3932] transform hover:scale-105 transition-all duration-200 flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Login
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#198754] to-[#1E3932] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-white/70 mt-6">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-[#1E3932] hover:text-white hover:underline transition-colors relative group">
                Sign up
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;