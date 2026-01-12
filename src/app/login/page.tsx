 
import LoginForm from "@/components/Auth/LoginForm";
import PageBanner from "@/components/Common/PageBanner"; 

export default function Login() {
  return (
    <>
      <PageBanner pageTitle="Login" />

      <LoginForm />
    </>
  );
}
