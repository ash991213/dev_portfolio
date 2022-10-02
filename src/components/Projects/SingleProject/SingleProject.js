import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, projectFunction, role, tags, code, image, theme, date }) {
	const useStyles = makeStyles((t) => ({
		iconBtn: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: 40,
			height: 40,
			borderRadius: 50,
			border: `2px solid ${theme.tertiary}`,
			color: theme.tertiary,
			transition: 'all 0.2s',
			'&:hover': {
				color: theme.primary,
				transform: 'scale(1.1)',
				border: `2px solid ${theme.primary}`,
			},
		},
		icon: {
			fontSize: '1.1rem',
			transition: 'all 0.2s',
			'&:hover': {},
		},
	}));

	const classes = useStyles();

	return (
		<Fade bottom>
			<div key={id} className='singleProject' style={{ marginTop: id === 0 ? 0 : '5rem' }}>
				<div className='content-left'>
					<div>
						<h1 style={{ color: theme.primary, fontSize: '1rem' }}>{date}</h1>
					</div>
					<div className='project-name'>
						<h2 id={name.replace(' ', '-').toLowerCase()} style={{ color: theme.tertiary, fontSize: '1.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
							{name}
						</h2>
						<div className='project--showcaseBtn'>
							<a href={code} target='_blank' rel='noreferrer' className={classes.iconBtn} aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-code`}>
								<FaCode id={`${name.replace(' ', '-').toLowerCase()}-code`} className={classes.icon} aria-label='Code' />
							</a>
						</div>
					</div>
					<div className='project-desc' style={{ marginTop: '1rem' }}>
						<div>
							<h1 style={{ color: theme.primary, fontSize: '1rem' }}>프로젝트 목표</h1>
						</div>
						<p>{desc}</p>
					</div>
					<div className='project-desc' style={{ marginTop: '1rem' }}>
						<div>
							<h1 style={{ color: theme.primary, fontSize: '1rem' }}>사용언어 및 개발환경</h1>
						</div>
						<div className='project--lang'>
							{tags.map((tag, id) => (
								<span key={id}>{tag}</span>
							))}
						</div>
					</div>
					<div className='project-desc' style={{ marginTop: '1rem' }}>
						<div>
							<h1 style={{ color: theme.primary, fontSize: '1rem' }}>프로젝트 주요 기능</h1>
						</div>
						<p>{projectFunction}</p>
					</div>
					<div className='project-desc' style={{ marginTop: '1rem' }}>
						<div>
							<h1 style={{ color: theme.primary, fontSize: '1rem' }}>프로젝트 담당 역할</h1>
						</div>
						{role.map((v, k) => (
							<div key={k}>
								<span className='role'>{v}</span>
							</div>
						))}
					</div>
				</div>
				<div className='content-right'>
					<img className='image' src={image ? image : placeholder} alt={name} />
				</div>

				{/* <div className='projectContent'>
					<img src={image ? image : placeholder} alt={name} />
					<div className='project--showcaseBtn'>
						<a href={code} target='_blank' rel='noreferrer' className={classes.iconBtn} aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-code`}>
							<FaCode id={`${name.replace(' ', '-').toLowerCase()}-code`} className={classes.icon} aria-label='Code' />
						</a>
					</div>
				</div> */}
			</div>
			{/* <div key={id} className='singleProject' style={{ backgroundColor: theme.primary400 }}>
				<div className='projectContent'>
					<h2 id={name.replace(' ', '-').toLowerCase()} style={{ color: theme.tertiary, fontSize: '1rem' }}>
						{name}
					</h2>
					<img src={image ? image : placeholder} alt={name} />
					<div className='project--showcaseBtn'>
						<a href={code} target='_blank' rel='noreferrer' className={classes.iconBtn} aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-code`}>
							<FaCode id={`${name.replace(' ', '-').toLowerCase()}-code`} className={classes.icon} aria-label='Code' />
						</a>
					</div>
				</div>
				<p
					className='project--desc'
					style={{
						background: theme.secondary,
						color: theme.tertiary,
					}}
				>
					{desc}
				</p>
				<div
					className='project--lang'
					style={{
						background: theme.secondary,
						color: theme.tertiary80,
					}}
				>
					{tags.map((tag, id) => (
						<span key={id}>{tag}</span>
					))}
				</div>
			</div> */}
		</Fade>
	);
}

export default SingleProject;
