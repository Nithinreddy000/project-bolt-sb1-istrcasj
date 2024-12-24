import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea = ({ label, error, ...props }: TextAreaProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      {...props}
      className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-colors
        ${error ? 'border-red-500' : 'border-gray-600'}`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-500">{error}</p>
    )}
  </div>
);