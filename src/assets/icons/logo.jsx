import PropTypes from "prop-types";
export const MainLogo = ({
  width = "187",
  height = "48",
  fill = "#fff",
  onClick = () => {},
  className = "",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 187 48"
      fill="none"
      onClick={onClick}
      className={className}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 36.4667C28.8851 36.4667 34.4667 30.8851 34.4667 24C34.4667 17.1149 28.8851 11.5333 22 11.5333C15.1148 11.5333 9.53333 17.1149 9.53333 24C9.53333 30.8851 15.1148 36.4667 22 36.4667ZM22 46C34.1503 46 44 36.1503 44 24C44 11.8497 34.1503 2 22 2C9.84973 2 0 11.8497 0 24C0 36.1503 9.84973 46 22 46Z"
        fill={fill}
      />
      <path
        d="M22.2515 24.4816C24.5426 22.1905 28.2572 22.1905 30.5483 24.4816L41.9562 35.8896C44.2473 38.1807 44.2473 41.8952 41.9562 44.1863C39.6652 46.4774 35.9506 46.4774 33.6595 44.1863L22.2515 32.7783C19.9605 30.4873 19.9605 26.7727 22.2515 24.4816Z"
        fill={fill}
      />
      <path
        d="M25.4551 35.9818L32.7004 43.2271C36.1756 41.289 39.0709 38.436 41.0605 34.9938L33.8746 27.8079C32.6124 31.7473 29.4441 34.8336 25.4551 35.9818Z"
        fill={fill}
      />
      <path
        d="M79.5198 36.1001C78.8851 36.8841 78.1105 37.4814 77.1958 37.8921C76.2998 38.3028 75.3105 38.5081 74.2278 38.5081C72.7718 38.5081 71.4558 38.1908 70.2798 37.5561C69.1038 36.9401 67.7598 35.8388 66.2478 34.2521C64.4745 34.0281 62.8878 33.4588 61.4878 32.5441C60.1065 31.6294 59.0238 30.4534 58.2398 29.0161C57.4745 27.5601 57.0918 25.9548 57.0918 24.2001C57.0918 22.2774 57.5491 20.5508 58.4638 19.0201C59.3971 17.4708 60.6758 16.2574 62.2998 15.3801C63.9425 14.5028 65.7811 14.0641 67.8158 14.0641C69.8505 14.0641 71.6798 14.5028 73.3038 15.3801C74.9278 16.2574 76.2065 17.4708 77.1398 19.0201C78.0731 20.5508 78.5398 22.2774 78.5398 24.2001C78.5398 26.4774 77.8958 28.4748 76.6078 30.1921C75.3385 31.9094 73.6491 33.1041 71.5398 33.7761C72.0065 34.2614 72.4545 34.6068 72.8838 34.8121C73.3318 35.0361 73.8078 35.1481 74.3118 35.1481C75.5251 35.1481 76.5891 34.6628 77.5038 33.6921L79.5198 36.1001ZM61.6838 24.2001C61.6838 25.4134 61.9451 26.4961 62.4678 27.4481C63.0091 28.4001 63.7465 29.1468 64.6798 29.6881C65.6131 30.2108 66.6585 30.4721 67.8158 30.4721C68.9731 30.4721 70.0185 30.2108 70.9518 29.6881C71.8851 29.1468 72.6131 28.4001 73.1358 27.4481C73.6771 26.4961 73.9478 25.4134 73.9478 24.2001C73.9478 22.9868 73.6771 21.9041 73.1358 20.9521C72.6131 20.0001 71.8851 19.2628 70.9518 18.7401C70.0185 18.1988 68.9731 17.9281 67.8158 17.9281C66.6585 17.9281 65.6131 18.1988 64.6798 18.7401C63.7465 19.2628 63.0091 20.0001 62.4678 20.9521C61.9451 21.9041 61.6838 22.9868 61.6838 24.2001Z"
        fill={fill}
      />
      <path
        d="M96.8168 18.9361V34.0001H92.6728V32.2081C92.0941 32.8614 91.4035 33.3654 90.6008 33.7201C89.7981 34.0561 88.9301 34.2241 87.9968 34.2241C86.0181 34.2241 84.4501 33.6548 83.2928 32.5161C82.1355 31.3774 81.5568 29.6881 81.5568 27.4481V18.9361H85.9248V26.8041C85.9248 29.2308 86.9421 30.4441 88.9768 30.4441C90.0221 30.4441 90.8621 30.1081 91.4968 29.4361C92.1315 28.7454 92.4488 27.7281 92.4488 26.3841V18.9361H96.8168Z"
        fill={fill}
      />
      <path
        d="M108.031 34.2241C106.445 34.2241 105.017 33.8974 103.747 33.2441C102.497 32.5721 101.517 31.6481 100.807 30.4721C100.098 29.2961 99.7435 27.9614 99.7435 26.4681C99.7435 24.9748 100.098 23.6401 100.807 22.4641C101.517 21.2881 102.497 20.3734 103.747 19.7201C105.017 19.0481 106.445 18.7121 108.031 18.7121C109.618 18.7121 111.037 19.0481 112.287 19.7201C113.538 20.3734 114.518 21.2881 115.227 22.4641C115.937 23.6401 116.291 24.9748 116.291 26.4681C116.291 27.9614 115.937 29.2961 115.227 30.4721C114.518 31.6481 113.538 32.5721 112.287 33.2441C111.037 33.8974 109.618 34.2241 108.031 34.2241ZM108.031 30.6401C109.151 30.6401 110.066 30.2668 110.775 29.5201C111.503 28.7548 111.867 27.7374 111.867 26.4681C111.867 25.1988 111.503 24.1908 110.775 23.4441C110.066 22.6788 109.151 22.2961 108.031 22.2961C106.911 22.2961 105.987 22.6788 105.259 23.4441C104.531 24.1908 104.167 25.1988 104.167 26.4681C104.167 27.7374 104.531 28.7548 105.259 29.5201C105.987 30.2668 106.911 30.6401 108.031 30.6401Z"
        fill={fill}
      />
      <path
        d="M128.927 33.2721C128.498 33.5894 127.966 33.8321 127.331 34.0001C126.715 34.1494 126.062 34.2241 125.371 34.2241C123.579 34.2241 122.188 33.7668 121.199 32.8521C120.228 31.9374 119.743 30.5934 119.743 28.8201V22.6321H117.419V19.2721H119.743V15.6041H124.111V19.2721H127.863V22.6321H124.111V28.7641C124.111 29.3988 124.27 29.8934 124.587 30.2481C124.923 30.5841 125.39 30.7521 125.987 30.7521C126.678 30.7521 127.266 30.5654 127.751 30.1921L128.927 33.2721Z"
        fill={fill}
      />
      <path
        d="M131.379 18.9361H135.747V34.0001H131.379V18.9361ZM133.563 16.8361C132.76 16.8361 132.107 16.6028 131.603 16.1361C131.099 15.6694 130.847 15.0908 130.847 14.4001C130.847 13.7094 131.099 13.1308 131.603 12.6641C132.107 12.1974 132.76 11.9641 133.563 11.9641C134.366 11.9641 135.019 12.1881 135.523 12.6361C136.027 13.0841 136.279 13.6441 136.279 14.3161C136.279 15.0441 136.027 15.6508 135.523 16.1361C135.019 16.6028 134.366 16.8361 133.563 16.8361Z"
        fill={fill}
      />
      <path
        d="M154.557 26.5241C154.557 26.5801 154.529 26.9721 154.473 27.7001H143.077C143.282 28.6334 143.768 29.3708 144.533 29.9121C145.298 30.4534 146.25 30.7241 147.389 30.7241C148.173 30.7241 148.864 30.6121 149.461 30.3881C150.077 30.1454 150.646 29.7721 151.169 29.2681L153.493 31.7881C152.074 33.4121 150.002 34.2241 147.277 34.2241C145.578 34.2241 144.076 33.8974 142.769 33.2441C141.462 32.5721 140.454 31.6481 139.745 30.4721C139.036 29.2961 138.681 27.9614 138.681 26.4681C138.681 24.9934 139.026 23.6681 139.717 22.4921C140.426 21.2974 141.388 20.3734 142.601 19.7201C143.833 19.0481 145.205 18.7121 146.717 18.7121C148.192 18.7121 149.526 19.0294 150.721 19.6641C151.916 20.2988 152.849 21.2134 153.521 22.4081C154.212 23.5841 154.557 24.9561 154.557 26.5241ZM146.745 22.0161C145.756 22.0161 144.925 22.2961 144.253 22.8561C143.581 23.4161 143.17 24.1814 143.021 25.1521H150.441C150.292 24.2001 149.881 23.4441 149.209 22.8841C148.537 22.3054 147.716 22.0161 146.745 22.0161Z"
        fill={fill}
      />
      <path
        d="M166.621 18.7121C168.488 18.7121 169.99 19.2721 171.129 20.3921C172.286 21.5121 172.865 23.1734 172.865 25.3761V34.0001H168.497V26.0481C168.497 24.8534 168.236 23.9668 167.713 23.3881C167.19 22.7908 166.434 22.4921 165.445 22.4921C164.344 22.4921 163.466 22.8374 162.813 23.5281C162.16 24.2001 161.833 25.2081 161.833 26.5521V34.0001H157.465V18.9361H161.637V20.7001C162.216 20.0654 162.934 19.5801 163.793 19.2441C164.652 18.8894 165.594 18.7121 166.621 18.7121Z"
        fill={fill}
      />
      <path
        d="M186.54 33.2721C186.111 33.5894 185.579 33.8321 184.944 34.0001C184.328 34.1494 183.675 34.2241 182.984 34.2241C181.192 34.2241 179.802 33.7668 178.812 32.8521C177.842 31.9374 177.356 30.5934 177.356 28.8201V22.6321H175.032V19.2721H177.356V15.6041H181.724V19.2721H185.476V22.6321H181.724V28.7641C181.724 29.3988 181.883 29.8934 182.2 30.2481C182.536 30.5841 183.003 30.7521 183.6 30.7521C184.291 30.7521 184.879 30.5654 185.364 30.1921L186.54 33.2721Z"
        fill={fill}
      />
    </svg>
  );
};

MainLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};