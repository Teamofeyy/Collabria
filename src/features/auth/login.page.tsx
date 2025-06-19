import { Link } from "react-router-dom";
import { AuthLayout } from "./auth-layout";
import { ROUTES } from "@/shared/model/routes";
import { LoginForm } from "./login-form";

function LoginPage() {
  return (
    <AuthLayout
      title="Вход в систему"
      description="Введите ваш email и пароль для входа в систему"
      footerText={
        <>
          Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрирвоатсья</Link>
        </>
      }
      form={<LoginForm />}
    />
  );
}

export const Component = LoginPage;
