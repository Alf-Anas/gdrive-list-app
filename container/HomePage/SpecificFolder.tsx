import FolderCollapse from "@/component/FolderCollapse";
import { Button, Input, Space } from "antd";
import { sortArrayObjet } from "@/utils";
import { DataJSONType, FolderType } from "@/interface/DataJSON";
import { useEffect, useState } from "react";

const { Search } = Input;
// Use This If you want specific Tab for specific folder
export default function SpecificFolder({
  DataJSON,
  folderName,
}: {
  DataJSON: DataJSONType;
  folderName: string;
}) {
  const [specificData, setSpecificData] = useState<FolderType[]>([]);
  const [isExpand, setIsExpand] = useState<{
    updateAt: number;
    value: boolean;
  }>({ updateAt: new Date().getTime(), value: false });

  useEffect(() => {
    const mFolder: FolderType[] = [];

    DataJSON.folders.forEach((item) => {
      const findItem = item.folders.find((it) => it.name === folderName);
      if (findItem?.name === folderName) {
        mFolder.push({
          ...item,
          files: findItem.files,
          folders: findItem.folders,
        });
      }
    });
    setSpecificData(mFolder);
  }, [DataJSON, folderName]);

  return (
    <>
      {/* <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(val) => onSearch(val)}
      /> */}
      <Space wrap style={{ marginBottom: "1rem" }}>
        <Button
          type="primary"
          onClick={() =>
            setIsExpand({ updateAt: new Date().getTime(), value: true })
          }
        >
          Expand All
        </Button>
        <Button
          type="dashed"
          onClick={() =>
            setIsExpand({ updateAt: new Date().getTime(), value: false })
          }
        >
          Collapse All
        </Button>
      </Space>

      {sortArrayObjet<FolderType>(specificData, "name").map((item, idx) => {
        return (
          <FolderCollapse
            key={idx}
            MyFolder={item}
            isOpen={isExpand.value}
            updateAt={isExpand.updateAt}
          />
        );
      })}
    </>
  );
}
