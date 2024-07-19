import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  className,
  fullWidth,
  variant = 'primary',
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      type={'button'}
      {...restProps}
    />
  )
}
