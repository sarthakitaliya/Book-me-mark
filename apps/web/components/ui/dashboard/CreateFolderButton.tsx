import { useUiStore } from "@repo/store";
import { Plus } from "lucide-react";

export function CreateFolderButton({className}: {className?: string}) {
      const {setShowFolderModal} = useUiStore();

  return (
    <button
      type="button"
      className={`flex flex-col justify-center items-center border-2 border-dashed border-[#9CA3AF] dark:border-[#4B5563] rounded-xl cursor-pointer hover:bg-[#E5E7EB] dark:hover:bg-[#2A2A2A] transition-colors p-4 ${className}`}
      onClick={() => setShowFolderModal(true)}
    >
      <Plus className="w-6 h-6 text-[#4B5563] dark:text-[#A1A1AA]" />
      <span className="mt-2 text-sm text-[#4B5563] dark:text-[#A1A1AA]">
        Create New Folder
      </span>
    </button>
  );
}
