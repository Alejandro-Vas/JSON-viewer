import React from 'react';
import ExpandableItem from '../ExpandableItem';
import { IJson } from '../../types';

const primitives = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
};

interface IProps {
  property: number | string | boolean | IJson;
  propertyName: string;
  rootProperty?: boolean;
}

function RecursiveItem({
  property,
  propertyName,
  rootProperty,
}:IProps) {
  const { STRING, NUMBER, BOOLEAN } = primitives;

  const isNumber = typeof property === NUMBER;
  const isString = typeof property === STRING;
  const isBoolean = typeof property === BOOLEAN;
  const isPrimitive = isNumber || isString || isBoolean;
  const isNull = property === null;

  const getPropertyClassName = () => {
    switch (typeof property) {
      case NUMBER:
        return NUMBER;
      case STRING:
        return STRING;
      case BOOLEAN:
        return BOOLEAN;
      default:
        return '';
    }
  };

  if (isPrimitive || isNull) {
    return (
      <div className="recursiveContainer">
        <strong>
          {propertyName}
        </strong>

        :
        {' '}

        <span className={getPropertyClassName()}>
          {String(property)}
        </span>
      </div>
    );
  }

  return (
    <div className="recursiveContainer">
      <ExpandableItem
        title={propertyName}
        expanded={!!rootProperty}
      >
        {Object.values(property).map((prop, index) => {
          const propName = Object.getOwnPropertyNames(property)[index];
          return (
            <RecursiveItem
              key={propName}
              property={prop}
              propertyName={propName}
            />
          );
        })}
      </ExpandableItem>
    </div>
  );
}

export default RecursiveItem;
