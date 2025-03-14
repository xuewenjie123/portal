import * as React from 'react';
import { theme } from 'antd';
interface IClusterProps {
  style?: React.CSSProperties;
}

const Cluster: React.FunctionComponent<IClusterProps> = props => {
  const { style = {} } = props;
  const { token } = theme.useToken();
  const { fontSize = 18, color = token.colorText } = style;

  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={fontSize} height={fontSize}>
      <path
        d="M768 550c-13.5 0-26.6 1.4-39.3 4l-79.5-137.7c33.9-34.6 54.8-82 54.8-134.3 0-106-86-192-192-192s-192 86-192 192c0 52.3 20.9 99.7 54.8 134.3L295.3 554c-4.6-1-9.3-1.8-14.1-2.4-105.1-13.9-201.6 60-215.5 165.2-13.9 105.1 60 201.6 165.2 215.5 102.8 13.6 197.4-56.9 214.5-158.3h133.4C594 864.8 673 934 768.1 934c106 0 192-86 192-192S874 550 768 550zM512 154c70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128 57.3-128 128-128zM382.9 758.8c-9.3 70.1-73.6 119.4-143.7 110.1-70.1-9.3-119.4-73.6-110.1-143.7s73.6-119.4 143.7-110.1 119.4 73.6 110.1 143.7zM578.7 710H445.4c-9.3-55.2-42.5-103.5-89.8-132.2L427 454.2c25.7 12.7 54.5 19.9 85.1 19.9s59.5-7.2 85.1-19.9l71.4 123.6c-46.9 28.4-80.5 76.2-89.9 132.2zM768 870c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z"
        fill={color}
      ></path>
    </svg>
  );
};

export default Cluster;
