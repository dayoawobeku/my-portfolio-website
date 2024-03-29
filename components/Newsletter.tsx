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

  const {mutate, isLoading} = useSubscribe();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {firstName, email},
      {
        onSuccess: res => {
          if (res.error) {
            setMessage(res.error);
          } else {
            setFirstName('');
            setEmail('');
            setMessage(`Thanks for subscribing, ${firstName}!`);
          }
        },
        onError: () => {
          setMessage('Something went wrong. Please try again.');
        },
      },
    );
  };

  return (
    <div className="flex flex-col">
      <p className="text-4md font-medium text-grey dark:text-white">
        Stay up to date
      </p>
      <p className="mt-4 max-w-xl text-md text-body dark:text-grey-600">
        A part of my goal for this website is to create helpful content for
        front-end web devs, and my newsletter is no different!
      </p>
      <p className="mt-6 text-2md font-medium text-grey dark:text-grey-100">
        No spam, unsubscribe at any time.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-end"
      >
        <SmallerInput
          id="newsletter_first_name"
          label="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <SmallerInput
          id="newsletter_email"
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button className="btn h-16" disabled={isLoading}>
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-md font-medium text-info">{message}</p>
    </div>
  );
}
