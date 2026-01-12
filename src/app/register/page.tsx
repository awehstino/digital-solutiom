import RegisterForm from "@/components/Auth/RegisterForm";
import PageBanner from "@/components/Common/PageBanner";

export default function Register() {
  return (
    <>
      <PageBanner pageTitle="Register" />

      <RegisterForm />
    </>
  );
}
