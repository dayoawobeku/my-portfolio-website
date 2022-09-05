import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {javascript} from '@codemirror/lang-javascript';
import {useTheme} from 'next-themes';

interface Props {
  value: string;
  lang?: string;
}

const options = {
  foldGutter: false,
};

export default function CodeBlock({value, lang}: Props) {
  const {theme} = useTheme();
  return (
    <pre className="relative mb-8 text-[0.875rem]">
      <CodeMirror
        value={value}
        height="auto"
        extensions={[javascript({jsx: true})]}
        theme={theme === 'light' ? 'light' : 'dark'}
        editable={false}
        readOnly
        basicSetup={options}
      />
      <span className="absolute bottom-4 right-8 lowercase text-[12px] text-grey-800 dark:text-white-400">
        {lang ?? 'js'}
      </span>
    </pre>
  );
}
