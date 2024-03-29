import {useState} from 'react';

export default function ComponentCompositionWithChildrenTemplate() {
  const [currentUser, setCurrentUser] = useState({name: ''});

  return (
    <div className="my-8 w-fit rounded border-2 border-white-700 py-4 pl-4 pr-20">
      <Header />
      <main>
        {currentUser.name !== '' ? (
          <>
            <Dashboard user={currentUser} />
            <button
              className="my-2 rounded bg-info p-1 text-[0.875rem] font-medium text-white"
              onClick={() => setCurrentUser({name: ''})}
            >
              Logout
            </button>
          </>
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({name: 'Dayo'})} />
        )}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 className="font-bold dark:text-white">Header</h1>;
}

function Footer() {
  return <h1 className="font-bold dark:text-white">Footer</h1>;
}

function LoginScreen({onLogin}: {onLogin: () => void}) {
  return (
    <>
      <h4 className="mt-2 dark:text-white">Please login</h4>
      <button
        className="my-2 rounded bg-info p-1 text-[0.875rem] font-medium text-white"
        onClick={onLogin}
      >
        Login
      </button>
    </>
  );
}

function Dashboard({user}: {user: {name: string}}) {
  return (
    <>
      <h1 className="text-md dark:text-white">The Dashboard</h1>
      <DashboardNav />
      <DashboardContent user={user} />
    </>
  );
}

function DashboardNav() {
  return <h2 className="text-[0.875rem] dark:text-white">Dashboard Nav</h2>;
}

function DashboardContent({user}: {user: {name: string}}) {
  return (
    <>
      <h2 className="text-[0.875rem] dark:text-white">Dashboard Content</h2>
      <WelcomeMessage user={user} />
    </>
  );
}

function WelcomeMessage({user}: {user: {name: string}}) {
  return <h3 className="font-medium dark:text-white">Welcome, {user.name}!</h3>;
}
