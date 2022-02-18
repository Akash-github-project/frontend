import React from 'react'

export const SignUp = () => {
  return (
    <div className='bg-white'>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-40 fixed top-0 bottom-0 left-0 right-0 z-10">
          {/* component after this  */}
          <div className="px-10 py-10 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <form >
                  <div className="mt-4">
                      <div className='flex gap-4 items-center'>
                          <label className="block text-secondary w-24" for="Name">Name</label>
                                  <input type="text" placeholder="Name"
                                      className="flex-1 mt-2 border rounded-md  field" />
                      </div>

                      <div className="mt-4 flex gap-4 items-center">
                          <label className="block text-secondary text-black w-24" for="email">Email</label>
                                  <input type="text" placeholder="Email"
                                      className="flex-1  mt-2 border rounded-md  field" />
                      </div>
                      <div className="mt-4 flex gap-4 items-center">
                          <label className="block text-secondary w-24">Password</label>
                                  <input type="password" placeholder="Password"
                                      className="flex-1  mt-2 border rounded-md  field" />
                      </div>
                      <div className="mt-4 flex gap-4 items-center">
                          <label className="block text-secondary w-24">Re-Password</label>
                                  <input type="password" placeholder="Password"
                                      className="flex-1  mt-2 border rounded-md  field" />
                      </div>
                      <span className="text-xs text-red-400">Password must be same!</span>
                      <div className="flex">
                          <button className="w-full  p-2 mt-4 text-white bg-primary rounded-lg hover:bg-pink-900 hover:shadow-pink-900 ">Create
                              Account</button>
                      </div>
                      <div className="mt-6 text-black">
                          Already have an account?
                          <a className="text-primary" href="#">
                              Log in
                          </a>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}
