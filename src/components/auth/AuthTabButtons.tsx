interface AuthTabButtons {
  label: string;
  value: string;
  onClick: (value: string) => void;
  activeTab: string;
}

export default function AuthTabButtons({
  label,
  value,
  activeTab,
  onClick,
}: AuthTabButtons) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => onClick(value)}
      className={
        isActive
          ? 'bg-primary rounded-xl px-6 py-2 text-white font-semibold cursor-pointer'
          : ' text-white rounded-xl px-6 py-2 cursor-pointer'
      }
    >
      {label}
    </button>
  );
}
