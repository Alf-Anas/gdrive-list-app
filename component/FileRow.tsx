import { List, Tag } from "antd";
import { FileType } from "@/interface/DataJSON";
import { getFileExtension, getFileTypeColor, sortArrayObjet } from "@/utils";
import { LinkOutlined } from "@ant-design/icons";
import moment from "moment";

export default function FileRow({ MyFiles = [] }: { MyFiles: FileType[] }) {
  return (
    <>
      {MyFiles.length > 0 && (
        <List
          size="small"
          bordered
          dataSource={sortArrayObjet<FileType>(MyFiles, "name")}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={
                  <span>
                    <span style={{ marginRight: "1rem" }}>
                      {moment(item.lastUpdated).format("YYYY-MM-DD hh:mm")}
                    </span>
                    <Tag color={getFileTypeColor(item.name, item.mimeType)}>
                      {getFileExtension(item.name, item.mimeType)}
                    </Tag>
                  </span>
                }
              />
              <LinkOutlined
                onClick={(event) => {
                  event.stopPropagation();
                  window.open(item.url, "_blank");
                }}
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
}
