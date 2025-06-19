import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./auth-layout";

function RegisterPage() {
  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для регистрации в системе"
      footerText={
        <>
          Есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
        </>
      }
      form={<form></form>}
    />
  );
}

export const Component = RegisterPage;
