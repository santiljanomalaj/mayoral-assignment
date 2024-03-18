import styles from './TextField.module.css';

interface CustomTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export default function TextField({
  value,
  onChange,
  placeholder,
  disabled,
  icon,
}: CustomTextInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <label className={styles.container}>
      {icon}
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
