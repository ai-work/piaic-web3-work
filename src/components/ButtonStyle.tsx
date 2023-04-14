interface ButtonStyleProps {
  active?: boolean;
  label: string;
  onClick: () => void;
  icon: JSX.Element;
  description?: string;
}

const ButtonStyle = ({
  active,
  label,
  onClick,
  icon,
  description,
}: ButtonStyleProps) => {
  return (
    <button
      type="button"
      className={`${
        active
          ? "bg-gray-200 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent"
          : ""
      } text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-100 `}
      onClick={onClick}
    >
      <span className="flex">
        <span className="flex-shrink-0">{icon}</span>
        {/* {icon} */}

        <span className="grow ml-6">
          <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-800">
            {label}
          </span>
          <span>{description}</span>
        </span>
      </span>
    </button>
  );
};

export default ButtonStyle;
