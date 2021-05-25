const Welcome = ({ userData }) => {
    console.log({ userData });
    return <p> 안녕하세요 {userData.username}님! {userData.age}세 입니다.</p>;
};

export default Welcome;