import React from 'react';
import LockIcon from 'mdi-react/LockIcon';
import LockOpenIcon from 'mdi-react/LockOpenOutlineIcon';

class WhiteboardView extends React.Component {
  constructor() {
    super();
    this.state = {
      minimize: false,
    };
  }

  onMinimizeClick = () => {
    let minimize = !this.state.minimize;
    this.setState({ minimize });
  };

  render = () => {
    const {
      id,
      label,
      client,
      audioMuted,
      videoMuted,
      onPin,
      onUnpin,
      pinned = false,
      whiteBoardSharingScreen,
      handleLockWhiteBoardSharing
    } = this.props;
    let minIconStyle = 'local-video-icon-layout';
    const isOwner = whiteBoardSharingScreen.ownerUid === client.uid;
    return (
      <div
        className={`local-video-container w-full max-w-full h-full max-h-full flex justify-center items-center relative p-1`}
      >
        <iframe
        ref={ref => {
            this.iframe = ref;
          }}
        width="100%"
        height="100%"
        src={whiteBoardSharingScreen.whiteboardLink}
        >
        </iframe>
        {whiteBoardSharingScreen.lockEditingByOthers && !isOwner && <div className="whiteboard-overlay"></div>}
        <div
          className={`${
            this.state.minimize ? minIconStyle : 'local-video-icon-layout'
          }`}
        ></div>
        <div className="absolute top-0 right-0 pt-2 w-full justify-center flex items-center">
          <span className="px-2 py-1 bg-gray-800 rounded-md text-white inline-block bg-opacity-50 mr-1">
            {label}
          </span>
          {isOwner && !whiteBoardSharingScreen.lockEditingByOthers && (
            <button
            title="Lock Editing By Others"
            className="w-6 h-6 bg-gray-800 bg-opacity-50 hover:bg-indigo-500 rounded flex items-center justify-center"
            onClick={()=>handleLockWhiteBoardSharing(true)}
          >
            <LockIcon className="w-4 h-4 text-white" />
          </button>
          )}
          {isOwner && whiteBoardSharingScreen.lockEditingByOthers && (
            <button
            title="Lock Editing By Others"
            style={{backgroundColor: "#667eea"}}
            className="w-6 h-6 bg-gray-800 bg-opacity-50 hover:bg-indigo-500 rounded flex items-center justify-center"
            onClick={()=>handleLockWhiteBoardSharing(false)}
          >
            <LockOpenIcon className="w-4 h-4 text-white" />
          </button>
          )}
        </div>
      </div>
    );
  };
}

export default WhiteboardView;
