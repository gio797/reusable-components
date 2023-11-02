import "./badge.css";
import classnames from "classnames";

type BadgeType = {
  children: React.ReactNode;
  color: string;
  variant: string;
};

function Badge({ children, color, variant }: BadgeType) {
  let colorClass = color && `badge-${color}`;
  let variantClass = variant && `badge-${variant}`;
  const allClasses = classnames(colorClass, variantClass);

  return <div className={`badge ${allClasses}`}>{children}</div>;
}

export default Badge;
