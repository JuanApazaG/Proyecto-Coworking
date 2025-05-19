import React from 'react';
import { MapPin } from 'lucide-react';

interface LogoProps {
  color?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ color = 'currentColor', size = 24 }) => {
  return (
    <div className={`w-${size / 4} h-${size / 4} relative`}>
      <MapPin size={size} color={color} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-1.5 h-1.5 rounded-full bg-accent-900`}></div>
      </div>
    </div>
  );
};

export default Logo;