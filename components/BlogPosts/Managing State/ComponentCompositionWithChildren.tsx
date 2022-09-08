import {useState} from 'react';

export default function ComponentCompositionWithChildren() {
  const [currentUser, setCurrentUser] = useState({name: ''});

  return (
    <div className="py-4 pl-4 pr-20 my-8 border-2 rounded w-fit border-white-700">
      <Header />
      <main>
        {currentUser.name !== '' ? (
          <>
            <Dashboard>
              <DashboardNav />
              <DashboardContent>
                <WelcomeMessage user={currentUser} />
              </DashboardContent>
            </Dashboard>
            <LogoutButton onLogout={() => setCurrentUser({name: ''})} />
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
  return <h1 className="font-bold">Header</h1>;
}

function Footer() {
  return <h1 className="font-bold">Footer</h1>;
}

function LoginScreen({onLogin}: {onLogin: () => void}) {
  return (
    <>
      <h4 className="mt-2">Please login</h4>
      <button
        className="my-2 text-white text-[0.875rem] bg-info rounded p-1 font-medium"
        onClick={onLogin}
      >
        Login
      </button>
    </>
  );
}

function LogoutButton({onLogout}: {onLogout: () => void}) {
  return (
    <button
      className="my-2 text-white text-[0.875rem] bg-info rounded p-1 font-medium"
      onClick={onLogout}
    >
      Logout
    </button>
  );
}

function Dashboard({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1 className="text-md">The Dashboard</h1>
      {children}
    </>
  );
}

function DashboardNav() {
  return <h2 className="text-[0.875rem]">Dashboard Nav</h2>;
}

function DashboardContent({children}: {children: React.ReactNode}) {
  return (
    <>
      <h2 className="text-[0.875rem]">Dashboard Content</h2>
      {children}
    </>
  );
}

function WelcomeMessage({user}: {user: {name: string}}) {
  return <h3 className="font-medium">Welcome, {user.name}!</h3>;
}
