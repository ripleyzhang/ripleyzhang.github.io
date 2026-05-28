import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Explorer from './Explorer';
import Notepad from './Notepad';
import DataContext from '../contexts/dataContext';
import Shortcuts from './Shortcuts';
import Taskbar from './Taskbar';
import cloudBackground from '../assets/clouds.jpg';

const DesktopRoot = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url(${cloudBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Desktop() {
  const isMobile = window.innerWidth < 850;

  const data = useContext(DataContext);
  const [explorerOpened, toggleExplorer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [notepadOpened, toggleNotepad] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const files = data.getItems();

    setItems(files);
    toggleExplorer(true);
    setSelectedItem(files[0]);
    toggleNotepad(!isMobile);
  }, [data, isMobile]);

  const closeExplorer = () => {
    toggleExplorer(false);
  };

  const openExplorer = () => {
    toggleExplorer(true);
  };

  const closeNotepad = () => {
    toggleNotepad(false);
  };

  const openNotepad = (item) => {
    setSelectedItem(item);
    toggleNotepad(true);
  };

  return (
    <DesktopRoot>
      <Shortcuts openExplorer={openExplorer} />

      {explorerOpened && (
        <Explorer
          items={items}
          closeExplorer={closeExplorer}
          openNotepad={openNotepad}
          isMobile={isMobile}
        />
      )}

      {notepadOpened && selectedItem && (
        <Notepad
          closeNotepad={closeNotepad}
          selectedItem={selectedItem}
          isMobile={isMobile}
        />
      )}

      <Taskbar
        explorerOpened={explorerOpened}
        notepadOpened={notepadOpened}
        selectedItem={selectedItem}
        openExplorer={openExplorer}
        openNotepad={() => {
          if (selectedItem) {
            toggleNotepad(true);
          }
        }}
      />
    </DesktopRoot>
  );
}

export default Desktop;