interface FormInputProps {
  /** Unique identifier, used for both the input `id` and `name` attributes */
  id: string;
  /** Text displayed above the input */
  label: string;
  /** HTML input type (e.g. "text", "email"). Ignored when `rows` is set */
  type?: string;
  placeholder?: string;
  required?: boolean;
  /** When provided, renders a `<textarea>` instead of an `<input>` */
  rows?: number;
}

const INPUT_CLASS =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500";

/**
 * Labeled form field that renders as `<input>` or `<textarea>` depending on
 * whether the `rows` prop is provided. Shares consistent styling across both.
 */
export function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  required,
  rows,
}: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          className={INPUT_CLASS}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={INPUT_CLASS}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
