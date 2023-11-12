export default function Login() {
  return (
    <div className='container pt-[170px]'>
      <div className='h-[70vh] flex items-center justify-center '>
        <div className='border border-primary rounded-md text-center p-8 sm:p-12 md:p-16 lg:p-20 space-y-5'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Login</h1>
          <button className='btn bg-[#7c25f8] border-none hover:bg-[#6207e3] py-4 px-12 text-white tracking-wide !uppercase'>
            Continue with Spotify
          </button>
          <div className='text-sm'>
            <p className='login-desc'>
              Please login to get access to spotify content.
            </p>
            <p className='login-desc-small'>
              You will automatically be redirected to this page after login.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
