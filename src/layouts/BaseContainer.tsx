import { FC, ReactNode } from "react";

const BaseContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mt-16 sm:mt-32 sm:px-8 ">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseContainer;
