import React, {useContext, useState} from 'react';

const Context = React.createContext({
  currentUser: {name: ''},
});

export default function StateManagementWithContext() {
  const [currentUser, setCurrentUser] = useState({name: ''});

  return (
    <Context.Provider value={{currentUser}}>
      <div className="w-fit py-4 pl-4 pr-20 rounded border-2 border-white-700 my-8">
        <Header />
        <main>
          {currentUser.name !== '' ? (
            <>
              <Dashboard />
              <button
                className="my-2 text-white text-[0.875rem] bg-info rounded p-1 font-medium"
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
    </Context.Provider>
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

function Dashboard() {
  return (
    <>
      <h1 className="text-md">The Dashboard</h1>
      <DashboardNav />
      <DashboardContent />
    </>
  );
}

function DashboardNav() {
  return <h2 className="text-[0.875rem]">Dashboard Nav</h2>;
}

function DashboardContent() {
  return (
    <>
      <h2 className="text-[0.875rem]">Dashboard Content</h2>
      <WelcomeMessage />
    </>
  );
}

function WelcomeMessage() {
  const {currentUser} = useContext(Context);
  return <h3 className="font-medium">Welcome, {currentUser.name}!</h3>;
}
