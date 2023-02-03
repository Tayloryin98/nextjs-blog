import { FC, ReactElement } from "react";

interface TargetLayoutProps {
  children: ReactElement;
}

const TargetLayout: FC<TargetLayoutProps> = ({ children }) => {
  return (
    <div>
      TargetLayout
      <div>{children}</div>
    </div>
  );
};

export default TargetLayout;
