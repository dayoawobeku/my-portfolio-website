import React from 'react';

interface Props {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

function Input({label, type = 'text', id, placeholder, className = ''}: Props) {
  return (
    <>
      <label htmlFor={id} className={`flex flex-col text-body ${className}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full h-20 px-10 mt-4 rounded-sm bg-white-800"
      />
    </>
  );
}

function SmallerInput({
  label,
  type = 'text',
  id,
  placeholder,
  className = '',
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`flex flex-col text-body ${className}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full h-16 px-4 mt-2 rounded-sm bg-white-800"
      />
    </div>
  );
}

function Textarea({label, id, placeholder, className = ''}: Props) {
  return (
    <>
      <label htmlFor={id} className={`flex flex-col text-body ${className}`}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className="w-full px-10 pt-8 mt-4 rounded-sm h-60 bg-white-800"
      />
    </>
  );
}

export {Input, SmallerInput, Textarea};
