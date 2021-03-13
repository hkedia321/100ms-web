import React from 'react';

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
      audioMuted,
      videoMuted,
      onPin,
      onUnpin,
      pinned = false,
      whiteBoardSharingScreen
    } = this.props;
    let minIconStyle = 'local-video-icon-layout';

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
        <div
          className={`${
            this.state.minimize ? minIconStyle : 'local-video-icon-layout'
          }`}
        ></div>
        <div className="absolute top-0 right-0 pt-2 w-full justify-center flex items-center">
          <span className="px-2 py-1 bg-gray-800 rounded-md text-white inline-block bg-opacity-50 mr-1">
            {label}
          </span>
        </div>
      </div>
    );
  };
}

export default WhiteboardView;
