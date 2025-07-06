import { Folder } from "lucide-react";
import { folderIcons } from "../../ColorsAndIcons";
import { Folder as FolderType } from "@repo/types";

export function FolderCard({
  folder,
  onClick
}: {
  folder: FolderType;
  onClick: () => void;
}) {
  const selectedIconObj = folderIcons.find((f) => f.name === folder.icon);
  const IconComponent = selectedIconObj ? selectedIconObj.icon : Folder;
  const hasColor = Boolean(folder.color);


  return (
    <div
      className={`sm:size-40 size-36 flex flex-col justify-between p-4 rounded-xl cursor-pointer transition-colors ${
        !hasColor
          ? "bg-[#E5E7EB] dark:bg-[#2A2A2A] hover:bg-[#D1D5DB] dark:hover:bg-[#3A3A3A]"
          : "hover:brightness-90"
      }`}
      style={{ 
        backgroundColor: hasColor && folder.color ? folder.color : undefined,
      }}
      onClick={onClick}
    >
      <div className="text-3xl">
        <IconComponent className="sm:size-8" />
      </div>
      <div>
        <p className="sm:text-lg font-semibold text-[#1F1F1F] dark:text-[#FFFFFFCF]">
          {folder.name}
        </p>
        <p className="text-sm text-[#4B5563] dark:text-[#A1A1AA]">
          {folder._count?.bookmarks}{" "}
          {folder._count?.bookmarks === 1 ? "bookmark" : "bookmarks"}
        </p>
      </div>
    </div>
  );
}