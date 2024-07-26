import { FC, HTMLAttributes } from "react";

type TypographyProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    text: string;
    className?: string;
} & HTMLAttributes<HTMLElement>;

const Typography: FC<TypographyProps> = ({
    variant,
    text,
    className,
    ...props
}) => {
    h1: 'scroll-m-20'

  return (
    <div>Typography</div>
  )
}

export default Typography