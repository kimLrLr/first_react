import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMsg } from "../components/ErrorMsg";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    // => 기본적으로 onChange로 잡혀있음
  });

  // console.log(isValid);
  // => 유효성 검사 후 boolean값으로 반환함

  // console.log(errors && errors.username && errors.username.message);
  console.log(errors?.username?.message);

  const loginHandler = (data) => {
    //이벤트 함수 매개변수의 첫 번재 자리는 유저가 입력한 내용을 객체형태로 반환함
    // console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />

        {/* <span>{errors?.username?.message}</span> */}
        <ErrorMsg Message={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해 주세요.",
            },
            // => 최소 길이
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "숫자와 문자를 합쳐서 사용 가능",
            },
            // ex) 비밀번호는 8자리 이상, 특수문자 포함 대소문자 포함,
            // => pattern: /여기에 작성/
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMsg Message={errors?.password?.message} />

        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};
