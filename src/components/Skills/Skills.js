import React, { useContext } from 'react';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData, skillsData2 } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';
import nodejs from '../../assets/svg/skills/nodejs.svg';
import Solidity from '../../assets/svg/skills/Solidity.svg';

function Skills() {
	const { theme } = useContext(ThemeContext);

	const skillBoxStyle = {
		backgroundColor: theme.secondary,
		boxShadow: `0px 0px 30px ${theme.primary30}`,
	};

	return (
		<div className='skills' style={{ backgroundColor: theme.secondary }}>
			<div className='skillsHeader'>
				<h2 style={{ color: theme.primary }}>Skills</h2>
			</div>
			<div className='skillsContainer' style={{ marginTop: '2.5rem' }}>
				<div className='skill--scroll'>
					{skillsData.map((skill, id) => (
						<div className='skill--box' key={id} style={skillBoxStyle}>
							<img src={skill === 'Node JS' ? nodejs : skillsImage(skill)} alt={skill} />
							<h3 style={{ color: theme.tertiary }}>{skill}</h3>
						</div>
					))}
				</div>
			</div>
			<div className='skillsContainer'>
				<div className='skill--scroll'>
					{skillsData2.map((skill, id) => (
						<div className='skill--box' key={id} style={skillBoxStyle}>
							<img src={skill === 'Solidity' ? Solidity : skillsImage(skill)} alt={skill} />
							<h3 style={{ color: theme.tertiary }}>{skill}</h3>
						</div>
					))}
				</div>
			</div>

			<div className='techsContainer'>
				<div className='techContainer'>
					<ul className='techInfo'>
						<h3 className='techName'>NodeJS</h3>
						<li>Express를 활용한 웹서버 구축 및 RESTful API를 활용한 CRUD 기능 구현 가능</li>
						<li>HTTP 통신과 양방향 통신인 Socket 통신을 사용하여 실시간 통신 구현 가능</li>
					</ul>
				</div>
				<div className='techContainer'>
					<ul className='techInfo'>
						<h3 className='techName'>Solidity</h3>
						<li>Smart Contract를 작성하여 ERC-20 토큰 발행 및 토큰 스왑 구현 가능</li>
						<li>Smart Contract를 작성하여 ERC-721 토큰 발행 및 구매와 판매 구현 가능</li>
						<li>MetaMask 연동 및 DApp 제작 가능</li>
						<li>Geth를 사용하여 Block Chain Private Network 구축 가능</li>
					</ul>
				</div>
			</div>
			<div className='techsContainer'>
				<div className='techContainer'>
					<ul className='techInfo'>
						<h3 className='techName'>TypeScript</h3>
						<li>TypeScript를 활용한 정적 타입의 코드 작성 가능</li>
						<li>TypeScript를 활용한 객체지향 프로그래밍 가능</li>
					</ul>
				</div>
				<div className='techContainer'>
					<ul className='techInfo'>
						<h3 className='techName'>React</h3>
						<li>Redux-Thunk, Redux-Saga를 활용한 유연한 상태관리 가능</li>
						<li>React custom hook을 작성하여 효율적인 코드 작성 가능</li>
					</ul>
				</div>
			</div>
			<div className='techsContainer'>
				<div className='techContainer'>
					<ul className='techInfo'>
						<h3 className='techName'>MySQL</h3>
						<li>SQL 구문을 활용한 CRUD 작업 가능</li>
						<li>시퀄라이즈를 활용한 DB 작업 가능</li>
					</ul>
				</div>
				<div className='techContainer'>
					<ul className='techInfo'>
						<h3 className='techName'>AWS</h3>
						<li>EC2를 사용하여 웹 서버 배포 가능</li>
						<li>Nginx를 통해 Reverse Proxy를 활용하여 웹 서버 배포 가능</li>
					</ul>
				</div>
			</div>
			<div className='techStack'></div>
		</div>
	);
}

export default Skills;
