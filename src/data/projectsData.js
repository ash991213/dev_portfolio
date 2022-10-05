import Team6 from '../assets/png/Team6_Project_1.png';
import Gaeki from '../assets/png/Gaeki_1.png';
import Exploer from '../assets/png/BlockChain_Exploer_1.png';
import DID from '../assets/png/DID.png';

// 주요 기능
// 담당 역할

export const projectsData = [
	{
		id: 0,
		projectName: 'Block Exploer',
		projectDesc: 'Private Network를 구축하여 Web Socket을 사용하여 실시간으로 Block과 Transaction을 조회할 수 있는 웹 사이트를 제작하였습니다.',
		projectFunction: 'Geth를 사용하여 Private NetWork를 구축하고 web3.js 라이브러리를 사용해 새로운 블록이 생성되었을 시 실시간으로 블록의 정보와 트랜잭션의 정보를 DB에 저장하고 Front와 Back Server간 Web Socket 통신을 통해 블록이 새로 생성되면 DB에 저장된 내용이 실시간으로 Front화면에 전송되도록 하였습니다.',
		role: ['- 싱글 프로젝트'],
		tags: ['Express, ', 'Web Socket, ', 'MySQL, ', 'Web3, ', 'Geth, ', 'Truffle '],
		code: 'https://github.com/ash991213/blockChain_mini_project',
		demo: 'https://github.com/ash991213/blockChain_mini_project',
		image: Exploer,
		date: '2022.07',
	},
	{
		id: 1,
		projectName: 'DID를 활용한 SSO 통합로그인 서비스',
		projectDesc: '개인정보를 블록체인에 저장하여 탈중앙화 식으로 개인이 관리하도록 하고 SSO 기술을 접목하여 하나의 ID로 여러 사이트에서 사용 가능할 수 있는 서비스 구현',
		projectFunction: 'SSO 서비스를 가입할 때 사용자의 정보 중 email과 PW를 단방향 암호화하여 블록체인상에 저장하여 해당 hash 값을 식별자로 사용하고, 사용자의 개인정보를 양방향 암호화하여 Block Expoler에서 다른 이가 쉽게 사용자의 개인정보를 알 수 없도록 하였으며, 사용자가 로그인할 경우, 사용자가 입력한 email과 PW를 다시 단방향 암호화하여 블록체인상에 일치하는 값이 있을 때 해당 사용자의 정보를 가져오도록 하였습니다. 로그인 후 Test 사이트 A, B, C, D에 SSO 등록을 하면 A 사이트에서 B, C, D 사이트에 있는 포인트를 사용하여 물건을 구매할 수 있습니다.',
		role: ['- Layer2 Optimism Test Net에 컨트랙트 배포 및 SSO 통합 포인트 시스템 구현', '- Oauth Server 유저 기능 관리 및 서버 배포', '- SSO 기능을 테스트 할 A,B,C,D 웹 사이트 제작'],
		tags: ['Next JS, ', 'Node JS, ', 'MySQL, ', 'Web3, ', 'Truffle, ', 'Alchemy, ', 'Optimism'],
		code: 'https://github.com/ash991213/Team_DAO',
		demo: 'https://github.com/ash991213/Team_DAO',
		image: DID,
		date: '2022.08 ~ 2022.09',
	},
	{
		id: 2,
		projectName: '회원가입 및 게시판 CRUD Web Site',
		projectDesc: '유저와 관련된 기능 담당하여 기본적인 회원가입, 로그인 기능과 게시판 CRUD를 할 수 있는 웹사이트 구현',
		projectFunction: '사용자 회원가입 및 로그인, 게시글 작성 및 수정이 가능하며 사용자 정지 및 게시글 삭제 등 관리자 기능이 포함되어 있습니다.',
		role: ['- 사용자 회원가입 및 로그인', '- 사용자 정보 변경'],
		tags: ['Node JS, ', 'MySQL, ', 'Express'],
		code: 'https://github.com/ash991213/team6-project',
		demo: 'https://github.com/ash991213/team6-project',
		image: Team6,
		date: '2022.02',
	},
	{
		id: 3,
		projectName: '개발자 키우기',
		projectDesc: '터치를 통해 개발자 캐릭터의 능력을 향상시켜 보다 많은 골드를 획득할 수 있고 경험치 기능을 통해 다양한 스테이지를 경험할 수 있는 터치형 클리커 게임 제작',
		projectFunction: '사용자가 화면을 터치할 때마다 골드 및 경험치가 증가하며, 클릭하여 얻은 골드를 사용하여 캐릭터 능력치와 아이템을 업그레이드하여 더 많은 골드와 경험치를 획득할 수 있으며 피로도 시스템을 통해 캐릭터의 피로도가 일정 능력치 이하로 내려갈 시 획득하는 골드 및 경험치가 감소합니다. 게임 중간 발생하는 이벤트로 피로도를 다시 채울 수 있으며 일정량의 골드 또한 추가로 획득합니다.',
		role: ['- 게임 캐릭터의 능력치와 아이템 업그레이드 기능', '- 회원가입 및 카카오 로그인', '- 게임 ui 제작 및 배경음 효과음 적용'],
		tags: ['Next JS, ', ' React, ', 'Type Script, ', 'Express'],
		code: 'https://github.com/ash991213/Gaeki',
		demo: 'https://github.com/ash991213/Gaeki',
		image: Gaeki,
		date: '2022.05 ~ 2022.06',
	},
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
	date:'2022'
}, 
*/
