import React from 'react';
import styled from 'styled-components';
import ContentFactory from './NotepadContent/ContentFactory';
import NotepadIcon from '../assets/w98_notepad.ico';
import useDraggable from '../hooks/useDraggable';

const NotepadWindow = styled.div`
  position: absolute;
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
  width: ${(props) => (props.$isMobile ? '90%' : '450px')};
`;

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TitleIcon = styled.img`
  width: 16px;
  height: 16px;
  image-rendering: pixelated;
`;

const MenuBar = styled.div`
  display: flex;
  gap: 18px;
  padding: 2px 4px;
  font-size: 13px;
`

const MenuDivider = styled.div`
  height: 2px;
  margin: 4px 0 8px;

  border-top: 1px solid #808080;
  border-bottom: 1px solid #ffffff;
`

const ContentPanel = styled.div`
  background: white;
  min-height: 300px;
  max-height: 60vh;
  overflow-y: auto;
  padding: 20px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

function Notepad({ closeNotepad, selectedItem, isMobile }) {
  const { windowRef, position, onMouseDown } = useDraggable({
    left: isMobile ? 20 : 650,
    top: isMobile ? 20 : 120,
  });

  if (!selectedItem) {
    return null;
  }

  return (
    <NotepadWindow
      ref={windowRef}
      className="window"
      $isMobile={isMobile}
      $left={position.left}
      $top={position.top}
    >
      <div className="title-bar" onMouseDown={onMouseDown}>
        <div className="title-bar-text">
          <TitleWithIcon>
            <TitleIcon src={NotepadIcon} alt="Notepad" />
            <span>{`Notepad - ${selectedItem.name}`}</span>
          </TitleWithIcon>
        </div>

        <div className="title-bar-controls">
          <button aria-label="Help" onMouseDown={(e) => e.stopPropagation()}></button>
          <button
            aria-label="Close"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={closeNotepad}
          ></button>
        </div>
      </div>

      <div className="window-body">
        <MenuBar>
          <span>File</span>
          <span>Edit</span>
        </MenuBar>
      <MenuDivider />
        <div className="sunken-panel">
          <ContentPanel>
            <ContentFactory id={selectedItem.id} isMobile={isMobile} />
          </ContentPanel>
        </div>

        <ButtonRow>
          <button onClick={closeNotepad}>Close</button>
        </ButtonRow>
      </div>
    </NotepadWindow>
  );
}

export default Notepad;