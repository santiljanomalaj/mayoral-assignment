import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'neutral';
  children?: React.ReactNode;
}

export default function Button({
  onClick,
  disabled,
  children,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button className={`${styles[variant]}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
