# ex02

\*jsx문법 규칙
=>태그가 2개 이상일 땐 반드시 부모 태그로 닫아줘야됨

\*컴포넌트
=> 레이아웃과 비슷하게 디자인의 하나의 영역을 뜻함
=> 컴포넌트 제작시 파일명과 함수명은 동일해야 하며,
첫 글자는 대문자로 시작할 것.
=> 컴포넌트 함수를 제작후 내보내기 export를 해줘야함
=> 태그는 반드시 닫아줄 것

\*내보내기 불러오기
=> import 불러오기
=> export 내보내기

\*export
=> export default는 반드시 파일당 하나만 사용 가능
=> 한 파일에서 2개 이상 내보내기를 해야하는 경우,
함수 명 앞으로 export 사용함.
=> import 시에 {}중괄호 안에 가져올 함수명 넣기

\*export를 함수 앞에 붙여서 내보낼 수 있음,
단 import할 때에는 {}를 사용하여 다중 컴포넌트를
불러올 수 있음

---

# ex03

\*jsx 문법 내부에서 변수를 사용할 땐
{}중괄호를 사용할 것

# ex04

\*fragment 태그
=> jsx 문법 사용 규칙에 따라 부모 태그로 묶어줘야 하는 경우, 엑스트라 태그를 생성할 수밖에 없게 되는데, 이 경우에 보기 싫은 <div></div>태그 대신
<></>로 대신해서 사용할 수 있음

\*map 함수
=> 반드시 배열로 작성해야함

\*map()
=> 배열을 기준으로 배열의 요소값을 새로운 값으로 반환하는 역할을 함
=> 반드시 유니크한(고유값) key값을 넣어줘야함

# ex05

\*styled에서 props를 사용
${(props) => props.$변수명}
<Box $변수명={""}></Box>
이런 식으로 사용함
props부분은 국룰이므로 변형x

# ex06

\*GlobalStyled
=> 전체 영역에서 사용할 수 있는 스타일 처리법

\*자기 자신을 한 번 더 선택하는 경우 &를 사용
예를 들어, hover이벤트 사용 시,
&:hover{...}

# ex07

\*hooks
const [변수명, set변수명] = useState(값);
위 코드가 let 변수명 = 값;
과 동일한 느낌

\*useState()
=> react hook 종류중 하나로 변수를 정의하고 값을 변경할 때 사용
=> 배열 비구조화 할당을 이용하며 첫번째 값은 변수,
두번째 값은 변수를 변경할 수 있는 함수로 정의
단, set이라는 이름을 붙여줘야됨
ex)
const [변수명, set변수명] = useState(변수값);

# ex11

\*React Router 사용법
npm i react-router-dom
=> 위 코드로 설치
return (
<BrowserRouter>
<Routes>
<Route />
</Routes>
</BrowserRouter>
);

\*Route의 속성
<Route path="/" element={<보여줄 Component명 />} />

\*HashRouter
<HashRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sub01" element={<Sub01 />} />
<Route path="/sub02" element={<Sub02 />} />
</Routes>
</HashRouter>
=>HashRouter은 주소창에
http://localhost:3000/#/sub01
이런 식으로 #을 추가해줘야함

\*404 에러 처리
<Route path="/\*" element={<NotFound />} />
=>path 안에 /\*임 \ 빼야함..

\*react router을 사용하려면 꼭!!

<Link> component를 사용

<Link to={"/"}>LOGO</Link>
=>이런 식으로 사용

\*각 페이지 타이틀 정의(Helmet)
npm i react-helmet
=> cmd로 설치

ex)
<Helmet>

<title>HOME</title>
</Helmet>

여기서 props를 사용할 수 있음!

ex)
<Helmet>

<title>{name}</title>
</Helmet>
=> Title을 바꾸는 코드를 컴포넌트로 작성

export const PageTitle = ({ name })
=>이렇게 하면 다른 곳에서

<PageTitle name={"Home"} />
=>이런 식으로 변수처리 가능!

# ex12

\*request 요청 respon 응답

# ex14

- react hook form에 대하여

npm install react-hook-form
=> cmd로 설치

\*useFore()
const { register, handleSubmit } = useForm();
=> hook의 useForm 사용

<Form onSubmit={handleSubmit(우리가 실행시킬 함수명)}>
=> 우리가 실행시킬 함수명 작성

name=""대신에 {...register("name명", {
옵션들(required 등..)
})}

- required는 필수적인 요소인지 아닌지

ex)
<Input
{...register("password", {
required: true,
})}
type="text"
placeholder="패스워드"
/>

const loginHandler = (data) => {
//이벤트 함수 매개변수의 첫 번재 자리는 유저가 입력한 내용을 객체형태로 반환함
console.log(data);
};

\*formState:{}

const {
register,
handleSubmit,
formState: { errors },
} = useForm();
=>요기에 errors로 넣고

{...register("username", {
required: "아이디는 필수 입니다.",
})}
=>input태그에 작성

console.log(errors && errors.username && errors.username.message);
=> 위같은 코드를
console.log(errors?.username?.message);
=> 이렇게 작성할 수 있음. 이를 "옵셔널 체이닝(optional chaining) 연산자"라고 표현
=> && 연산자로 객체에 접근하는 것 보다 옵셔널 체이닝을 이용하여 객체 안에 있는 객체를 쉽게 접근할 수 있음

# ex15

\*useForm
=> 폼 관련 패키지
ex)
const {
register, //input태그 name 및 등록역할
handleSubmit, // form태그 이벤트 등록
formState:{errors, isValid} //form상태를 관리
//errors: form 유효성 검사 후 에러를 객체로 반환함,
//isValid: form 상태가 유효한지 boolean 값으로 반환
} = useForm({
mode: "onChange" //form모드로 유효성 검사를 어떻게 처리할지 값은 작성할 수 있음
});

<input {...register("name명",{
required: "" // 현 input값이 필수값인지 아닌지 boolean값 및 문자열로 작성 가능
})}>
