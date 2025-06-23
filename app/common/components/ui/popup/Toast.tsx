import { useEffect, useState } from 'react';
import {
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  X,
} from 'lucide-react';

type ToastProps = {
  message: string;
  desc?: string;
  duration?: number;
  onClose: () => void;
  position?: 'top' | 'bottom';
  variant?: 'default' | 'info' | 'success' | 'error' | 'warning';
};

export default function Toast({
    message,
    desc = '',
    duration = 3000,
    onClose,
    position = 'top',
    variant = 'default',
  }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimeout = setTimeout(() => setVisible(false), duration);
    const removeTimeout = setTimeout(onClose, duration + 300);
    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, [duration, onClose]);

  const positionClass = position === 'top' ? 'top-4' : 'bottom-4';

  const iconMap = {
    default: '',
    info: <Info size={24} className="text-blue-500" />,
    success: <CheckCircle size={24} className="text-green-500" />,
    error: <XCircle size={24} className="text-rose-500" />,
    warning: <AlertTriangle size={24} className="text-yellow-500" />,
  };

  return (
    <div
      className={`
        fixed ${positionClass} inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2
        transform bg-white px-4 py-4 rounded-lg shadow-lg
        border border-slate-200 md:min-w-[460px]
        transition-opacity duration-300 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0'}
        z-50
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          <div className="flex items-center min-h-8 flex-shrink-0">{iconMap[variant]}</div>
          <div className="flex flex-col justify-center">
            <p className={`flex items-center min-h-8 ${desc ? 'font-bold' : ''}`}>{message}</p>
            {desc && <p className="text-slate-500 text-sm -mt-1">{desc}</p>}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex items-center h-8 px-1 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
