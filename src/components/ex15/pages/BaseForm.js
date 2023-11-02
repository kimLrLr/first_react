import { useForm } from "react-hook-form";

export const BaseForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Wrap>
      <Form onSubmit={handlerSubmit(loginHandler)}>
        <Title>LOGIN</Title>

        <Input />
        <Input />

        <Button>로그인</Button>
      </Form>
    </Wrap>
  );
};
