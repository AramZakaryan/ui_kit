import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...restProps
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      type={'button'}
      {...restProps}
    >
      {children}
    </Component>
  )
}

//
// const lala = () => {
//   return (
//     <button as={'a'} href={'sdfas'}>
//       lala
//     </button>
//   )
// }
