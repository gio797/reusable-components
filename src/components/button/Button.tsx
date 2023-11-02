import classnames from "classnames";

type ButtonType = {
  children: React.ReactNode;
  size: string;
  variant: string;
};

export default function Button({ children, size, variant }: ButtonType) {
  let sizeClass = size && `button-${size}`;
  let variantClass = variant && `button-${variant}`;
  const allClasses = classnames(sizeClass, variantClass);

  return <button className={allClasses}>{children}</button>;
}
