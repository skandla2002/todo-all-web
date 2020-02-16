import React from 'react';
import {Link} from 'react-router-dom';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열입니다.
    return (
        <div>
            <div>About...</div>
            <h1>소개</h1>
            <p>이 프로젝트는 리엑트 라우터 기초 실습 에제입니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
            <Link to="/profile/andy">Andy!</Link>
            <Link to="/home">Home으로</Link>
        </div>
    )
};

export default About;