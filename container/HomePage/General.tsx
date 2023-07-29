import FolderCollapse from "@/component/FolderCollapse";
import { Button, Input, Space } from "antd";
import FileRow from "@/component/FileRow";
import { sortArrayObjet } from "@/utils";
import { DataJSONType, FolderType } from "@/interface/DataJSON";
import { useEffect, useState } from "react";

const { Search } = Input;

export default function General({ DataJSON }: { DataJSON: DataJSONType }) {
  const [listSearch, setListSearch] = useState<FolderType>();
  const [isExpand, setIsExpand] = useState<{
    updateAt: number;
    value: boolean;
  }>({ updateAt: new Date().getTime(), value: false });

  // function onSearch(val = "") {
  //   if (val) {
  //     console.log(val);
  //   } else {
  //     console.log(val);
  //     setListSearch(DataJSON);
  //   }
  // }

  return (
    <>
      {/* <Search
        placeholder="Search..."
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

      {sortArrayObjet<FolderType>(DataJSON.folders, "name").map((item, idx) => {
        return (
          <FolderCollapse
            key={idx}
            MyFolder={item}
            isOpen={isExpand.value}
            updateAt={isExpand.updateAt}
          />
        );
      })}
      <FileRow MyFiles={DataJSON.files} />
    </>
  );
}
