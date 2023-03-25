import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const Outline = ({children}: Props) => {
  const headings = React.Children.toArray(children)
    .filter(child => React.isValidElement(child) && child.type === 'a')
    .map((anchor, index) => {
      const id = anchor?.props.href.substring(1);
      const text = anchor?.props.children;
      return (
        <li className="my-3 w-fit text-grey-600" key={id}>
          <a
            className="text-md font-medium text-yellow-600 hover:underline active:text-info dark:text-yellow-400 dark:active:text-info
            "
            href={`#${id}`}
          >
            {`#${index + 1}: `}

            <span className="inline-flex"> {text}</span>
          </a>
        </li>
      );
    });

  return (
    <div className="mb-10">
      <ul className="list-disc">{headings}</ul>
    </div>
  );
};

export default Outline;
