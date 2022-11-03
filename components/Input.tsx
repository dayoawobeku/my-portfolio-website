interface Props {
  label: string;
  id: string;
  type?: string;
  name?: string;
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
  name,
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
        className="mt-4 h-20 w-full rounded-sm bg-white-700 px-6 dark:text-grey lg:px-10"
        required={required}
        value={value}
        onChange={onChange}
        name={name}
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
        className="mt-2 h-16 w-full rounded-sm bg-white-700 px-4 dark:text-grey"
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
  name,
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
        className="mt-4 h-60 w-full rounded-sm bg-white-700 px-6 pt-8 dark:text-grey lg:px-10"
        required={required}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
}

export {Input, SmallerInput, Textarea};
