import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type Props = ButtonProps | LinkProps

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary-700 text-white hover:bg-primary-600 active:bg-primary-800 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2',
  secondary:
    'bg-accent-500 text-primary-900 hover:bg-accent-400 active:bg-accent-600 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100 border border-primary-700 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold rounded transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed'

export function Button(props: Props) {
  if (props.href !== undefined) {
    const {
      href,
      variant = 'primary',
      size = 'md',
      className = '',
      ...linkRest
    } = props as LinkProps
    const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className].join(' ')
    return <Link href={href} className={classes} {...linkRest} />
  }

  const { variant = 'primary', size = 'md', className = '', ...btnRest } = props as ButtonProps
  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className].join(' ')
  return <button className={classes} {...btnRest} />
}
