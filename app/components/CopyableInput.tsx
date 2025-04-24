import CloneIcon from '@/app/icons/regular/clone.svg';

interface CopyableInputProps {
  value: string;
  label: string;
}

export default function CopyableInput({ value, label }: CopyableInputProps) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="mb-4">
      <small>{label}</small>
      <div className="relative mt-1">
        <input
          type="text"
          value={value}
          disabled
          className="w-full bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm font-mono text-gray-900 dark:text-gray-100"
        />
        <button
          onClick={() => copyToClipboard(value)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:opacity-80 transition-opacity text-gray-600 dark:text-gray-400"
          title="Copy to clipboard"
        >
          <CloneIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
