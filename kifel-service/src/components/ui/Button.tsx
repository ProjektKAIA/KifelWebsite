import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 transform hover:scale-105';
  const variants = {
    primary: 'bg-[#2b4c8c] hover:bg-[#1e3a6e] text-white shadow-lg hover:shadow-[#2b4c8c]/25',
    secondary: 'bg-[#1e3a6e] hover:bg-[#162d57] text-white shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-slate-900',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
