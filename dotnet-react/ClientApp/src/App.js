import React from 'react'
import useUser from './apis/auth/user'

function App() {
  const claims = useUser();
  let data = claims?.data;
  let logoutUrl = data?.find(claim => claim.type === 'bff:logout_url')
  let name = data?.find(claim => claim.type === 'name') ||  data?.find(claim => claim.type === 'sub');
  
  return (
    <>
      <header className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
            </div>
            <div className="ml-10 space-x-4">
              {
                !name && (
                  <a
                    href="/bff/login?returnUrl=/"
                    className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                  >
                    Login
                  </a>
                )
              }
              {
                name && (
                  <a
                    href={logoutUrl?.value}
                    className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                  >
                    Logout
                  </a>
                )
              }
              {/* <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Register
              </a> */}
            </div>
          </div>
        </nav>
      </header>
      <div>
        {name?.value}
      </div>
    </>
  )
}

export default App
