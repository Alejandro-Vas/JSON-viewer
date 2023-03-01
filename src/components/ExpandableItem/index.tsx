import React from 'react';

interface IProps {
  title: string;
  expanded?: boolean ;
  children?: React.ReactNode
}

interface IState {
  isOpen: boolean | undefined
}

class ExpandableItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const { expanded } = this.props;

    this.state = {
      isOpen: expanded,
    };
  }

  handleToggleOpen = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children, title } = this.props;

    const openSign = isOpen ? '-' : '+';

    return (
      <div>
        <div
          onClick={this.handleToggleOpen}
          role="button"
          className="expandablePropertyName"
          tabIndex={0}
          onKeyDown={() => {}}
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
      </div>
    );
  }
}

export default ExpandableItem;
