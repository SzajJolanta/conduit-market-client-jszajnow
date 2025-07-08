import React from 'react'
import Button from './Button'
import type { ButtonProps } from './Button'
import Icon from '../Icon'

export interface ZapoutButtonProps extends Omit<ButtonProps, 'isLink' | 'to'> {
  merchantPubkey: string
  dataTestId?: string
}

const ZapoutButton: React.FC<ZapoutButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children = 'Zapout',
  rounded = true,
  merchantPubkey,
  dataTestId,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      disabled={disabled}
      isLink={true}
      to={`/zapout/${merchantPubkey}`}
      rounded={rounded}
      dataTestId={dataTestId}
    >
      <picture>
        <Icon.Zap />
      </picture>

      {children}
    </Button>
  )
}

export default ZapoutButton
