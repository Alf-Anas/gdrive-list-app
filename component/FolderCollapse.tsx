import { Collapse } from "antd";
import { FolderType } from "@/interface/DataJSON";
import FileRow from "./FileRow";
import { sortArrayObjet } from "@/utils";
import { LinkOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import moment from "moment";

export default function FolderCollapse({
  MyFolder,
  isOpen,
  updateAt,
}: {
  MyFolder: FolderType;
  isOpen: boolean;
  updateAt: number;
}) {
  const [expandKey, setExpandKey] = useState<string | string[]>();
  useEffect(() => {
    setExpandKey(isOpen ? [MyFolder.id] : []);
  }, [MyFolder.id, isOpen, updateAt]);

  return (
    <>
      <Collapse
        activeKey={expandKey}
        onChange={(key) => setExpandKey(key)}
        size="small"
        items={[
          {
            key: MyFolder.id,
            label: MyFolder.name,
            children: (
              <>
                {sortArrayObjet<FolderType>(MyFolder.folders, "name").map(
                  (item, idx) => (
                    <FolderCollapse
                      key={idx}
                      MyFolder={item}
                      isOpen={isOpen}
                      updateAt={updateAt}
                    />
                  )
                )}
                {MyFolder.folders.length === 0 && MyFolder.files.length === 0 &&  "No Files"}
                <FileRow MyFiles={MyFolder.files} />
              </>
            ),
            extra: (
              <span>
                <span style={{ margin: "auto 1rem" }}>
                  {moment(MyFolder.lastUpdated).format("YYYY-MM-DD hh:mm")}
                </span>
                <LinkOutlined
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open(MyFolder.url, "_blank");
                  }}
                />
              </span>
            ),
          },
        ]}
      />
    </>
  );
}
