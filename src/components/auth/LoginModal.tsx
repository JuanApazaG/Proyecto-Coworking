import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      onClose(); // Cerrar el modal si el inicio de sesión es exitoso
    } catch (error: any) {
      // Manejar diferentes tipos de errores de Firebase
      switch (error.code) {
        case 'auth/invalid-email':
          setError('El correo electrónico no es válido');
          break;
        case 'auth/user-disabled':
          setError('Esta cuenta ha sido deshabilitada');
          break;
        case 'auth/user-not-found':
          setError('No existe una cuenta con este correo electrónico');
          break;
        case 'auth/wrong-password':
          setError('Contraseña incorrecta');
          break;
        default:
          setError('Error al iniciar sesión. Por favor, intenta de nuevo');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);
    try {
      await signInWithGoogle();
      onClose(); // Cerrar el modal si el inicio de sesión es exitoso
    } catch (error: any) {
      // Puedes manejar errores específicos de Google si es necesario
      setError('Error al iniciar sesión con Google. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          disabled={isLoading}
        >
          <FcGoogle size={24} className="mr-2" />
          Continuar con Google
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O inicia sesión con</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-900 text-white py-2 px-4 rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <button 
              onClick={onSwitchToRegister}
              className="text-primary-900 hover:text-primary-800 font-medium"
            >
              Regístrate
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 