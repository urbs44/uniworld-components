"use client";

import React, { useState, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toastVariants = cva(
  "fixed flex items-center w-auto max-w-md p-4 mb-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-800 border-gray-200 border",
        success: "bg-green-50 text-green-800 border-green-200 border",
        error: "bg-red-50 text-uniworld-red border-uniworld-red/20 border",
        warning: "bg-yellow-50 text-yellow-800 border-yellow-200 border",
        info: "bg-blue-50 text-uniworld-blue border-uniworld-blue/20 border",
      },
      position: {
        "top-right": "top-4 right-4",
        "top-left": "top-4 left-4",
        "bottom-right": "bottom-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "top-center": "top-4 left-1/2 -translate-x-1/2",
        "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
      },
      visible: {
        true: "opacity-100 translate-y-0",
        false: "opacity-0 translate-y-2",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "top-right",
      visible: false,
    },
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  message: string;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const Toast = ({
  className,
  variant,
  position,
  message,
  duration = 5000,
  onClose,
  showCloseButton = true,
  ...props
}: ToastProps) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle closing the toast
  const handleClose = () => {
    setVisible(false);
    
    // Call onClose after animation completes
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Match the transition duration
  };

  useEffect(() => {
    // Show the toast
    setVisible(true);

    // Hide the toast after duration
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      handleClose();
    }, duration);

    // Cleanup function
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [duration, message]); // Add message as a dependency to reset timer when message changes

  return (
    <div
      className={cn(toastVariants({ variant, position, visible }), className)}
      role="alert"
      {...props}
    >
      <div className="flex-grow mr-2">{message}</div>
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

// Toast Container to manage multiple toasts
export interface ToastContainerProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
  children?: React.ReactNode;
}

export const ToastContainer = ({ position = "top-right", children }: ToastContainerProps) => {
  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2",
        position === "top-right" && "top-4 right-4",
        position === "top-left" && "top-4 left-4",
        position === "bottom-right" && "bottom-4 right-4",
        position === "bottom-left" && "bottom-4 left-4",
        position === "top-center" && "top-4 left-1/2 -translate-x-1/2",
        position === "bottom-center" && "bottom-4 left-1/2 -translate-x-1/2"
      )}
    >
      {children}
    </div>
  );
};

// Toast context for global toast management
type ToastType = {
  id: string;
  message: string;
  variant?: "default" | "success" | "error" | "warning" | "info";
  duration?: number;
};

interface ToastContextType {
  toasts: ToastType[];
  addToast: (toast: Omit<ToastType, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (toast: Omit<ToastType, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer position="top-right">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}; 