import React from 'react';

enum ListType {
  disc = 'disc',
  number = 'number',
}

interface ListItemProps {
  items: {
    text: (string | React.ReactNode)[];
  }[];
  listType: ListType.disc | ListType.number;
}

export default function ListItems({items, listType}: ListItemProps) {
  return (
    <ul className="my-6 space-y-3">
      {items.map(({text}, index) => (
        <li
          key={index}
          className={`ml-8 ${
            listType === ListType.number
              ? 'list-decimal'
              : 'list-disc dark:text-white-400'
          }`}
        >
          {Array.isArray(text) ? (
            text.map((textItem, index2) => {
              if (typeof textItem === 'string') {
                return (
                  <span
                    key={`text-${index}-${index2}`}
                    className="text-grey dark:text-grey-100"
                  >
                    {textItem}
                  </span>
                );
              } else if (textItem && React.isValidElement(textItem)) {
                return React.cloneElement(textItem, {key: index2});
              } else {
                return null;
              }
            })
          ) : (
            <span className="text-grey dark:text-grey-100">{text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
