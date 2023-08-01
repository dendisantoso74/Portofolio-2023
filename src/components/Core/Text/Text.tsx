import { FC } from 'react';
import cn from 'classnames';
import style from './Text.module.scss';
import { TextTypes, TagType } from './Text.type';

export const Text: FC<TextTypes> = props => {
  const { children, variant = 'body', tag = 'p', className, ...restProps } = props;

  const Element: TagType = tag;

  return (
    <Element {...restProps} className={cn(style[variant], className)}>
      {children}
    </Element>
  );
};
