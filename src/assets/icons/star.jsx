import { PropTypes } from "prop-types";
export const AuthStar = ({
  width = "80",
  height = "80",
  stroke = "black",
  fill = "#FEC84B",
  onClick = () => {},
  className = "",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      onClick={onClick}
      className={className}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.8878 50.1122C24.4324 44.6568 16.9983 41.2204 7.84607 40C16.9983 38.7796 24.4324 35.3432 29.8878 29.8878C35.3432 24.4324 38.7796 16.9983 40 7.84607C41.2204 16.9983 44.6568 24.4324 50.1122 29.8878C55.5676 35.3432 63.0017 38.7796 72.1539 40C63.0017 41.2204 55.5676 44.6568 50.1122 50.1122C44.6568 55.5676 41.2204 63.0017 40 72.1539C38.7796 63.0017 35.3432 55.5676 29.8878 50.1122Z"
        fill="white"
        stroke={stroke}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C7.62742 12 12 7.62742 12 0C12 7.62742 16.3726 12 24 12C16.3726 12 12 16.3726 12 24C12 16.3726 7.62742 12 0 12Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 24C69.0849 24 72 21.0849 72 16C72 21.0849 74.9151 24 80 24C74.9151 24 72 26.9151 72 32C72 26.9151 69.0849 24 64 24Z"
        fill={fill}
      />
    </svg>
  );
};
AuthStar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};
