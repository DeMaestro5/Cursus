interface TabButtons {
  label: string;
  value: string;
  activeTab: string;
  onClick: (value: string) => void;
}
export default function TabButtons({
  label,
  value,
  activeTab,
  onClick,
}: TabButtons) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => onClick(value)}
      className={
        isActive
          ? 'bg-primary text-white font-semibold px-6 py-2 rounded-lg cursor-pointer'
          : ' bg-gray-100 text-gray-600 rounded-lg px-6 py-2 cursor-pointer '
      }
    >
      {label}
    </button>
  );
}
