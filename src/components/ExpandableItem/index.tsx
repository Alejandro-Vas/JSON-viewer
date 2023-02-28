import React, { useState } from 'react';

interface IProps {
  title: string;
  expanded?: boolean;
  children?: React.ReactNode
}

function ExpandableItem({ expanded, children, title }:IProps) {
  const [isOpen, setIsOpen] = useState(expanded);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  const openSign = isOpen ? '-' : '+';

  return (
    <>
      <div
        onClick={handleToggleOpen}
        role="button"
        onKeyDown={handleToggleOpen}
        tabIndex={0}
        className="expandablePropertyName"
      >
        <span className="openSign">
          {openSign}
        </span>

        {title}
      </div>

      {isOpen ? children : null}

      {React.Children.count(children) === 0 && isOpen && (
        <div className="recursiveContainer empty">
          Empty
        </div>
      )}
    </>
  );
}

export default ExpandableItem;
