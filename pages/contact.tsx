import {useState} from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {Input, Textarea} from '../components/Input';
import Layout from '../components/Layout';

function useContact() {
  return useMutation((values: object) =>
    axios.post('/api/contact', values).then(res => res.data),
  );
}

const Contact: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const {mutate, isSuccess, isLoading, isError} = useContact();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {name, email, subject, body},
      {
        onSuccess: () => {
          setName('');
          setEmail('');
          setSubject('');
          setBody('');
          setMessage('Thanks for reaching out! I’ll get back to you soon.');
        },
        onError: () => {
          setMessage('Something went wrong. Please try again.');
        },
      },
    );
  };

  return (
    <div>
      <Head>
        <title>Contact Dayo Awobeku</title>
        <meta
          name="description"
          content="If you'd like to hire me, enquire about my rates or give me any kind of feedback, I'll be delighted to hear from you."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com/contact" />
        <meta property="og:title" content="Contact Dayo Awobeku" />
        <meta
          property="og:description"
          content="If you'd like to hire me, enquire about my rates or give me any kind of feedback, I'll be delighted to hear from you."
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dayoawobeku.com/contact"
        />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Contact Dayo Awobeku" />
        <meta
          property="twitter:description"
          content="If you'd like to hire me, enquire about my rates or give me any kind of feedback, I'll be delighted to hear from you."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
        />
      </Head>

      <Layout>
        <div className="flex flex-wrap items-start justify-between gap-12 mt-10 lg:gap-6 lg:mt-24 lg:flex-nowrap">
          <div>
            <h1 className="text-4xl text-grey dark:text-white-700">
              Get in touch
            </h1>
            <p className="mt-4 text-grey text-2md dark:text-white-700">
              By filling the contact form
            </p>
            <div className="mt-12">
              <div className="text-2md">
                <span className="text-body dark:text-white-400">Or: </span>
                <a
                  href="mailto: dayoawobeku@gmail.com"
                  className="font-medium text-grey dark:text-white-700 hover:text-grey-800 dark:hover:text-grey-600 transition-all duration-150"
                >
                  dayoawobeku@gmail.com
                </a>
              </div>
              <div className="mt-6 text-2md">
                <span className="text-body dark:text-white-400">Or: </span>
                <a
                  href="https://linkedin.com/in/dayoawobeku/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-grey dark:text-white-700 hover:text-grey-800 dark:hover:text-grey-600 transition-all duration-150"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-6 text-2md">
                <span className="text-body dark:text-white-400">Or: </span>
                <a
                  href="tel: +234-818-194-2332"
                  className="font-medium text-grey dark:text-white-700 hover:text-grey-800 dark:hover:text-grey-600 transition-all duration-150"
                >
                  +234-818-194-2332
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:max-w-xl">
            <Input
              id="contact_name"
              label="Name"
              placeholder="Your name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              id="contact_email"
              label="Email"
              placeholder="person.doe@example.com"
              type="email"
              className="mt-10"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              id="contact_subject"
              label="Subject"
              placeholder="No subject"
              className="mt-10"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <Textarea
              id="contact_body"
              label="Body"
              placeholder="A clear and concise message works wonders."
              className="mt-10"
              required
              value={body}
              onChange={e => setBody(e.target.value)}
            />

            <button className="mt-10 btn" disabled={isLoading}>
              Send message
            </button>

            {isSuccess ? (
              <p className="mt-4 font-medium text-md text-info">{message}</p>
            ) : isError ? (
              <p className="mt-4 font-medium text-md text-danger">{message}</p>
            ) : null}
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
