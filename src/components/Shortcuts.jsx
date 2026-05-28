import React, { useState } from 'react';
import styled from 'styled-components';
import explorerIcon from '../assets/w98_directory_explorer.ico';

const ShortcutPosition = styled.div`
  left: 20px;
  top: 20px;
`;

function Shortcuts({ openExplorer }) {
  const [selectedShortcut, setSelectedShortcut] = useState(null);

  return (
    <ShortcutPosition
      className={`desktop-icon ${selectedShortcut === 'explorer' ? 'selected' : ''}`}
      onClick={() => setSelectedShortcut('explorer')}
      onDoubleClick={openExplorer}
      tabIndex={0}
    >
      <div className="icon-wrapper">
        <img src={explorerIcon} alt="Explorer" />
      </div>
      <div className="title">Explorer</div>
    </ShortcutPosition>
  );
}

export default Shortcuts;