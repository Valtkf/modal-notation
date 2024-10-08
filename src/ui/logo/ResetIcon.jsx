import PropTypes from "prop-types";

ResetIcon.propTypes = {
  className: PropTypes.string,
};

export default function ResetIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 9V6.33333C1 5.62609 1.31607 4.94781 1.87868 4.44772C2.44129 3.94762 3.20435 3.66667 4 3.66667H17M17 3.66667L14 1M17 3.66667L14 6.33333M17 9V11.6667C17 12.3739 16.6839 13.0522 16.1213 13.5523C15.5587 14.0524 14.7956 14.3333 14 14.3333H1M1 14.3333L4 17M1 14.3333L4 11.6667"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
