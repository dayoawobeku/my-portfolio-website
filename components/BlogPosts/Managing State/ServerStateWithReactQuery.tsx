import {useState} from 'react';
import axios from 'axios';
import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';

interface Props {
  postId: number;
  setPostId: (postId: number) => void;
}

export default function ServerStateWithReactQuery() {
  return <Wrapper />;
}

function Wrapper() {
  const [postId, setPostId] = useState(-1);

  return (
    <div className="my-8 flex basis-full items-start gap-6 rounded border-2 px-4 py-4 dark:border-white-700">
      <Sidebar setPostId={setPostId} postId={0} />
      <Main postId={postId} setPostId={setPostId} />
    </div>
  );
}

function Sidebar({setPostId}: Props) {
  const {data} = usePosts();

  return (
    <aside className="basis-1/4">
      <button
        className="cursor-pointer border-b-2 border-white-400 pb-2 text-2md font-medium dark:text-white"
        onClick={e => {
          setPostId(-1);
          e.preventDefault();
        }}
      >
        All Posts
      </button>
      <p className="mt-4 dark:text-white">
        Total posts:{' '}
        <span className="font-semibold text-success">{data?.length}</span>
      </p>
    </aside>
  );
}

function Main({postId, setPostId}: Props) {
  return (
    <main className="basis-3/4">
      <h3 className="mb-4 text-2md font-medium dark:text-white">Posts</h3>

      <div className="flex flex-col gap-2">
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} postId={0} />
        )}
      </div>

      <div className="my-4 border-t-2 border-white-400" />
      {postId > -1 ? (
        <EditPost postId={postId} setPostId={setPostId} />
      ) : (
        <CreatePost />
      )}
    </main>
  );
}

function CreatePost() {
  const queryClient = useQueryClient();
  const {mutate, isLoading} = useCreatePost();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {id: Date.now(), title, body},
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['posts']);
          setTitle('');
          setBody('');
        },
      },
    );
  };

  return (
    <>
      <h3 className="mb-4 text-2md font-medium dark:text-white">Create Post</h3>

      <form onSubmit={handleSubmit} className="flex flex-col dark:text-white">
        <label htmlFor="title">Title</label>
        <input
          className="mt-1 rounded-sm bg-white-700 p-2 dark:bg-grey-800"
          type="text"
          name="title"
          id="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          required
        />

        <label className="mt-3" htmlFor="body">
          Body
        </label>
        <textarea
          className="mt-1 rounded-sm bg-white-700 p-2 dark:bg-grey-800"
          name="body"
          id="body"
          rows={2}
          onChange={e => setBody(e.target.value)}
          value={body}
          required
        />

        <button
          className="mt-3 w-fit rounded-sm bg-info p-2 text-[0.875rem] text-white disabled:bg-info-100 disabled:text-body"
          disabled={isLoading}
        >
          Create Post
        </button>
      </form>
    </>
  );
}

function EditPost({postId}: Props) {
  const queryClient = useQueryClient();
  const {mutate, isLoading} = useEditPost(postId);
  const {data} = usePost(postId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {id: Date.now(), title: data.title, body: data.body},
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['post']);
        },
      },
    );
  };

  return (
    <>
      <h3 className="mb-4 text-2md font-medium dark:text-white">Edit Post</h3>

      <form onSubmit={handleSubmit} className="flex flex-col dark:text-white">
        <label htmlFor="title">Title</label>
        <input
          className="mt-1 rounded-sm bg-white-700 p-2 dark:bg-grey-800"
          type="text"
          name="title"
          id="title"
          onChange={e => (data.title = e.target.value)}
          defaultValue={data?.title}
        />

        <label className="mt-3" htmlFor="body">
          Body
        </label>
        <textarea
          className="mt-1 rounded-sm bg-white-700 p-2 dark:bg-grey-800"
          name="body"
          id="body"
          rows={2}
          onChange={e => (data.body = e.target.value)}
          defaultValue={data?.body}
        />

        <button
          className="mt-3 w-fit rounded-sm bg-info p-2 text-[0.875rem] text-white disabled:bg-info-100 disabled:text-body"
          disabled={isLoading}
        >
          Edit Post
        </button>
      </form>
    </>
  );
}

function Posts({setPostId}: Props) {
  const queryClient = useQueryClient();

  const {data, status} = usePosts();

  if (status === 'loading') {
    return <p className="dark:text-white">Loading...</p>;
  }

  if (status === 'error') {
    return <p className="text-danger">There was an error</p>;
  }

  return (
    <>
      {data.map((post: {id: number; title: string}) => (
        <button
          key={post.id}
          className={`w-fit cursor-pointer text-start hover:underline ${
            queryClient.getQueryData(['post', post.id])
              ? 'font-bold text-info'
              : 'dark:text-white'
          }`}
          onClick={e => {
            setPostId(post.id);
            e.preventDefault();
          }}
        >
          {post.title}
        </button>
      ))}
    </>
  );
}

function Post({postId, setPostId}: Props) {
  const {data, status, isFetching} = usePost(postId);

  return (
    <>
      <button
        className="w-fit cursor-pointer text-[0.8125rem] font-medium hover:underline dark:text-white"
        onClick={e => {
          setPostId(-1);
          e.preventDefault();
        }}
      >
        Back
      </button>
      {!postId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        'There was an error'
      ) : (
        <>
          <h1 className="dark:text-white-700">{data.title}</h1>
          <div>
            <p className="dark:text-white-700">{data.body}</p>
          </div>
          <p className="text-[0.8125rem] font-medium dark:text-white">
            {isFetching ? 'Background Updating...' : ''}
          </p>
        </>
      )}
    </>
  );
}

const getPostById = async (id: number) => {
  const {data} = await axios.get(`/api/todo/${id}`);
  return data;
};

function usePost(id: number) {
  return useQuery(['post', id], () => getPostById(id), {
    enabled: !!id,
  });
}

function usePosts() {
  return useQuery(['posts'], () =>
    axios.get('/api/todo').then(res => res.data),
  );
}

function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    (values: object) => axios.post('/api/todo', values).then(res => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
      },
    },
  );
}

function useEditPost(id: number) {
  return useMutation((values: object) =>
    axios.put(`/api/todo/${id}`, values).then(res => res.data),
  );
}
