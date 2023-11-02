import { useForm } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";
import { Wrap, Form, Title, Input, Separ } from "../components/loginStyles";
import { BottomInfo, ButtonUi } from "../components/ButtonUi";
import { UnderInfo } from "../components/UnderInfo";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="로그인"
        />
        <ErrorMessage text={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />

        <ButtonUi active={isValid} text={"로그인"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>

        <UnderInfo
          userAccountCheck={"아이디가 없으신가요?"}
          linkText={"/signup"}
          accountText={"회원가입"}
        />
      </Form>
    </Wrap>
  );
};
