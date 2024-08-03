import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

// Mapping variant to element type
const variantToElement = {
  Body1: 'p',
  Body2: 'p',
  Caption: 'span',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  Link1: 'a',
  Link2: 'a',
  Overline: 'p',
  Subtitle1: 'p',
  Subtitle2: 'p',
} as const

// Utility type to map variant to element type
type VariantToElementType = typeof variantToElement

// Extract the element type based on the variant
type ElementTypeForVariant<V extends keyof VariantToElementType> = VariantToElementType[V]

type TypographyProps<V extends keyof VariantToElementType> = {
  children: ReactNode
  className?: string
  variant: V
} & ComponentPropsWithoutRef<ElementTypeForVariant<V>>

export const Typography = <V extends keyof VariantToElementType>(props: TypographyProps<V>) => {
  const { children, className, variant, ...restProps } = props
  const Component = variantToElement[variant] as ElementType

  return (
    <>
      <Component className={clsx(s.typography, s[variant], className)} {...restProps}>
        {children}
      </Component>
    </>
  )
}

export const H1 = ({ children, ...props }: Omit<TypographyProps<'H1'>, 'variant'>) => (
  <Typography {...props} variant={'H1'}>
    {children}
  </Typography>
)

export const H2 = ({ children, ...props }: Omit<TypographyProps<'H2'>, 'variant'>) => (
  <Typography {...props} variant={'H2'}>
    {children}
  </Typography>
)

export const H3 = ({ children, ...props }: Omit<TypographyProps<'H3'>, 'variant'>) => (
  <Typography {...props} variant={'H3'}>
    {children}
  </Typography>
)

export const H4 = ({ children, ...props }: Omit<TypographyProps<'H4'>, 'variant'>) => (
  <Typography {...props} variant={'H4'}>
    {children}
  </Typography>
)

export const Body1 = ({ children, ...props }: Omit<TypographyProps<'Body1'>, 'variant'>) => (
  <Typography {...props} variant={'Body1'}>
    {children}
  </Typography>
)

export const Body2 = ({ children, ...props }: Omit<TypographyProps<'Body2'>, 'variant'>) => (
  <Typography {...props} variant={'Body2'}>
    {children}
  </Typography>
)

export const Subtitle1 = ({
  children,
  ...props
}: Omit<TypographyProps<'Subtitle1'>, 'variant'>) => (
  <Typography {...props} variant={'Subtitle1'}>
    {children}
  </Typography>
)

export const Subtitle2 = ({
  children,
  ...props
}: Omit<TypographyProps<'Subtitle2'>, 'variant'>) => (
  <Typography {...props} variant={'Subtitle2'}>
    {children}
  </Typography>
)

export const Caption = ({ children, ...props }: Omit<TypographyProps<'Caption'>, 'variant'>) => (
  <Typography {...props} variant={'Caption'}>
    {children}
  </Typography>
)

export const Overline = ({ children, ...props }: Omit<TypographyProps<'Overline'>, 'variant'>) => (
  <Typography {...props} variant={'Overline'}>
    {children}
  </Typography>
)

export const Link1 = ({ children, ...props }: Omit<TypographyProps<'Link1'>, 'variant'>) => (
  <Typography {...props} variant={'Link1'}>
    {children}
  </Typography>
)

export const Link2 = ({ children, ...props }: Omit<TypographyProps<'Link2'>, 'variant'>) => (
  <Typography {...props} variant={'Link2'}>
    {children}
  </Typography>
)
