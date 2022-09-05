import {useState} from 'react';
import axios from 'axios';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

interface Props {
  postId: number;
  setPostId: (postId: number) => void;
}

export default function ServerStateWithReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

function Wrapper() {
  const [postId, setPostId] = useState(-1);

  return (
    <div className="flex items-start gap-6 basis-full py-4 px-4 rounded border-2 dark:border-white-700 my-8">
      <Sidebar setPostId={setPostId} postId={0} />
      <Main postId={postId} setPostId={setPostId} />
    </div>
  );
}

function Sidebar({setPostId}: Props) {
  const {data} = usePosts();

  return (
    <aside className="basis-1/4">
      <a
        className="font-medium text-2md pb-2 border-b-2 border-white-400 cursor-pointer"
        onClick={e => {
          setPostId(-1);
          e.preventDefault();
        }}
      >
        All Posts
      </a>
      <p className="mt-4">
        Total posts:{' '}
        <span className="font-semibold text-success">{data?.length}</span>
      </p>
    </aside>
  );
}

function Main({postId, setPostId}: Props) {
  return (
    <main className="basis-3/4">
      <h3 className="font-medium text-2md mb-4">Posts</h3>

      <div className="flex flex-col gap-2">
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} postId={0} />
        )}
      </div>

      <div className="my-4 border-t-2 border-white-400" />

      <CreatePost />
    </main>
  );
}

function CreatePost() {
  const queryClient = useQueryClient();
  const {mutate} = useCreatePost();
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
      <h3 className="font-medium text-2md mb-4">Create Post</h3>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="bg-white-700 dark:bg-grey-800 mt-1 p-2 rounded-sm"
          type="text"
          name="title"
          id="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <label className="mt-3" htmlFor="body">
          Body
        </label>
        <textarea
          className="bg-white-700 dark:bg-grey-800 mt-1 p-2 rounded-sm"
          name="body"
          id="body"
          rows={2}
          onChange={e => setBody(e.target.value)}
          value={body}
        />

        <button className="mt-3 p-2 rounded-sm bg-info text-white text-[0.875rem] w-fit">
          Create Post
        </button>
      </form>
    </>
  );
}

function Posts({setPostId}: Props) {
  const queryClient = useQueryClient();

  const {data, status} = usePosts();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>There was an error</p>;
  }

  return (
    <>
      {data.map((post: {id: number; title: string}) => (
        <a
          key={post.id}
          className={`hover:underline cursor-pointer w-fit ${
            queryClient.getQueryData(['post', post.id])
              ? 'font-bold text-info'
              : ''
          }`}
          onClick={e => {
            setPostId(post.id);
            e.preventDefault();
          }}
        >
          {post.title}
        </a>
      ))}
    </>
  );
}

function Post({postId, setPostId}: Props) {
  const {data, status, isFetching} = usePost(postId);

  return (
    <>
      <a
        className="cursor-pointer hover:underline text-[0.875rem] font-medium"
        onClick={e => {
          setPostId(-1);
          e.preventDefault();
        }}
      >
        Back
      </a>
      {!postId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        'There was an error'
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <p className="text-[0.8125rem] font-medium">
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
  return useMutation((values: object) =>
    axios.post('/api/todo', values).then(res => res.data),
  );
}
