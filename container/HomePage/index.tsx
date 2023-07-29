import { Tabs } from "antd";
import { useEffect, useState } from "react";
// import SpecificFolder from "./SpecificFolder";
import { DataJSONType } from "@/interface/DataJSON";
import LocalDataJSON from "@/data/list-drive-folder-file-minify.json";
import General from "./General";
import classes from "./HomePage.module.css";

export default function HomePage() {
  // Use This If you want specific Tab for specific folder
  // const [listTab, setListTab] = useState<string[]>([]);
  const [dataJSON, setDataJson] = useState<DataJSONType>();

  useEffect(() => {
    const eDataJson = LocalDataJSON;
    if (!eDataJson) return;
    setDataJson(eDataJson);

    // Use This If you want specific Tab for specific folder
    // const mList: string[] = [];
    // eDataJson.folders.forEach((item) => {
    //   item.folders.forEach((it) => {
    //     mList.push(it.name);
    //   });
    // });
    // const uniq = [...new Set(mList)];
    // setListTab(uniq.sort());
  }, []);

  return (
    <div className={classes.div_box}>
      {dataJSON && (
        <Tabs
          defaultActiveKey="semua"
          type="card"
          size="large"
          items={[
            {
              label: "General",
              key: "general",
              children: <General DataJSON={dataJSON} />,
            },
            // Use This If you want specific Tab for specific folder
            // ...listTab.map((item, idx) => {
            //   return {
            //     label: item,
            //     key: String(idx + 1),
            //     children: (
            //       <SpecificFolder DataJSON={dataJSON} folderName={item} />
            //     ),
            //   };
            // }),
          ]}
        />
      )}
    </div>
  );
}
