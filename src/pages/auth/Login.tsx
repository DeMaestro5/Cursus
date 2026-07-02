import AuthTabs from '../../components/auth/AuthTabs';

export default function Login() {
  return (
    <div className='min-h-screen '>
      <div className='p-4 flex gap-6'>
        Image
        <h3>header</h3>
        <div>
          <AuthTabs />
        </div>
      </div>
    </div>
  );
}
