interface Props {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

function Input({
  label,
  type = 'text',
  id,
  placeholder,
  className = '',
  required,
  value,
  onChange,
}: Props) {
  return (
    <>
      <label
        htmlFor={id}
        className={`flex flex-col text-body dark:text-white-700 ${className}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full h-20 px-10 mt-4 rounded-sm bg-white-700 dark:text-grey"
        required={required}
        value={value}
        onChange={onChange}
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
  required,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className={`flex flex-col text-body dark:text-white-700 ${className}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full h-16 px-4 mt-2 rounded-sm bg-white-700 dark:text-grey"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function Textarea({
  label,
  id,
  placeholder,
  className = '',
  required,
  value,
  onChange,
}: Props) {
  return (
    <>
      <label
        htmlFor={id}
        className={`flex flex-col text-body dark:text-white-700 ${className}`}
      >
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className="w-full px-10 pt-8 mt-4 rounded-sm h-60 bg-white-700 dark:text-grey"
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export {Input, SmallerInput, Textarea};
