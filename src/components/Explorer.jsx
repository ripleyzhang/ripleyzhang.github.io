import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import ExplorerIcon from '../assets/w98_directory_explorer.ico';
import useDraggable from '../hooks/useDraggable';

const ExplorerWindow = styled.div`
  position: absolute;
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
  width: ${(props) => (props.$isMobile ? '90%' : '400px')};
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
  gap: 24px;
  padding: 4px 8px;
`;

const FilesPanel = styled.div`
  min-height: 220px;
  background: white;
  padding: 8px;
`;

const FilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Explorer({ items, closeExplorer, openNotepad, isMobile }) {
  const { windowRef, position, onMouseDown } = useDraggable({
    left: isMobile ? 20 : 160,
    top: isMobile ? 260 : 300,
  });

  return (
    <ExplorerWindow
      ref={windowRef}
      className="window"
      $isMobile={isMobile}
      $left={position.left}
      $top={position.top}
    >
      <div className="title-bar" onMouseDown={onMouseDown}>
        <div className="title-bar-text">
          <TitleWithIcon>
            <TitleIcon src={ExplorerIcon} alt="Explorer" />
            <span>Explorer - Ningjing(Ripley) Zhang</span>
          </TitleWithIcon>
        </div>

        <div className="title-bar-controls">
          <button
            aria-label="Close"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={closeExplorer}
          ></button>
        </div>
      </div>

      <div className="window-body">
        <MenuBar>
          <span>File</span>
          <span>Edit</span>
          <span>Help</span>
        </MenuBar>

        <div className="sunken-panel">
          <FilesPanel>
            <FilesWrapper>
              {items.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  openNotepad={openNotepad}
                />
              ))}
            </FilesWrapper>
          </FilesPanel>
        </div>
      </div>
    </ExplorerWindow>
  );
}

export default Explorer;