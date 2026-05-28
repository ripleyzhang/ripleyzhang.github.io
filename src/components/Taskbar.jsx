import React, { useContext, useState } from 'react';
import DataContext from '../contexts/dataContext';
import styled from 'styled-components';
import StartIcon from '../assets/w98_windows.ico';
import ExplorerIcon from '../assets/w98_directory_explorer.ico';
import NotepadIcon from '../assets/w98_notepad.ico';

const TaskbarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 34px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  z-index: 9999;
`;

const StartButton = styled.button`
  height: 28px;
  min-width: 78px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
`;

const StartIconImg = styled.img`
  width: 20px;
  height: 20px;
  image-rendering: pixelated;
`;

const StartMenu = styled.div`
  position: fixed;
  left: 4px;
  bottom: 34px;
  width: 210px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-shadow: 1px 1px 0 #808080;
  z-index: 10000;
`;

const MenuItem = styled.a`
  display: block;
  padding: 8px 12px;
  color: black;
  text-decoration: none;

  &:hover {
    background: #000080;
    color: white;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #808080;
  border-bottom: 1px solid #ffffff;
  margin: 4px 0;
`;

const TaskButtons = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 6px;
  flex: 1;
`;

const TaskButton = styled.button`
  height: 28px;
  min-width: 150px;
  max-width: 220px;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TaskIcon = styled.img`
  width: 16px;
  height: 16px;
  image-rendering: pixelated;
`;

const Clock = styled.div`
  height: 26px;
  min-width: 72px;
  padding: 4px 8px;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Taskbar({
  explorerOpened,
  notepadOpened,
  selectedItem,
  openExplorer,
  openNotepad,
}) {
  const { projectRepo, css98Repo } = useContext(DataContext).getProjectInfo();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && (
        <StartMenu>
          <MenuItem href={projectRepo} target="_blank" rel="noreferrer">
            Repo
          </MenuItem>

          <Divider />

          <MenuItem href={css98Repo} target="_blank" rel="noreferrer">
            Built with 98.css
          </MenuItem>
        </StartMenu>
      )}

      <TaskbarWrapper>
        <StartButton onClick={() => setMenuOpen((open) => !open)}>
          <StartIconImg src={StartIcon} alt="Start" />
          Start
        </StartButton>

        <TaskButtons>
          {explorerOpened && (
            <TaskButton onClick={openExplorer}>
              <TaskIcon src={ExplorerIcon} alt="Explorer" />
              <span>Explorer</span>
            </TaskButton>
          )}

          {notepadOpened && selectedItem && (
            <TaskButton onClick={openNotepad}>
              <TaskIcon src={NotepadIcon} alt="Notepad" />
              <span>{`Notepad - ${selectedItem.name}`}</span>
            </TaskButton>
          )}
        </TaskButtons>

        <Clock>
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Clock>
      </TaskbarWrapper>
    </>
  );
}

export default Taskbar;