import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 25%;
	padding: 10px 0;
`;

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
  image-rendering: pixelated;
`;

const StyledSpan = styled.span`
  margin-top: 5px;
`;

function File({ item, openNotepad }) {
	const {name, icon } = item;
	return (
		<StyledItem>
			<StyledIcon
			 	src={icon}
				name={icon}
				className="pointer"
				onClick={() => openNotepad(item)}
			/>
			<StyledSpan>{name}</StyledSpan>
		</StyledItem>
	)
}

export default File