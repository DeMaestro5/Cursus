import AuthTabs from './AuthTabs';

interface LoginFormProps {
  username: string;
  password: string;
}

export default function LoginForm({ username, password }: LoginFormProps) {
  return (
    <div>
      <p>text</p>
      <input />
      <input />
      <div>
        <div> check box | remember me | forgot password button</div>
      </div>
      login button
    </div>
  );
}
