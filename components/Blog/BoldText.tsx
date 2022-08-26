interface Props {
    text: string;
  }
  
  export default function BoldText({text}: Props) {
    return <p className="text-base text-grey dark:text-white mb-4">{text}</p>;
  }
  