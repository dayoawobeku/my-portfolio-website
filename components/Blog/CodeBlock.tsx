import CodeMirror from '@uiw/react-codemirror';
import {javascript} from '@codemirror/lang-javascript';

interface Props {
  value: string;
  lang?: string;
}

const options = {
  foldGutter: false,
};

export default function CodeBlock({value, lang}: Props) {
  return (
    <pre className="relative mb-8 text-[0.875rem]">
      <CodeMirror
        value={value}
        height="auto"
        extensions={[javascript({jsx: true})]}
        theme={'dark'}
        editable={false}
        readOnly
        basicSetup={options}
      />
      <span className="absolute bottom-4 right-8 text-[12px] lowercase text-grey-800 dark:text-white-400">
        {lang ?? 'js'}
      </span>
    </pre>
  );
}
