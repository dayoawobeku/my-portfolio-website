import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useState} from 'react';
import {SmallerInput} from './Input';

function useSubscribe() {
  return useMutation((values: object) =>
    axios.post('/api/subscribe', values).then(res => res.data),
  );
}

export default function Newsletter() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {mutate, isSuccess, isLoading} = useSubscribe();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {firstName, email},
      {
        onSuccess: res => {
          console.log(res.error);
          if (res.error) {
            setMessage(res.error);
          } else {
            setMessage(`Thanks for subscribing, ${firstName}!`);
          }
        },
        onError: res => {
          console.log(res, 'errres');
          setMessage('Something went wrong. Please try again.');
        },
      },
    );
  };

  return (
    <div className="flex flex-col">
      <p className="font-medium text-4md text-grey dark:text-white">
        Stay up to date
      </p>
      <p className="max-w-xl mt-4 text-md text-body dark:text-grey-600">
        A part of my goal for this website is to create helpful content for
        front-end web devs, and my newsletter is no different! I’ll let you know
        when I publish new content, and I’ll even share exclusive
        newsletter-only content now and then.
      </p>
      <p className="mt-6 font-medium text-2md text-grey dark:text-grey-100">
        No spam, unsubscribe at any time.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-start md:items-end gap-6 mt-10"
      >
        {isSuccess ? (
          <p className="text-md font-medium text-info">{message}</p>
        ) : (
          <>
            <SmallerInput
              id="first_name"
              label="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <SmallerInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              className="h-16 px-6 py-4 ml-0 md:ml-6 text-grey rounded-sm dark:text-white-700 text-md dark:outline-white-400 outline outline-2 outline-grey-800 focus:outline-offset-2 hover:outline-offset-2 transition-all disabled:dark:outline-grey-800 disabled:dark:text-grey-400 disabled:outline-white-400 disabled:text-white-400 disabled:cursor-not-allowed hover:disabled:outline-offset-0"
              disabled={isLoading}
            >
              Subscribe
            </button>
          </>
        )}
      </form>
    </div>
  );
}
